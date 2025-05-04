import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        addCart : (state, action) => {
            state.push(action.payload)
        },
        incrementQuantity: (state, action) => {
            const item = state.find(s => s.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.find(s => s.id === action.payload.id);
            if (item && item.quantity > 0) {
                item.quantity -= 1;
            }
        },
        resetQuantity: (state, action) => {
            const item = state.find(s => s.id === action.payload.id);
            if (item) {
                item.quantity = 0;
            }
        },
        removeCart : (state, action) => {
            return state.filter(s => s.id !== action.payload.id)
        }
    }
})

export const {addCart, incrementQuantity, decrementQuantity, resetQuantity, removeCart} = cartSlice.actions
const Store = configureStore({reducer:{cart : cartSlice.reducer}})
export default Store