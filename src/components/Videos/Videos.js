import React, { useEffect, useState } from 'react'
import banner from '../../assets/logo-bannerSection.png'
import sponser1 from '../../assets/sponsor1.jpg'
import sponser2 from '../../assets/sponsor2.jpg'
import ScrollToTop from '../common/ScrollToTop';
import Sponsers from '../common/Sponsers';
import { useParams } from 'react-router';
import RelatedVideos from './RelatedVideos';
import {useDispatch, useSelector} from 'react-redux'
import { adsPost, specificVideo } from '../../redux/actions';
import {connect} from 'react-redux'
function Videos() {
    var {slug}= useParams();
    const [videoData, setVideoData] = useState({})
    const dispatch = useDispatch()
    const adsPosts = useSelector(state => state.posts.ads_post)

    useEffect(() => {
        dispatch(specificVideo(slug))
    }, [slug])
    
    const specificVideoData = useSelector(state => state.video?.specificVideoPost)
    useEffect(()=>{
        setVideoData(specificVideoData)
    },[specificVideoData, setVideoData, slug])
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
                                    {videoData.post?.file_path.length>1 ? (
                                    <video src={videoData.post?.file_path}  width="100%" height="450px" poster={videoData.post?.image} controls></video>
                                    
                                    ) : <iframe src={`https://www.youtube.com/embed/${videoData.post?.link_id}?autoplay=1&rel=0`} width="100%" height="450px"
                                        title='video'
                                    />}
                                    
                                </div>
                                <h2 className="articleMain--title">{videoData.post?.title}</h2>
                                {/* <h2 className="articleMain--subTitle">Cigarette Staple Parent Corp. Invests $1.8 Billion in
                                    Canadian Cannabis Company</h2> */}
                                    <div className="articleMain--content">
                                        <p  className="articleMain--description" dangerouslySetInnerHTML = {{ __html: videoData.post?.content}}></p><br/>
                                    </div>
                                <div className="articleMain--info">
                                    <span className="articleMain--tags">
                                        {videoData.post?.tags.map((item,index)=>(
                                            <span key={index}>#{item.title}</span>
                                        ))}
                                    </span>
                                </div>
                               
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
                                        <RelatedVideos categories={videoData.post?.category===null ? "uncategorized":videoData.post?.category.slug} videoSlug={slug}/>
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

export default connect()(Videos)
