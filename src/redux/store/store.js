import logger from "redux-logger";
import rootReducer from "redux/root-reducer/root-reducer";
import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// export default { persistor, store };
export default store;
