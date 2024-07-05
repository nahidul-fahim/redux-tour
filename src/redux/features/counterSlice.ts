import { createSlice } from "@reduxjs/toolkit";

type CounterType = {
    count: number;
}


const initialState: CounterType = { count: 0 }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        },
        incrementByValue: (state, action) => {
            state.count = state.count + action.payload;
        },
        decrementByValue: (state, action) => {
            state.count = state.count - action.payload;
        },
    },
});

export const { increment, decrement, incrementByValue, decrementByValue } = counterSlice.actions;

export default counterSlice.reducer;