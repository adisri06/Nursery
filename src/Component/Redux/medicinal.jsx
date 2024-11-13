import { createSlice } from "@reduxjs/toolkit";
import mint from "../../assets/medicinal/mint.jpg";
import aloevera from "../../assets/medicinal/aloevera.jpg";
import turmeric from "../../assets/medicinal/turmeric.jpg";

export const medicinalSlice = createSlice({
    name: "medicinal",
    initialState: [
        {
            img: mint,
            name: "Mint",
            cost: 100,
            quantity: 0,
        },
        {
            img: aloevera,
            name: "Rosemary",
            cost: 80,
            quantity: 0,
        },
        {
            img: turmeric,
            name: "Sage",
            cost: 70,       
            quantity: 0,
        },        
        
    ],
    reducers: {
        incrementQuantity: (state, action) => {
          const { payload: index } = action;
          if (state[index]) {
            state[index].quantity++;
          }
        },
        decrementQuantity: (state, action) => {
          const { payload: index } = action;
          if (state[index] && state[index].quantity > 0) {
            state[index].quantity--;
          }
        },
        deleteItem: (state, action) => {
          const { payload: index } = action;
          if (state[index]) {
            state[index].quantity = 0; // This sets the quantity to 0
          }
        },  
      },     
})

export const { incrementQuantity, decrementQuantity,deleteItem } = medicinalSlice.actions;
export default medicinalSlice.reducer