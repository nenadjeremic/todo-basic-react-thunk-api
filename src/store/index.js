import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    storeEnhancers(applyMiddleware(thunk))
);
export default store;


// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers/index";
// import { forbiddenWordsMiddleware, myLogger } from "../middleware";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     rootReducer, 
//     storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, logger, thunk))
// );
// export default store;