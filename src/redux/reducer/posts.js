import {POSTS_DATA, FEATURED_POST, ADS_POSTS } from '../actions/type';

let initialState={
    posts:[],
    featuredPost:{},
    ads_post:[]
}

export default function(state=initialState, action){
    switch (action.type) {
        case POSTS_DATA:
            return{...state, posts:action.payload}
        case FEATURED_POST:
            return {...state, featuredPost: action.payload}
        case ADS_POSTS:
            return {...state, ads_post: action.payload}
        default:
            return state;
    }
}