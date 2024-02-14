<template>
  <CrashStyled>
    <Header :balance="balance" />
    <WinAlert :message="useCurrency(ui.winAlert.winAmount)" v-if="ui.winAlert.isShowed" :multiplier="multiplierAtCashOut"/>
    <ErrorAlert v-if="ui.error.isShowed" :message="ui.error.message" :on-click="closeErrorAlert" />
    <CrashAnimation />
    <LastResults :results="lastResults" />
    <BetSection />
  </CrashStyled>
</template>

<script lang="ts">
import CrashAnimation from '@/components/molecules/CrashAnimation/CrashAnimation.vue';
import BetSection from '@/components/molecules/BetSection/BetSection.vue';
import { onMounted } from 'vue';
import { useFlowSimulator } from '@/composables/useFlowSimulator.ts';
import { useCrashStore } from '@/stores/crash.ts';
import { storeToRefs } from 'pinia';
import ErrorAlert from '@/components/molecules/ErrorAlert/ErrorAlert.vue';
import { useCurrency } from '@/composables/useCurrency.ts';
import LastResults from '@/components/atoms/LastResults/LastResults.vue';
import WinAlert from '@/components/atoms/WinAlert/WinAlert.vue';
import Logo from "@/components/atoms/Logo/Logo.vue";
import CrashStyled from "@/components/pages/Crash/Crash.styled.ts";
import Header from "@/components/molecules/Header/Header.vue";

export default {
  name: 'MainAnimation',
  components: {
    CrashStyled,
    CrashAnimation,
    BetSection,
    ErrorAlert,
    LastResults,
    WinAlert,
    Logo,
    Header
  },
  setup() {
    const { startFlow } = useFlowSimulator();
    const crashStore = useCrashStore();
    const { ui, balance, lastResults, multiplierAtCashOut } = storeToRefs(crashStore);
    onMounted(() => {
      startFlow();
    });
    const closeErrorAlert = () => {
      crashStore.closeErrorAlert();
    };
    return {
      ui,
      closeErrorAlert,
      useCurrency,
      balance,
      lastResults,
      multiplierAtCashOut
    };
  },
};
</script>
