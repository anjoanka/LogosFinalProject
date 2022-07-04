import { combineReducers, legacy_createStore,  applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { resumeReducer } from "./reducers/resumeReducer";
import { loginFormReducer } from "./reducers/loginFormReducer";

const rootReducer = combineReducers({
  resumeReducer: resumeReducer,
  loginFormReducer: loginFormReducer
})

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
