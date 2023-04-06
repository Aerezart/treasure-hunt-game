import { createSlice } from "@reduxjs/toolkit";

const isGameStarted = localStorage.getItem("isGameStarted");
const isGameFinished = localStorage.getItem("isGameFinished");
const isTurnInProcess = localStorage.getItem("isTurnInProcess");
const currentPinPosition = localStorage.getItem("currentPinPosition");
const inventory = JSON.parse(localStorage.getItem("inventory"));
const passedPuzzles = JSON.parse(localStorage.getItem("passedPuzzles"));

let initialState = {
  isGameStarted: false,
  isGameFinished: false,
  isTurnInProcess: false,
  currentPinPosition: 1,
  inventory: [1],
  passedPuzzles: [],
};

if (isGameStarted) {
  initialState = {
    isGameStarted: true,
    isGameFinished: isGameFinished ? isGameFinished : false,
    isTurnInProcess: isTurnInProcess ? isTurnInProcess : false,
    currentPinPosition: currentPinPosition ? currentPinPosition : 1,
    inventory: inventory ? inventory : [],
    passedPuzzles: passedPuzzles ? passedPuzzles : [],
  };
}

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    setTurnInProcess(state, action) {
      state.isTurnInProcess = action.payload;
      localStorage.setItem("setTurnInProcess", action.payload);
    },
    setGameStarted(state, action) {
      state.isGameStarted = action.payload;
      localStorage.setItem("isGameStarted", action.payload);
    },
    setGameFinished(state, action) {
      state.isGameFinished = action.payload;
      localStorage.setItem("isGameFinished", action.payload);
    },
    changePosition(state, action) {
      state.currentPinPosition = action.payload;
      localStorage.setItem("currentPinPosition", action.payload);
    },
    addItemToInventory(state, action) {
      state.inventory.push(action.payload);
      localStorage.setItem("inventory", JSON.stringify(state.inventory));
    },
    removeItemFromInventory(state, action) {
      state.inventory = state.inventory.filter(
        (item, index) => index !== action.payload
      );
      localStorage.setItem("inventory", JSON.stringify(state.inventory));
    },
    rememberPassedPuzzle(state, action) {
      state.passedPuzzles.push(action.payload);
      localStorage.setItem(
        "passedPuzzles",
        JSON.stringify(state.passedPuzzles)
      );
    },
    reset(state) {
      state.isGameStarted = false;
      state.isGameFinished = false;
      state.currentPinPosition = 1;
      state.inventory = [1];
      state.passedPuzzles = [];

      localStorage.removeItem("isGameStarted");
      localStorage.removeItem("isGameFinished");
      localStorage.removeItem("currentPinPosition");
      localStorage.removeItem("inventory");
      localStorage.removeItem("passedPuzzles");
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
