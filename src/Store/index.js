import {createStore, applyMiddleware} from 'redux';
import { Reducer } from './Reducer';
import { asyncActions } from './Middleware';

export default createStore(Reducer, applyMiddleware(asyncActions));