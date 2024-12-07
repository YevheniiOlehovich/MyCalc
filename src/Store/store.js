import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import calculatorReducer from "./calculatorSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        calculator: calculatorReducer,
    },
});

export default store;
