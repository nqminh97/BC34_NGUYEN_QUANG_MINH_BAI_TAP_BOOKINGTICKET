import { combineReducers } from "redux";
import { DemoReducer } from "./Reducers/DemoReducer";
import { createStore } from "redux";
import { GioHangReducer } from "./Reducers/GioHangReducer";
import { XucXacReducer } from "./Reducers/XucXacReducer";
import { BookingTicketReducer } from "./Reducers/BookingTicketReducer";

const rootReducer = combineReducers({
  DemoReducer,
  GioHangReducer,
  XucXacReducer,
  BookingTicketReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
