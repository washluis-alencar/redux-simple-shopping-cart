import {createAsyncThunk} from "@reduxjs/toolkit";
import * as productService from "../../services/productService";

export const fetchAllProducts = createAsyncThunk('product/fetchAll', async() => {
  return await productService.fetchAllProducts();
});