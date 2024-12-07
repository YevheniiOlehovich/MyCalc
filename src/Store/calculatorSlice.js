import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: "",
    result: null,
};

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addToInput: (state, action) => {
            state.input += action.payload; // додаємо значення до інпута
        },
        clearInput: (state) => {
            state.input = "";
            state.result = null;
        },
        calculateResult: (state) => {
            try {
                const sanitizedInput = state.input.replace(/[^-()\d/*+.]/g, "");
                state.result = new Function("return " + sanitizedInput)();
            } catch {
                state.result = "Error";
            }
        },
    },
});

export const { addToInput, clearInput, calculateResult } =
    calculatorSlice.actions;

export default calculatorSlice.reducer;
