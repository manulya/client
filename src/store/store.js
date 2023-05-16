import { legacy_createStore as createStore,combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './userReducer';
import { typeReducer } from './typeReducer';
import { brandReducer } from './brandReducer';
import { pictureReducer } from './pictureReducer';
import { basketReducer } from './basketReducer';



let rootReducer=combineReducers({
users:userReducer,
type:typeReducer,
brand:brandReducer,
picture:pictureReducer,
basket:basketReducer
}
)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store;
