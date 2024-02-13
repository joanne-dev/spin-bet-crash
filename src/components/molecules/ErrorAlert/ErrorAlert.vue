<template>
  <ErrorAlertStyled class="background" @click="onClick()">
    <div class="error-alert" @click.stop>
      <div class="error-alert__title">Error!</div>
      <div class="error-alert__message">
        {{ message }}
      </div>
      <Button class="error-alert__button" text="Ok" @click="onClick()" />
    </div>
  </ErrorAlertStyled>
</template>

<script lang="ts">
import Button from '@/components/atoms/Button/Button.vue';
import { ErrorAlertStyled } from '@/components/molecules/ErrorAlert/ErrorAlert.styled.ts';

export default {
  name: 'ErrorAlert',
  components: { Button, ErrorAlertStyled },
  props: {
    message: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  setup() {
    return {};
  },
};
</script>
