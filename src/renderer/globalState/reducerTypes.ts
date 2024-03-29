import { rootReducer, setupStore } from "./store";

// export type AppDispatch = typeof store.dispatch;

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export type RootState = ReturnType<typeof rootReducer>;