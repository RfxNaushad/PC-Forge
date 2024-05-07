import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import cpuReducer from "./cpuReducer";
import motherboardReducer from "./motherboardReducer";
import monitorReducer from "./monitorReducer";
import othersReducer from "./othersReducer";
import psReducer from "./psReducer";
import ramReducer from "./ramReducer";
import sdReducer from "./sdReducer";


export default configureStore({
  reducer: { 
    cpu: cpuReducer,
    monitor: monitorReducer,
    motherboard: motherboardReducer,
    others: othersReducer,
    powersupply: psReducer,
    ram: ramReducer,
    storagedevice: sdReducer,

    [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});