import { createSlice } from "@reduxjs/toolkit"


type BoxesType = {
    box: 0
}

const initialState: BoxesType = { box: 0 }


const boxSlice = createSlice({
    name: "boxes",
    initialState,
    reducers: {

    }
})



export default boxSlice.reducer;