import {combineReducers} from 'redux'
// import users from "./users";
import posts from './posts'
import news from './news'
import video from './video'
export default combineReducers({
     posts, news, video
})