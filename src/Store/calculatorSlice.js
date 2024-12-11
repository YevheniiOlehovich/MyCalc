import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        input: "",
        result: "",
    },
    reducers: {
        setInput: (state, action) => {
            state.input = action.payload;
        },
        setResult: (state, action) => {
            state.result = action.payload;
        },
        clear: (state) => {
            state.input = "";
            state.result = "";
        },
    },
});

export const { setInput, setResult, clear } = calculatorSlice.actions;

export default calculatorSlice.reducer;


