import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevtools } from 'redux-devtools-extension';
import reducers from './reducers';

const enhancer = composeWithDevtools(applyMiddleware(thunkMiddleware));

const initStore = initialState => createStore(reducers, initialState, enhancer);

export default initStore;
