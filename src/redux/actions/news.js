import {NEWS_DATA, TAGS_NEWS_DATA, CATEGORY_NEWS_DATA, SPECIFIC_ARTICLE, CATEGORY_LINK} from './type'
import axios from 'axios';
import {API_URL} from '../../config/index';


export const news=(pageNumber, limit)=> async dispatch=>{
    return new Promise(async(resolve, reject)=>{
        const response = await axios.post(`${API_URL.baseUrl}/api/get_news_list?page=${pageNumber}&limit=${limit}`).then((res)=>res.data)
        if (response.status === '1') {
			dispatch({type: NEWS_DATA, payload: response.data});
            resolve(response);
		} else {
			reject(response.response);
		}
    })
}

export const tagnews=(tags, pageNumber, limit)=>async dispatch=>{
    return new Promise(async(resolve, reject)=>{
        const response = await axios.post(`${API_URL.baseUrl}/api/get_news_list_by_tag?tag_slug=${tags}&page=${pageNumber}&limit=${limit}`).then((res)=>res.data)
        if(response.status==='1'){
            dispatch({type:TAGS_NEWS_DATA, payload:response.data})
            resolve(response)
        }
        else{
            reject(response.response)
        }
    })
}


export const categorynews=(category, pageNumber, limit)=>async dispatch=>{
    return new Promise(async(resolve, reject)=>{
        const response = await axios.post(`${API_URL.baseUrl}/api/get_news_list_by_category?category_slug=${category}&page=${pageNumber}&limit=${limit}`).then((res)=>res.data)
        if(response.status==='1'){
            dispatch({type:CATEGORY_NEWS_DATA, payload:response.data})
            resolve(response)
        }
        else{
            reject(response.response)
        }
    })
}


export const specificNews = (specificUrl)=>async dispatch=>{
    return new Promise(async(resolve, reject)=>{
        const response = await axios.post(`${API_URL.baseUrl}/api/get_news_detail/?slug=${(specificUrl) ? specificUrl : "new-one"}`).then((res)=>res.data);
        if(response.status==='1'){
            dispatch({type:SPECIFIC_ARTICLE, payload:response.data})
            resolve(response)
        }
        else{
            reject(response.response)
        }
    })
}


export const rightSidebarRelatedPost = (categoryLink, postSlug)=>async dispatch=>{
    return new Promise(async(resolve, reject)=>{
        const response = await axios.post(`${API_URL.baseUrl}/api/get_news_list_by_category?category_slug=${categoryLink}&post_slug=${postSlug}&page=1&limit=6`).then((res)=>res.data);
        if(response.status==='1'){
            dispatch({type:CATEGORY_LINK, payload:response.data})
            resolve(response)
        }
        else{
            reject(response.response)
        }
    })
}