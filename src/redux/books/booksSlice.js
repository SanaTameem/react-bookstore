import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'JE8dqCbsEwLRFnWBCgvQ';
const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', async (thunkAPI) => {
  try {
    const response = await axios(`${apiURL}/${apiKey}/books`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const postBook = createAsyncThunk('book/postBook', async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${apiURL}/${apiKey}/books`, data);
    thunkAPI.dispatch(fetchBooks());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`${apiURL}/${apiKey}/books/${id}`, id);
    thunkAPI.dispatch(fetchBooks());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const booksSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      const data = Object.keys(action.payload).map((item) => {
        const book = {};
        book.author = action.payload[item][0].author;
        book.category = action.payload[item][0].category;
        book.title = action.payload[item][0].title;
        book.item_id = item;
        return book;
      });
      state.books = data;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [postBook.pending]: (state) => {
      state.isLoading = true;
    },
    [postBook.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [postBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteBook.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteBook.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [postBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default booksSlice.reducer;
