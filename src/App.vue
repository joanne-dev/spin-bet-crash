<template>
  <ThemeProvider :theme="theme">
    <Crash />
  </ThemeProvider>
</template>
<script lang="ts">
import { ThemeProvider } from 'vue3-styled-components';
import { spinBet } from '@/themes/spinBet.ts';
import { ref } from 'vue';
import Crash from "@/components/pages/Crash/Crash.vue";
export default {
  name: 'App',
  components: {
    Crash,
    ThemeProvider,
  },
  setup() {
    const theme = ref(spinBet);
    return {
      theme,
    };
  },
};
</script>
<style scoped></style>
