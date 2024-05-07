import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedComponent: null,
};

const monitorSlice = createSlice({
  name: 'monitor',
  initialState,
  reducers: {
    addComponent: (state, action) => {
        state.selectedComponent = action.payload;
    },
   
  },
});

export const { addComponent } = monitorSlice.actions;
export default monitorSlice.reducer;