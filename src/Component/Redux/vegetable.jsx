import {createSlice} from "@reduxjs/toolkit";
import cabbageImg from '../../assets/vegetable/cabbage-1850722_1280.jpg';
import broccoliImg from '../../assets/vegetable/bro.jpg';
import carrotImg from '../../assets/vegetable/carrot.jpg';
import lettuceImg from '../../assets/vegetable/lettuce.jpg';
import spinachImg from '../../assets/vegetable/spinach.jpg';
import tomatoesImg from '../../assets/vegetable/tomatoes.jpg';

export const vegetableSlice = createSlice({
    name: "vegetable",
    initialState: [
        {
          img: broccoliImg,
          name: "Brocoli",
          cost: 100,
          quantity: 0,
        },
        {
          img: cabbageImg,         
          name: "Cabbage",
          cost: 80,
          quantity: 0,
        },
        {
          img: carrotImg,        
          name: "Carrot",
          cost: 70,
          quantity: 0,
        },
        {
          img: lettuceImg,        
          name: "Lettuce",
          cost: 90,
          quantity: 0,
        },
        {
          img: spinachImg,        
          name: "Spinach",
          cost: 90,
          quantity: 0,
        },
        {
          img: tomatoesImg,        
          name: "Tomatoes",
          cost: 90,
          quantity: 0,
        }
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
      },
});
export const { incrementQuantity, decrementQuantity } = vegetableSlice.actions;
export default vegetableSlice.reducer;