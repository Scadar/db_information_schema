import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FlowState = {
    cords: {
        [id: string]: {
            x: number,
            y: number
        }
    } | null
}

const initialState: FlowState = {
    cords: null
};

const flowSlice = createSlice({
    name: "flow",
    initialState,
    reducers: {
        setCords(state, action: PayloadAction<any>) {
            state.cords = action.payload;
        }
    }
});

export const { setCords } = flowSlice.actions;

export default flowSlice.reducer;
