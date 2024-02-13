<template>
  <HeaderStyled class="header">
    <Logo />
    <h1 class="title-game">CRASH GAME</h1>
    <div class="balance-container">
      <div class="title">Balance:</div>
      <div class="balance">{{ useCurrency(balance) }}</div>
    </div>
  </HeaderStyled>
</template>

<script lang="ts">
import Logo from "@/components/atoms/Logo/Logo.vue";
import {useCurrency} from "@/composables/useCurrency.ts";
import {HeaderStyled} from "@/components/molecules/Header/Header.styled.ts";

export default {
  name: 'Header',
  components: {Logo, HeaderStyled},
  props: {
    balance: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {useCurrency};
  },
}
</script>
