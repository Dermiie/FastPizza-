import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //new item object
    addItem(state, action) {
      state.cart.push(action.payload)
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },

    increaseItemQuantity(state, action){
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decreaseItemQuantity(state, action){
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

    },

    clearCart(state){
      state.cart = []
    }
  }

});

export function getCart (state) {
  return state.cart.cart
}

export function getTotalCartQuantity (state) {
 return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0 )
}


export function getTotalCartPrice (state) {
 return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0 )
}

export const getCurrentQuantityById = (id) => (state) => state.cart.cart.find((item) => item.pizzaId === id)?. item.quantity ?? 0 ;

// export function getCurrentQuantityById (id) {
//   return (state) => {
//     return state.cart.cart.find((item) => item.pizzaId === id)?. item.quantity ?? 0
//   }
// }

export const {addItem, deleteItem, decreaseItemQuantity, increaseItemQuantity, clearCart} = cartSlice.actions

export default cartSlice.reducer
