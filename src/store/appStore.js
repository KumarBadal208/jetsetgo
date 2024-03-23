import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flightSlice";

const appStore = configureStore({
    reducer: {
        flight: flightReducer
    }
});

export default appStore;