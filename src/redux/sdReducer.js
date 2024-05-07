import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedComponent: null,
};

const sdSlice = createSlice({
  name: 'sd',
  initialState,
  reducers: {
    addComponent: (state, action) => {
        state.selectedComponent = action.payload;
    },
  },
});

export const { addComponent } = sdSlice.actions;
export default sdSlice.reducer;