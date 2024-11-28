import { configureStore } from "@reduxjs/toolkit";
import financeReducer from "./financeSlice";
import { saveToLocalStorage } from "../utils/localStorage";
const store = configureStore({
  reducer: {
    finance: financeReducer,
  },
});
store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage("financestate", state.finance);
});
export default store;
