<template>
  <CrashAnimationStyled id="bg-particles">
    <BackgroundParticles />
    <Multiplier
      v-if="ui.betSection.multiplier.isShowed"
      class="multiplier"
      :multiplier="multiplierFormatted"
      :explode="ui.starShip.explode"
    />
    <LoadingCountDown v-if="ui.timer.isShowed" class="loading" :timer="ui.timer.time" />
    <div id="translation-box">
      <div id="translation-point">
        <div id="hover-box">
          <Rocket id="rocket" v-if="!ui.starShip.explode" />
          <div id="crash" v-else>
            <img :src="explode" width="154" height="144" alt="explode" />
          </div>
        </div>
      </div>
    </div>
    <GraphicSimulator />
  </CrashAnimationStyled>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue';

import CrashAnimationStyled from '@/components/molecules/CrashAnimation/CrashAnimation.styled.ts';
import BackgroundParticles from '@/components/atoms/BackgroundParticles/BackgroundParticles.vue';
import useCrashAnimation from '@/composables/useCrashAnimation.ts';
import explode from '@/assets/explode.gif';
import GraphicSimulator from '@/components/atoms/Graphic/GraphicSimulator.vue';
import { useCrashStore } from '@/stores/crash.ts';
import { storeToRefs } from 'pinia';
import Multiplier from '@/components/atoms/Multiplier/Multiplier.vue';
import Rocket from '@/components/atoms/Rocket/Rocket.vue';
import LoadingCountDown from '@/components/atoms/LoadingCountDown/LoadingCountDown.vue';

export default {
  name: 'CrashAnimation',
  components: {
    CrashAnimationStyled,
    BackgroundParticles,
    Rocket,
    GraphicSimulator,
    Multiplier,
    LoadingCountDown,
  },
  setup() {
    const crashStore = useCrashStore();
    const { ui } = storeToRefs(crashStore);
    const { setupAnimation, startAnimation, validateActionFunction } = useCrashAnimation(crashStore);
    const fadeBackground = ref(true);

    const multiplierFormatted = computed(() => {
      return ui.value.betSection.multiplier.value ? ui.value.betSection.multiplier.value.toFixed(2) + 'X' : '';
    });

    onMounted(() => {
      setTimeout(() => {
        setupAnimation();
        validateActionFunction(crashStore.states);
        const bgParticles = document.getElementById('bg-particles')!;
        const elementsToShow = bgParticles.getElementsByClassName('hide');
        Array.from(elementsToShow).forEach((element) => {
          element.classList.remove('hide');
        });
        startAnimation();
      }, 10);
    });

    return {
      fadeBackground,
      multiplierFormatted,
      ui,
      crashStore,
      explode,
    };
  },
};
</script>
