import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../reducer";
const persistConfig = {
	key: "root",
	storage: storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [];
middlewares.push(thunk);
if (process.env.NODE_ENV === "development") {
	const { logger } = require("redux-logger");
	middlewares.push(logger);
}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
	persistedReducer,
	composeEnhancers(
		applyMiddleware(...middlewares)
	)
);

export const persistor = persistStore(store);

