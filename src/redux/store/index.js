import { createStore } from 'redux';
import rootreducer from './rootreducer';
import middleware from '../middleware';

export default createStore(rootreducer, middleware);
