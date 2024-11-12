import { configureStore } from "@reduxjs/toolkit";
import vegetableReducer from "./vegetable";

const store = configureStore({
  reducer: {
    vegetable: vegetableReducer
  }
});

export default store;