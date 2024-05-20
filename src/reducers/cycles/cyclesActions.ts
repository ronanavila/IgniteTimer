import { Cycle } from "./cyclesReducer";

export enum ActionTypes {
  AddNewCycle = "AddNewCycle",
  InterruptCurrentCycle = "InterruptCurrentCycle",
  MarkCurrentCycleAsFinished = "MarkCurrentCycleAsFinished",
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.AddNewCycle,
    payload: {
      newCycle,
    },
  };
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.InterruptCurrentCycle,
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MarkCurrentCycleAsFinished,
  };
}
