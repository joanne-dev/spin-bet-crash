import { defineStore } from 'pinia';
import { spinBet } from '@/themes/spinBet.ts';
import { Theme } from '@/types/theme.ts';

type IThemeStore = {
  defaultTheme: Theme;
};

export const useTheme = defineStore('theme', {
  state: (): IThemeStore => ({
    defaultTheme: spinBet,
  }),
  actions: {
    setDefault(value: Theme) {
      this.defaultTheme = value;
    },
  },
});
