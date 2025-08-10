import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUserDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice;
