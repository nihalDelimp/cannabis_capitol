import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import playIcon from '../../assets/play-icon.png'; 

function HomePost({postsData}) {
    console.log(postsData)
    const limitDesc=100;
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            {postsData?.map((val)=>(
                <div className="newscard list-item" key={val.id}>
                    <div className="newscard--wrap" >
                        <div className="newscard--videoPlay">
                            {val.post_type==="2" ? <Link to={`/video/${val.slug}`}>
                            <img src={val.image} className="newscard--postThum" alt="alt" />
                            {val.post_type==='2' && <img src={playIcon} alt="alt" className="newscard--playIcon" />}
                            </Link> : <Link to={`/news/${val.slug}`}><img src={val.image} className="newscard--postThum" alt="alt" /></Link>}
                        </div>
                        <div className="newscard--postCont">
                           {
                               val.post_type==='1'? (<Link to={`news/${val.slug}`}><h4 className="newscard--postCategory">
                               {val.category===null ? "Uncategorized" : val.category.title}
                           </h4>
                           <h2 className="newscard--postTitle">{val.title}</h2></Link>):(<Link to={`/video/${val.slug}`}><h4 className="newscard--postCategory">
                           {val.category===null ? "Uncategorized" : val.category.title}
                           </h4>
                           <h2 className="newscard--postTitle">{val.title.length > 15 ?
                                (
                                <><div dangerouslySetInnerHTML={{ __html: val.title.substring(0, 15)+"..."}}/></>
                                ) :
                                <div dangerouslySetInnerHTML={{ __html: val.title }} />
                                }</h2></Link>)
                           } 
                            <span className="newscard--postDate"><i>{(() => {
                            var d = new Date(val.created_at)
                            return (d.toLocaleString('default', { month: 'long' })+(d.toUTCString().substr(4,3))+", "+(d.toUTCString().substr(12,5)))
                            })()}
                             {/* by {val.user_name} */}
                             </i></span>
                            <div className="newscard--postPara">
                            {val.content.length > limitDesc ?
                                (
                                <><div dangerouslySetInnerHTML={{ __html: val.content.substring(0, limitDesc)+"..."}}/></>
                                ) :
                                <div dangerouslySetInnerHTML={{ __html: val.content }} />
                                }
                            </div>
                        </div>
                        {val.post_type==='1' ? (<Link to={`/news`} className="newscard--linkDetails" >Read News</Link>):
                        (<Link to={`/moreentertainment`} className="newscard--linkDetails" >More Videos</Link>)}
                    </div>
                </div>))}
                </>
    )
}

export default HomePost
