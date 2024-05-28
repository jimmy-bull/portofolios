import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import { link } from 'fs'
// import { act } from 'react'

interface BasicUsageSliceInterface {
    current_link_index: number
    //Map<any, any>;
}
const initialState = {
    current_link_index: 0
} as BasicUsageSliceInterface

const basic = createSlice({
    name: "basic",
    initialState,
    reducers: {
        set_current_link_index: (state, action: PayloadAction<number>) => {
            state.current_link_index = action.payload
        }
    }
})
export const { set_current_link_index } = basic.actions
export default basic.reducer