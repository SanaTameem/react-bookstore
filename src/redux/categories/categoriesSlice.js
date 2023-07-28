import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => 'Under Construction',
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
