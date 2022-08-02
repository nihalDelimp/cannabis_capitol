import {VIDEO_DATA_LIST, RELATED_VIDEO_POST, SPECIFIC_VIDEO} from '../actions/type';

const initialState={
    videoList:[],
    relatedPost:[],
    specificVideoPost:{}
}

export default function(state=initialState, action){
    switch (action.type) {
        case VIDEO_DATA_LIST:
            return {...state, videoList : action.payload}
        case SPECIFIC_VIDEO:
            return {...state, specificVideoPost : action.payload}
        case RELATED_VIDEO_POST:
            return {...state, relatedPost : action.payload}
        default:
            return {...state}
    }
}