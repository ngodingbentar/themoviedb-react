import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
  name: 'count',
  initialState: {
    data: 1
  },
  reducers: {
    doCounter: (state) => {
      state.data++
    },
    minCounter: (state) => {
      state.data--
    }
  }
})

export const { doCounter, minCounter } = countSlice.actions
export default countSlice.reducer