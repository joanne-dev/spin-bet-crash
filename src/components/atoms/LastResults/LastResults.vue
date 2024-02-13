<template>
  <LastResultsStyled>
    <div class="title">Last crashes</div>
    <div class="last-results-container">
      <div class="latest">{{ results.at(0) }}</div>
      <div class="last-results-box" v-for="result in results.slice(1, 8)">
        <div class="result-box">{{ result }}</div>
      </div>
    </div>
  </LastResultsStyled>
</template>

<script lang="ts">
import { LastResultsStyled } from '@/components/atoms/LastResults/LastResults.styled.ts';

export default {
  name: 'LastResults',
  components: {
    LastResultsStyled,
  },
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>
