import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        nightmode: false,
    },
    reducers: {
        toggleNightmode: (state) => {
            state.nightmode = !state.nightmode;
        },
    },
});

export const { toggleNightmode } = themeSlice.actions;
export default themeSlice.reducer;