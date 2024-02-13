<template>
  <LoadingCountDownStyled> 00:0{{ timer }} </LoadingCountDownStyled>
</template>

<script lang="ts">
import { LoadingCountDownStyled } from '@/components/atoms/LoadingCountDown/LoadingCountDown.styled.ts';

export default {
  name: 'LoadingCountDown',
  components: {
    LoadingCountDownStyled,
  },
  props: {
    timer: {
      type: Number,
      default: 0,
    },
  },
  setup() {},
};
</script>
