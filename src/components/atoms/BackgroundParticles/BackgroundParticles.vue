<template>
  <BackgroundParticlesStyled>
    <vue-particles
      v-if="particleConfigRef"
      id="particles-background"
      :particles-init="particlesInit"
      :particles-loaded="particlesLoaded"
      :options="particleConfigRef"
    />
  </BackgroundParticlesStyled>
</template>

<script lang="ts">
import { ref } from 'vue';
import { loadFull } from 'tsparticles';
import particleConfigJson from '@/assets/config/BackgroundParticlesConfig.json';
import BackgroundParticlesStyled from '@/components/atoms/BackgroundParticles/BackgroundParticles.styled';

export default {
  name: 'BackgroundParticles',
  components: {
    BackgroundParticlesStyled,
  },
  setup() {
    let particleConfigRef = ref(particleConfigJson);

    const particlesInit = async (engine: any) => {
      await loadFull(engine);
    };

    const particlesLoaded = async (container: any) => {};

    return { particlesInit, particlesLoaded, particleConfigRef };
  },
};
</script>
