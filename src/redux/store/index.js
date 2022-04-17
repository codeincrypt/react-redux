import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Post from '../reducers/post'
import Comment from '../reducers/comment'
import User from '../reducers/user'

const rootReducer = combineReducers({
  post : Post,
  comment : Comment,
  user: User
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store