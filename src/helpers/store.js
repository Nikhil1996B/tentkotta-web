import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

export const middleWares = [thunkMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const loggerMiddleware = createLogger();

export const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleWares))(createStore)


// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        sessionStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const serialisedState = sessionStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}
const store = createStoreWithMiddleware(rootReducer, loadFromLocalStorage())

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store





// export default function configureStore() {
//     // Add a dictionary to keep track of the registered async reducers
//     store.asyncReducers = {};

//     // Create an inject reducer function
//     // This function adds the async reducer, and creates a new combined reducer
//     store.injectReducer = (key, asyncReducer) => {
//         store.asyncReducers[key] = asyncReducer;
//         store.replaceReducer(createReducer(store.asyncReducers));
//     };

//     // Return the modified store
//     return store;
// }

// export function getStore() {
//     return store;
// }

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunkMiddleware, loggerMiddleware)
// );
