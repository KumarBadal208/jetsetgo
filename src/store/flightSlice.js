import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
    name: "flight",
    initialState: {
        flights: []
    },
    reducers: {
        addDetail: (state,action)=>{
            state.flights = action.payload;
        },
        // addSelectedFlight:
    }
});

export const {addDetail} = flightSlice.actions;
export default flightSlice.reducer;