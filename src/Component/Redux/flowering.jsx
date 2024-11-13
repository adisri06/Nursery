import { createSlice } from "@reduxjs/toolkit";
import dafodil from "../../assets/flowers/dafodil.jpg";
import rose from "../../assets/flowers/rose.jpg";
import sunflower from "../../assets/flowers/sunflower.jpg";
import tulip from "../../assets/flowers/tulips.jpg";
import marigold from "../../assets/flowers/marigold.jpg";   
import lily from "../../assets/flowers/lily.jpg";

export const floweringSlice = createSlice({
    name: "flowering",
    initialState: [
        {
            img: dafodil,
            name: "Dafodil",
            cost: 100,
            quantity: 0,
        },
        {
            img: rose,
            name: "Rose",
            cost: 180,
            quantity: 0,
        },
        {
            img: sunflower,
            name: "Sunflower",
            cost: 170,       
            quantity: 0,
        },        
        {
            img: tulip,
            name: "Tulip",
            cost: 160,
            quantity: 0,
        },
        {
            img: marigold,
            name: "Marigold",
            cost: 250,
            quantity: 0,
        }, {
            img: lily,
            name: "Lily",
            cost: 150,
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
  });
  export const { incrementQuantity, decrementQuantity, deleteItem } = floweringSlice.actions;
  export default floweringSlice.reducer;    
        