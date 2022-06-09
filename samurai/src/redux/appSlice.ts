import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {setAuthUserData} from "./authSlice";


let initialState = {
    isInitialized: false
};
const appSlice = createSlice({
    name:'app',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(initialize.fulfilled, (state) => {
            state.isInitialized = true
        })
    }
})

export const initialize = createAsyncThunk(
    'app/initialize',
    async (undefined, {dispatch}) => {
        return await dispatch(setAuthUserData());
    }
)

export default appSlice.reducer