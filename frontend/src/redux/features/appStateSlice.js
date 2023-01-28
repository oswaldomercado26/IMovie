import { createSlice } from "@reduxjs/toolkit";
//crear estado de slice solo si es necesario
export const appStateSlice = createSlice({
  name: "AppState",
  initialState: {
    appState: ""
  },
  reducers: {
    setAppState: (state, action) => {
      state.appState = action.payload;
    }
  }
});

export const {
  setAppState
} = appStateSlice.actions;

export default appStateSlice.reducer;