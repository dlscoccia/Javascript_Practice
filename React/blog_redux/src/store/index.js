import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from '../reducer';


const store = createStore(
  reducer, // Reducers
  {}, // Estado inicial
  applyMiddleware(reduxThunk),
);

export default store