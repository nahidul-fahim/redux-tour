import { createSlice } from "@reduxjs/toolkit";

/*
ACTIONS: 
1. Create a store
2. Wrap main.jsx with 'Provider' from "React-redux"
3. Create a slice.
4. Connect slice with store and we connect store with main.jsx using 'Provider'

So, by following these steps redux is now connected with our system.
*/

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
        incrementByAmount: (state, action) => {
            state.value = state.value + action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;