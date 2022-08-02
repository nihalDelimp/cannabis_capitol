import {POSTS_DATA, FEATURED_POST, ADS_POSTS } from './type';
import axios from 'axios';
import {API_URL} from '../../config/index';

 
export const postsdata = (pageNumber ,limit) => async dispatch => {
	return new Promise(async(resolve, reject) => {
		const response = await axios.post(`${API_URL.baseUrl}/api/get_post_list?page=${pageNumber}&limit=${limit}`).then((res)=>res.data);
		if (response.status === '1') {
			dispatch({type: POSTS_DATA, payload: response.data});
            resolve(response);
		} else {
			reject(response.response);
		}
	}
    );
}; 


export const featuredPost=()=>async dispatch=>{
	return new Promise(async(resolve, reject)=>{
		const response = await axios.get(`${API_URL.baseUrl}/api/featured-video`).then((res)=>res.data)
		if(response.status==='1'){
			dispatch({type:FEATURED_POST, payload:response.data})
			resolve(response)
		}
		else{
			resolve(response.response)
		}
	})
}


export const adsPost=(data)=>async dispatch=>{
	return new Promise(async(resolve, reject)=>{
		const response = await axios.get(`${API_URL.baseUrl}/api/get_advertisement?limit=${data}`).then((res)=>res.data)
		if(response.status==='1'){
			dispatch({type:ADS_POSTS, payload:response.data})
			resolve(response)
		}
		else{
			resolve(response.response)
		}
	})
}