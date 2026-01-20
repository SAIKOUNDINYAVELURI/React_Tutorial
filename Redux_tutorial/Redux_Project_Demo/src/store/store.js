import { configureStore } from "@reduxjs/toolkit";
import reduxCounterReducer from "./Slices/ReduxCounterSlice";

const store = configureStore({
  reducer: {
    counter: reduxCounterReducer,
  },
});

export default store;
