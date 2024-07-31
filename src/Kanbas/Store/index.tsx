import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import accountReducer from "../Account/reducer"

export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer, }
});


export default store;