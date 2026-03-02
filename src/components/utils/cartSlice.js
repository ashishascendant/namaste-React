import { createSlice } from "@reduxjs/toolkit";
{/*reducers are the available functions you can do according to the action */}
const cartSlice = createSlice({
    name: "cart",
    initialState : {
      items:[]
    },
    reducers:{  
        addItems: (state, action) =>{
            state.items.push(action.payload);
        },
        removeItems:(state)=>{
            state.items.pop();
        },
       clearCart: (state)=>{
           state.items.length = 0;
       }
    }
})
export const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
