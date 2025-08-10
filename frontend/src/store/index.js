import { configureStore } from "@reduxjs/toolkit";
import candidateSlice from "./candidateSlice";
import userSlice from "./userSlice";

const votingStore = configureStore({
  reducer: {
    candidate: candidateSlice.reducer,
    user: userSlice.reducer,
  },
});

export default votingStore;
