import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    isGameStarted: false,
    currentDiceVal: null,
    currentPinPosition: 1,
    currentPinCoordinates: [50, 5.8]
}

const gameSlice = createSlice({
    name:'game',
    initialState:initialState,
    reducers:{
        setDiceVal(state, action){
            state.currentDiceVal = action.payload
        },
        setGameStarted(state, action){
            state.isGameStarted = action.payload
        },
        changePosition(state, action){
            state.currentPinPosition = action.payload
        },
        moveBy(state, action){
            state.currentPinCoordinates = action.payload
        }
    }
})

export const gameActions = gameSlice.actions
export default gameSlice.reducer