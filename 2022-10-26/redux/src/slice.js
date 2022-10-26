import { createSlice } from '@reduxjs/toolkit';

const defaultSlice = createSlice({
  name: "default",
  initialState: {
    text: ""
  },
  reducers: {
    setValue: (initialState, action) => {
      initialState.text = action.payload;
    }
  }
});

export const { setValue } = defaultSlice.actions;
export default defaultSlice.reducer; 
