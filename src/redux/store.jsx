import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import logger from "./middlewares/Logger";

/*
ACTIONS: 
1. Create a store
2. Wrap main.jsx with 'Provider' from "React-redux"
3. Create a slice.
4. Connect slice with store and we connect store with main.jsx using 'Provider'

So, by following these steps redux is now connected with our system.
*/


export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});