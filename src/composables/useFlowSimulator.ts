import { useCrashStore } from '@/stores/crash.ts';
import { States } from '@/types/CrashStore.ts';
import { storeToRefs } from 'pinia';
import { getMultiplier } from '@/utils/RNGSimulatorMultiplier.ts';

export const useFlowSimulator = () => {
  const crashStore = useCrashStore();
  const { ui } = storeToRefs(crashStore);
  const startFlow = () => {
    crashStore.waitingToBet();
    countDownLoader();
  };

  const countDownLoader = () => {
    const interval = setInterval(() => {
      ui.value.timer.time = ui.value.timer.time > 0 ? ui.value.timer.time - 1 : 0;
      if (ui.value.timer.time === 0) {
        graphing();
        clearInterval(interval);
      }
    }, 1000);
  };
  const graphing = () => {
    crashStore.graphing();
    getMultiplier().then((multiplier) => {
      validateMultiplierHasFinished(multiplier);
    });
  };

  const validateMultiplierHasFinished = (multiplier: number) => {
    if (multiplier > 6) {
      ui.value.betSection.multiplier.value += 0.05;
    } else {
      ui.value.betSection.multiplier.value += 0.01;
    }
    if (ui.value.betSection.multiplier.value < multiplier) {
      setTimeout(() => {
        validateMultiplierHasFinished(multiplier);
      }, 150);
    } else {
      completed();
    }
  };

  const completed = () => {
    crashStore.completed();
    crashStore.updateLastResults(crashStore.ui.betSection.multiplier.value);
    setTimeout(() => {
      crashStore.ui.starShip.explode = false;
      crashStore.ui.betSection.multiplier.value = 1;
      startFlow();
    }, 2000);
  };

  return {
    startFlow,
  };
};
