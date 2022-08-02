import {NEWS_DATA, TAGS_NEWS_DATA, CATEGORY_NEWS_DATA, SPECIFIC_ARTICLE, CATEGORY_LINK} from '../actions/type';

const initialState={
    news:[],
    tagnews:[],
    categoryNews:[],
    specificNewsPost:{},
    relatedNewsPosts:[]
}

export default function(state=initialState, action){
    switch (action.type) {
        case NEWS_DATA:
            return{...state, news: action.payload}
        case TAGS_NEWS_DATA:
            return {...state, tagnews: action.payload}
        case CATEGORY_NEWS_DATA:
            return {...state, categoryNews: action.payload}
        case SPECIFIC_ARTICLE:
            return {...state, specificNewsPost:action.payload}
        case CATEGORY_LINK:
            return {...state, relatedNewsPosts:action.payload}
        default:
            return {...state}
    }
}