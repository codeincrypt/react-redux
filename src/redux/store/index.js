import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Post from '../reducers/post'
import Comment from '../reducers/comment'
import User from '../reducers/user'
import Profile from '../reducers/profile'

const rootReducer = combineReducers({
  post      : Post,
  comment   : Comment,
  user      : User,
  profile   : Profile,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store