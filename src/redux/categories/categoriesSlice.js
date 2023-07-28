import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under Construction' ? 'Under Construction' : state.categories;
    },
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
