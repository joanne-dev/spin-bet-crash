import { defineStore } from 'pinia';
import { GameState, States } from '@/types/CrashStore.ts';
import {CustomClass, ErrorMessages, TextButton} from "@/types/enums.ts";
export const useCrashStore = defineStore('crash', {
  state: (): GameState => {
    return {
      states: States.WAITING,
      lastResults: [1.7, 10.32, 100.95, 3.1, 2.4, 1.15, 3.83, 9, 100],
      balance: 100000,
      ui: {
        timer: {
          time: 6,
          isShowed: true,
        },
        starShip: {
          explode: false,
        },
        betSection: {
          hasBet: false,
          amount: 5000,
          actionFunction: () => {},
          textButton: TextButton.BET,
          isDisabled: false,
          customClass: '',
          multiplier: {
            value: 1,
            isShowed: false,
          },
        },
        winAlert: {
          isShowed: false,
          message: '',
          winAmount: 0,
        },
        error: {
          message: '',
          isShowed: false,
        },
      },
    };
  },
  actions: {
    waitingToBet() {
      this.states = States.WAITING;
      this.ui.betSection.isDisabled = false;
      this.ui.betSection.customClass = CustomClass.BET;
      this.ui.betSection.textButton = TextButton.BET;
      this.ui.timer.isShowed = true;
      this.ui.betSection.multiplier.isShowed = false;
    },
    graphing() {
      this.states = States.GRAPHING;
      this.ui.timer.isShowed = false;
      this.ui.betSection.multiplier.isShowed = true;
      if (this.ui.betSection.hasBet) {
        this.ui.betSection.customClass = CustomClass.CASH_OUT;
        this.ui.betSection.textButton = TextButton.CASH_OUT;
        this.ui.betSection.isDisabled = false;
      } else {
        this.setDisabledButton();
      }
    },
    completed() {
      this.states = States.COMPLETED;
      this.setDisabledButton();
      this.ui.starShip.explode = true;
      this.ui.betSection.hasBet = false;
      this.ui.timer.time = 6;
    },
    bet() {
      this.validateBalance();
    },
    validateBalance() {
      if (this.ui.betSection.amount > this.balance) {
        this.ui.error.message = ErrorMessages.INSUFFICIENT_FUNDS;
        this.ui.error.isShowed = true;
        this.ui.betSection.isDisabled = false;
      } else {
        this.balance -= this.ui.betSection.amount;
        this.ui.betSection.hasBet = true;
        this.setDisabledButton();
      }
    },

    setDisabledButton(){
      this.ui.betSection.customClass = CustomClass.DISABLED;
      this.ui.betSection.isDisabled = true;

    },

    showBetAmountError() {
      this.ui.error.message = ErrorMessages.BET_AMOUNT_ERROR;
      this.ui.error.isShowed = true;
    },
    cashOut() {
      this.setDisabledButton();
      this.ui.winAlert.isShowed = true;
      this.ui.winAlert.message = 'You have cashed out';
      this.ui.winAlert.winAmount = this.ui.betSection.amount * this.ui.betSection.multiplier.value;
      this.balance += this.ui.winAlert.winAmount;
      this.ui.betSection.hasBet = false;
      setTimeout(() => {
        this.ui.winAlert.isShowed = false;
      }, 3200);
    },
    closeErrorAlert() {
      this.ui.error.isShowed = false;
      this.ui.error.message = '';
    },
    updateLastResults(multiplier: number) {
      this.lastResults.unshift(Number(multiplier.toFixed(2)));
    },
  },
});
