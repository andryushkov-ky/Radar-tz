import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/index.js'

import { test } from '../middleware'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(test)
));

export default store;