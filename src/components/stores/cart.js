import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  statusTab: false,  
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action){
      const {productId, quantity} = action.payload;
      const indexProductId = (state.items).findIndex(item => item.productId === productId);
      if(indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({productId, quantity});
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      
    },
    
    removeFromCart(state, action) {
      const { productId } = action.payload;
      const indexProductId = state.items.findIndex(item => item.productId === productId);
      if (indexProductId >= 0) {
        if (state.items[indexProductId].quantity > 1) {
          state.items[indexProductId].quantity -= 1;
        } else {
          state.items.splice(indexProductId, 1);
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    
    changeQuantity(state, action) {
      const {productId, quantity} = action.payload;
      const indexProductId = (state.items).findIndex(item => item.productId === productId);
      if(quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = (state.items).filter(item => item.productId !== productId);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
  }
});

export const { addToCart, removeFromCart, toggleStatusTab, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
