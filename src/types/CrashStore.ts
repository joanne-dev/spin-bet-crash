export type GameState = {
  states: States;
  lastResults: number[];
  multiplierAtCashOut: number;
  balance: number;
  ui: UI;
};

export enum States {
  WAITING = 'WAITING',
  GRAPHING = 'GRAPHING',
  COMPLETED = 'COMPLETED',
}
export type UI = {
  timer: Timer;
  starShip: StarShip;
  betSection: BetSection;
  winAlert: WinAlert;
  error: CrashError;
};

export type Timer = {
  time: number;
  isShowed: boolean;
};

export type StarShip = {
  explode: boolean;
};
export type CrashError = {
  message: string;
  isShowed: boolean;
};

export type BetSection = {
  amount: number;
  hasBet: boolean;
  actionFunction: Function;
  textButton: string;
  isDisabled: boolean;
  customClass: string;
  multiplier: Multiplier;
};
export type Multiplier = {
  value: number;
  isShowed: boolean;
};

export type WinAlert = {
  isShowed: boolean;
  message: string;
  winAmount: number;
};
