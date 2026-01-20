import { createSlice } from "@reduxjs/toolkit";

const SocialSlice = createSlice({
    name: "social",
    initialState: {
        books: ["History", "Geography"]
    },
    reducers: {
        addbook: (state, action) => {
            console.log("addbook function: ", action.payload);
            state.books.push(action.payload);
        },
        // eslint-disable-next-line no-unused-vars
        emptyBooks:(state,action)=>{
            state.books=[]

        }
    }
});

export const { addbook, emptyBooks } = SocialSlice.actions;

export default SocialSlice.reducer;
