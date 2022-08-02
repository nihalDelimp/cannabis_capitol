import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import { relatedVideos } from '../../redux/actions';
function RelatedVideos({categories, relatedVideo, dispatchRelatedToPosts, videoSlug }) {
    const [relatedVideos, setRelatedVideo] = useState([])
    useEffect(async()=>{
        await dispatchRelatedToPosts(categories, videoSlug)
    },[categories])
    useEffect(()=>{
        if(categories!==undefined){
            setRelatedVideo(relatedVideo)
        }
        else{
            categories="playlist-three";
        }
    },[categories, relatedVideo])

    return (    
            <div className="news_listBottom">
                <ul className="newsList">
                    {relatedVideos.posts?.map((item,index)=>( 
                        <NavLink to={`/video/${item.slug}`} onClick={()=>dispatchRelatedToPosts(categories, item.slug)} key={index}>
                        <li className="newsListItem">
                        <div className="newsListItemLink">
                            <div className="intThumbnail">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="intDetails">
                                <span className="newsTitle">{item.category.title}</span> <span
                                    className="episodeNumber">{item.title.length > 10 ?
                                        (
                                        <><span dangerouslySetInnerHTML={{ __html: item.title.substring(0, 20)+"..."}}/></>
                                        ) :
                                        <span dangerouslySetInnerHTML={{ __html: item.title }} />
                                        }</span>
                                {/* <p className="newsGuest">
                                    {item.content.length > 10 ?
                                        (
                                        <><span dangerouslySetInnerHTML={{ __html: item.content.substring(0, 10)+"..."}}/></>
                                        ) :
                                       <> <span dangerouslySetInnerHTML={{ __html: item.content }} /></>
                                        }
                                </p> */}
                            </div>
                        </div>                                                
                    </li>
                    </NavLink>
                    ))}
                    {relatedVideos.total_count > 3 && (
                    <div className="moreVideosLink">
                        <Link to={`/morevids/${categories}`}>More like this &gt;&gt;</Link>
                    </div>
                    )}
                    
                </ul>
            </div>
    )
}
const mapStateToProps=state=>{
    return{
        relatedVideo: state.video.relatedPost
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        dispatchRelatedToPosts:(category, videoSlug)=>dispatch(relatedVideos(category, videoSlug))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RelatedVideos)



// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'
// import { Link } from 'react-router-dom';
// import { API_URL } from '../../config'
// function RelatedVideos({categories}) {
//     const {slug} = useParams();
//     console.log(categories)
//     const [relatedVideos, setRelatedVideo] = useState([])
//     console.log(relatedVideos)
//     useEffect(()=>{
//         if(categories!==undefined){
//             axios.post(`${API_URL.baseUrl}/api/get_related_videos?category_slug=${categories}&page=1&limit=2`)
//             .then(response=>setRelatedVideo(response.data))
//             .catch(err=>console.log(err))
//         }
//     },[categories])
//     return (    
//         <div>
           
//             <div className="news_listBottom">
//                 <ul className="newsList">
//                     {relatedVideos.data?.posts?.map(item=>( 
//                         <>
//                         <Link to={`/video/${item.slug}`}>
//                         <li className="newsListItem">
//                         <a href="#" className="newsListItemLink">
//                             <div className="intThumbnail">
//                                 <img src={item.image} alt="" />
//                             </div>
//                             <div className="intDetails">
//                                 <span className="newsTitle">{item.category.title}</span> <span
//                                     className="episodeNumber">{item.title.length > 10 ?
//                                         (
//                                         <><span dangerouslySetInnerHTML={{ __html: item.title.substring(0, 20)+"..."}}/></>
//                                         ) :
//                                         <span dangerouslySetInnerHTML={{ __html: item.title }} />
//                                         }</span>
//                                 <p className="newsGuest">
//                                     {item.content.length > 10 ?
//                                         (
//                                         <><span dangerouslySetInnerHTML={{ __html: item.content.substring(0, 10)+"..."}}/></>
//                                         ) :
//                                        <> <span dangerouslySetInnerHTML={{ __html: item.content }} /></>
//                                         }
//                                 </p>
//                             </div>
//                         </a>                                                
//                     </li>
//                     </Link>
                    
//                     </>
//                     ))}
//                     {relatedVideos.data?.total_count > "2" ? (
//                     <div className="moreVideosLink">
//                         <Link to={`/morevids/${categories}`}>More like this &gt;&gt;</Link>
//                     </div>
//                     ):""}
                    
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default RelatedVideos
