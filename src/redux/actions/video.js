import {VIDEO_DATA_LIST, RELATED_VIDEO_POST, SPECIFIC_VIDEO} from './type'
import axios from 'axios';
import {API_URL} from '../../config/index';


export const videosData=()=> async dispatch=>{
    return new Promise(async(resolve, reject)=>{
        const response = await axios.post(`${API_URL.baseUrl}/api/video-play-list?page=1&limit=20`).then((res)=>res.data)
        if (response.status === '1') {
			dispatch({type: VIDEO_DATA_LIST, payload: response.data});
            resolve(response);
		} else {
			reject(response.response);
		}
    })
}


export const relatedVideos=(category, videoSlug)=> async dispatch=>{
    return new Promise(async(resolve, reject)=>{
        const response = await axios.post(`${API_URL.baseUrl}/api/get_related_videos?category_slug=${category}&post_slug=${videoSlug}&page=1&limit=3`).then((res)=>res.data)
        if (response.status === '1') {
			dispatch({type: RELATED_VIDEO_POST, payload: response.data});
            resolve(response);
		} else {
			reject(response.response);
		}
    })
}

export const specificVideo = (specificUrl)=>async dispatch=>{
    return new Promise(async(resolve, reject)=>{
        const response = await axios.post(`${API_URL.baseUrl}/api/get_video_detail?slug=${(specificUrl) ? specificUrl : "new-one"}`).then((res)=>res.data);
        if(response.status==='1'){
            dispatch({type:SPECIFIC_VIDEO, payload:response.data})
            resolve(response)
        }
        else{
            reject(response.response)
        }
    })
}
