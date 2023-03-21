import { createSlice } from "@reduxjs/toolkit";


const isGameStarted = localStorage.getItem("isGameStarted");
const currentPinPosition = localStorage.getItem("currentPinPosition");
const inventory = JSON.parse(localStorage.getItem("inventory"));
const passedPuzzles = JSON.parse(localStorage.getItem("passedPuzzles"));


let initialState = {
    isGameStarted: false,
    currentPinPosition: 1,
    inventory: [1],
    passedPuzzles: []
}

if(isGameStarted){
    initialState = {
        isGameStarted: true,
        currentPinPosition: currentPinPosition ? currentPinPosition : 1,
        inventory: inventory ? inventory : [],
        passedPuzzles: passedPuzzles ? passedPuzzles : []
    }
}


const gameSlice = createSlice({
    name:'game',
    initialState:initialState,
    reducers:{
       
        setGameStarted(state, action){
            state.isGameStarted = action.payload
            localStorage.setItem("isGameStarted", action.payload);
        },
        changePosition(state, action){
            state.currentPinPosition = action.payload
            localStorage.setItem("currentPinPosition", action.payload);
        },
        addItemToInventory(state, action){
            state.inventory.push(action.payload)
            localStorage.setItem("inventory", JSON.stringify(state.inventory));
        },
        removeItemFromInventory(state, action){
            state.inventory = state.inventory.filter((item, index) => index !== action.payload);
            localStorage.setItem("inventory", JSON.stringify(state.inventory));
        },
        rememberPassedPuzzle(state, action){
            state.passedPuzzles.push(action.payload)
            localStorage.setItem("passedPuzzles", JSON.stringify(state.passedPuzzles));
        }
    }
})

export const gameActions = gameSlice.actions
export default gameSlice.reducer