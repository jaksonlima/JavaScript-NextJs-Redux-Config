import Immutable from "seamless-immutable";
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import { loggerNext } from './middleware/loggerNext'

import rootReducer from './reducers'
import rootSaga from './sagas'

const isNotProduction = process.env.NODE_ENV !== "production";

const bindMiddleware = (middleware) => {
  if (isNotProduction) {
    const { composeWithDevTools } = require("redux-devtools-extension");

    return composeWithDevTools(applyMiddleware(...middleware, loggerNext));
  }
  return applyMiddleware(...middleware);
};

function hydrate(state, action) {
  if (action.type === HYDRATE) {
      console.log(state, action)
    return Immutable({ ...state, ...action.payload });
  }

  return rootReducer(state, action);
}

const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(hydrate, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: isNotProduction });
