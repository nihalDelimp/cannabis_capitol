import React from 'react'
import { Link } from 'react-router-dom'
import {connect, useSelector} from 'react-redux'

function MainPost() {
    const state = useSelector(state => state.posts.featuredPost);
    const limitDesc=100
    return (
        
        <div className="newscard--wrap ">
                <div className="newscard--videoPlay">
                    {state.video?.file_path.length>0 ? (
                        <video src={state.video?.file_path}  width="100%" height="450px" poster={state.video?.image_path} controls></video>
                    ): 
                    (
                        <iframe src={`https://www.youtube.com/embed/${state.video?.link_id}?autoplay=1&rel=0`} width="100%" height="450px" title='video'/>
                    )    
                }
                </div>
            <div className="newscard--postCont">
                {/* <h4 className="newscard--postCategory">{state.video?.category_name}</h4> */}
                <h2 className="newscard--postTitle">{state.video?.title}</h2>
                <span className="newscard--postDate"><i>
                {(() => {
                    var d = new Date(state.video?.created_at)
                    return (d.toLocaleString('default', { month: 'long' })+(d.toUTCString().substr(4,3))+", "+(d.toUTCString().substr(12,5)))
                    })()} 
                    {/* by {state.video?.user_name} */}
                    </i>
                </span>
                <div className="newscard--postPara">
                {state.video?.content.length > limitDesc ?
                    (
                    <><div dangerouslySetInnerHTML={{ __html: state.video?.content.substring(0, limitDesc)+"..."}}/></>
                    ) :
                    <div dangerouslySetInnerHTML={{ __html: state.video?.content }} />
                }
                </div>
            </div>
            <Link to="/moreentertainment" className="newscard--linkDetails">More Videos</Link>
        </div>
    )
}


export default connect()(MainPost)
