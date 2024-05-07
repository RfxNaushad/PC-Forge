import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedComponent: [],
};

const othersSlice = createSlice({
  name: 'others',
  initialState,
  reducers: {
    addComponent: (state, action) => {
        state.selectedComponent.push(action.payload);
    },
 
  },
});

export const { addComponent } = othersSlice.actions;
export default othersSlice.reducer;