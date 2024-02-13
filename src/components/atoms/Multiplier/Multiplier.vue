<template>
  <MultiplierStyled :class="{ explode: explode }">
    <div class="multiplier">
      <span class="multiplier">{{ multiplier }}</span>
    </div>
  </MultiplierStyled>
</template>

<script lang="ts">
import { MultiplierStyled } from '@/components/atoms/Multiplier/Multiplier.styled.ts';

export default {
  name: 'Multiplier',
  components: {
    MultiplierStyled,
  },
  props: {
    multiplier: {
      type: String,
      required: true,
    },
    explode: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
};
</script>
