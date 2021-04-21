import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middleware/api";
import logger from "./middleware/logger";
import toast from "./middleware/toastify";
import reducer from "./reducer";

export default function () {
  //this middleware passes all request through it's check before going to the routes
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "console" }),
      toast,
      api,
    ],
  });
}
