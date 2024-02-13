<template>
  <WinAlertStyled>
    <div class="win-alert">
      <div class="title">You won!</div>
      <div class="message">
        {{ message }}
      </div>
    </div>
  </WinAlertStyled>
</template>

<script lang="ts">
import { WinAlertStyled } from '@/components/atoms/WinAlert/WinAlert.styled.ts';

export default {
  name: 'WinAlert',
  components: {
    WinAlertStyled,
  },
  props: {
    message: {
      type: String,
      default: '',
    },
  },

  setup() {
    return {};
  },
};
</script>
