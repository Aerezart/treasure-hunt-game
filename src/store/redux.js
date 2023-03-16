import { createSlice, configureStore } from "@reduxjs/toolkit"
import gameSlice from './gameSlice.js'


const store = configureStore({
    reducer:{
        game: gameSlice
    }
})

export default store