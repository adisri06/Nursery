import { configureStore } from "@reduxjs/toolkit";
import vegetableReducer from "./vegetable";
import medicinalreducer from "./medicinal";
import floweringreducer from "./flowering";

const store = configureStore({
  reducer: {
    vegetable: vegetableReducer,
    medicinal: medicinalreducer,
    flowering: floweringreducer


  }
});

export default store;