import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {API_URL} from '../../config/index';
import { adsPost } from '../../redux/actions';

function Sponsers({limit, ads}) {
    const dispatch = useDispatch()
    const adsPosts = useSelector(state => state.posts.ads_post)
    useEffect(() => {
        dispatch(adsPost(limit))
    }, [limit,adsPost])
    return (
        <div className="sidebarMain">
            <h3 className="sidebarTitle sec_title">Advertisement</h3>
            {ads.map((item,index)=>(
               <div key={index}> 
                    <img src={item.image} alt={item.image} />
                </div> 
            ))}
            
        </div>
    )
}

export default Sponsers
