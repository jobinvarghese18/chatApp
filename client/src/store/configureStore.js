import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import chatReducer from '../reducers/chatReducer'


const configureStore = ()=>{
    const store = createStore(combineReducers({
        user:userReducer,
        chat:chatReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore