<template>
  <GraphicSimulatorStyled id="axis-frame">
    <div id="x-axis-stubs">
      <div v-for="n in 20" :key="n" class="horizontal-stub"></div>
    </div>
    <div id="y-axis-stubs">
      <div v-for="n in 14" :key="n" class="vertical-stub"></div>
    </div>
  </GraphicSimulatorStyled>
</template>

<script lang="ts">
import GraphicSimulatorStyled from '@/components/atoms/Graphic/CrashAnimation.styled.ts';

export default {
  name: 'GraphicSimulator',
  components: {
    GraphicSimulatorStyled,
  },
  setup() {
    return {};
  },
};
</script>
