import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from '@mui/material';

interface InitialState {
    value: number,
    status: string,
    mode: PaletteMode,
}

const initialState: InitialState = {
value: 0,
status: "ok",
mode: "dark"
}

export const global = createSlice({
    name: "global",
initialState,
reducers: {
    valueAdder: (state, {payload}) => {
        state.value = state.value + payload
    },
    changeStatus: (state, {payload}) => {
        if(state.status === "ok"){
            state.status = "loading"
        } if(state.status === "loading")
        state.status = "ok"
    },
    changeMode: (state) => {
        if(state.mode === "light"){
            state.mode = "dark"
        } else if(state.mode === "dark")
        state.mode = "light"
    },
}

})

export const reducer = global.actions;