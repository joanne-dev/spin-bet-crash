<template>
  <BetSectionStyled>
    <div class="actions">
      <div class="amount-info">
        <span>Bet amount: </span>
        <InputStyled
          @input="getInput"
          :value="ui.betSection.amount"
          type="number"
          placeholder="Set your Bet"
          :disabled="ui.betSection.hasBet"
        />
      </div>
      <Button
        :class="ui.betSection.customClass"
        @click="ui.betSection.actionFunction"
        :text="getTextButton()"
        :disabled="ui.betSection.isDisabled"
      />
    </div>
  </BetSectionStyled>
</template>

<script lang="ts">
import Button from '@/components/atoms/Button/Button.vue';
import { BetSectionStyled } from '@/components/molecules/BetSection/BetSection.styled.ts';
import { useCrashStore } from '@/stores/crash.ts';
import { storeToRefs } from 'pinia';

import { computed, onMounted, ref, watch } from 'vue';
import { States } from '@/types/CrashStore.ts';
import { InputStyled } from '@/components/atoms/Input/Input.styled.ts';

export default {
  name: 'BetSection',
  components: {
    InputStyled,
    BetSectionStyled,
    Button,
  },
  setup() {
    const crashStore = useCrashStore();
    const { ui, states } = storeToRefs(crashStore);
    const accumulatedProfit = computed(() => {
      const total = (ui.value.betSection.amount * ui.value.betSection.multiplier.value).toFixed(2);
      return '+' + total;
    });

    onMounted(() => {
      validateActionFunction(states.value);
    });
    watch(() => crashStore.states, validateActionFunction);
    function validateActionFunction(value: any) {
      switch (value) {
        case States.WAITING:
          ui.value.betSection.actionFunction = bet;
          break;
        case States.GRAPHING:
          ui.value.betSection.actionFunction = cashOut;
          break;
        case States.COMPLETED:
          ui.value.betSection.actionFunction = bet;
          break;
      }
    }

    const getTextButton = () => {
      if (crashStore.states === States.WAITING) {
        return ui.value.betSection.textButton;
      } else if (crashStore.states === States.GRAPHING && ui.value.betSection.hasBet) {
        return ui.value.betSection.textButton + ' ' + accumulatedProfit.value;
      } else {
        return ui.value.betSection.textButton;
      }
    };

    const bet = () => {
      if (ui.value.betSection.amount > 0) {
        crashStore.bet();
      } else {
        crashStore.showBetAmountError();
      }
    };
    const cashOut = () => {
      crashStore.cashOut(Number(ui.value.betSection.multiplier.value.toFixed(2)));
    };

    const getInput = (event: any) => {
      ui.value.betSection.amount = Number(event.target.value);
    };
    return { bet, cashOut, ui, getInput, getTextButton };
  },
};
</script>
