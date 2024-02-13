<template>
  <ButtonStyled :disabled="disabled">
    {{ text }}
  </ButtonStyled>
</template>

<script lang="ts">
import { ButtonStyled } from '@/components/atoms/Button/ButtonStyled.ts';

export default {
  name: 'Button',
  components: {
    ButtonStyled,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup() {
    return {};
  },
};
</script>
