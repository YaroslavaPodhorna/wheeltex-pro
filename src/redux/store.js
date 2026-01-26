import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/headerSlice";
import bookingReducer from "./slices/bookingSlice";
import adminAuthReducer from "./slices/loginAdminSlice";
import adminAppointmentsReducer from "./slices/adminSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    booking: bookingReducer,
    adminAuth: adminAuthReducer,
    admin: adminAppointmentsReducer, // для appointments
  },
});
