import {createSlice} from "@reduxjs/toolkit";
import {fetchAllProducts} from "../thunks/productThunk";

const productSlice = createSlice({
  name: 'product',
  reducers: {},
  initialState: {
    data: [],
    loading: ''
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
          state.data = action.payload;
          state.loading = 'success';
        })
        .addMatcher(action => action.type.endsWith('/rejected'), (state) => {
          state.data = [];
          state.loading = 'error';
        })
  }
});

export default productSlice;