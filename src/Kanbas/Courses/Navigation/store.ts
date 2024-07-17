import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Modules";
const store = configureStore({
  reducer: {
    modulesReducer,
  },
});
export default store;