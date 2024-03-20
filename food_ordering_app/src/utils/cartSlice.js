import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        // action
        addItem: (state, action) => {
            // mutating the state
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
            // console.log(current(state.items)); // current is used to view the state
            // not this  // or return [] i.e either mutate the existing state or return a new state to clear the cart
            // this {items: []} this will be replaced inside original state = {items: []}
        }
    }
});
// named export
export const {addItem, removeItem, clearCart} = cartSlice.actions; 
// default export
export default cartSlice.reducer;