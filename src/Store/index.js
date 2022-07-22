import { createStore } from 'redux';
import { reducerFn } from '../Reducer/reducers';

const store = createStore(reducerFn);

export default store;
