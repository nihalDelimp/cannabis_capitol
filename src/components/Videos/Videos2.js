import React, { useEffect, useState } from 'react'
import banner from '../../assets/logo-bannerSection.png'
import sponser1 from '../../assets/sponsor1.jpg'
import sponser2 from '../../assets/sponsor2.jpg'
import ScrollToTop from '../common/ScrollToTop';
import { useParams } from 'react-router';
import axios from 'axios';
import { YOUTUBE_TOKEN } from '../../config';
import YtRelatedVideos from './YtRelatedVideos';
import { Link } from 'react-router-dom';

function Videos() {
    var {slug}= useParams();
    const [videoData, setVideoData] = useState({})
    useEffect(()=>{
        if(slug!==undefined){
            axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${slug}&key=${YOUTUBE_TOKEN.token}`).then(res=>setVideoData(res.data))
            // axios.get(`https://youtubehttps://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY].googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${slug}&key=AIzaSyCARMPfh7qHNeAKeyLoWEADQPgFJ70CK1s`).then(res=>console.log(res.data))
            
            // axios.get(`${API_URL.baseUrl}/api/get_video_detail?slug=${slug}`)
            // .then((res)=>setVideoData(res.data))
            // .catch(err=>console.log(err.message))
        }
        else{
            axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=41tGRxlQvhM&key=${YOUTUBE_TOKEN.token}`).then(res=>setVideoData(res.data))
        }
    },[setVideoData,slug])
    return (
        <div>
            <ScrollToTop/> 
            <section className="logoBanner">
        <div className="container">
            <div className="logoBanner--wraper">
                <img src={banner} alt="" />
            </div>
        </div>
    </section>
    <section className="wrap_con">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="leftWrap">
                        <div className="leftWrapin">

                            <div className="articleMain">
                                <div className="articleMain--thumbnail vidThumb">
                                    {/* <iframe src={`https://www.youtube.com/embed/${videoData.data?.post?.link_id}?autoplay=1`} width="100%" height="450px"
                                        title='video'
                                    /> */}
                                    {slug!==undefined && 
                                    <iframe src={`https://www.youtube.com/embed/${slug}?autoplay=1&rel=0`} width="100%" height="450px"
                                        title='video'
                                    />}
                                </div>
                                {videoData?.items?.map((item,index)=>(
                                    <div key={index}>
                                <h2 className="articleMain--title" >{item.snippet?.localized?.title}</h2>
                                {/* <h2 className="articleMain--subTitle">{item.snippet?.localized?.description}</h2> */}
                                    <div className="articleMain--content">
                                    
                                        <div className="articleMain--description">
                                            <p dangerouslySetInnerHTML = {{ __html: item.snippet?.localized?.description}}></p><br/>
                                        </div>
                                    </div>
                                <div className="articleMain--info">
                                    {/* <span className="articleMain--tags">{item?.snippet?.tags?.map((item)=>
                                       `#${item}`
                                    )}</span> */}
                                </div>
                                </div>
                               ))}
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="rightWrap">
                        <div className="rightWrapinIn">
                            <div className="sidebarMain">
                                <h3 className="sidebarTitle sec_title">Related Videos</h3>
                                {/* <div className="rightadv"> */}
                                    <div className="relatedVideos">
                                {/* {videoData?.items?.map((item)=>
                                        <RelatedVideos categories={item.id}/>
                                )} */}
                                <YtRelatedVideos/>
                                    </div>
                                {/* </div> */}
                            </div>

                            
                            <div className="sidebarMain">
                                <h3 className="sidebarTitle sec_title">Advertisement</h3>
                                    <div >
                                        <img src={sponser1} alt="Item" />
                                    </div><div >
                                        <img src={sponser2} alt="Item" />
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

        </div>
    )
}

export default Videos