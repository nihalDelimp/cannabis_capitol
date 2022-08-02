import React,{useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {rightSidebarRelatedPost} from '../../redux/actions'

function RightLink({categorySlugLink, dispatchRelatedPosts, relatedPosts, postSlug}) {
    const [categoryList, setCategoryList] = useState([])
    useEffect(async() => {
        await dispatchRelatedPosts(categorySlugLink, postSlug)
    }, [categorySlugLink])

    useEffect(()=>{
        setCategoryList(relatedPosts)
    },[relatedPosts])
    return (
        <div>
            <h3 className="sidebarTitle sec_title">Related Links</h3>
                {/* <div className="rightadv">   */}
                    <div className="relatedArticle">
                        <ul className="relatedArticle--list">
                        {categoryList.posts?.map((item)=>(
                                <li className="relatedarticle--items" key={item.id}><NavLink to={`/news/${item.slug}`} onClick={()=>dispatchRelatedPosts(categorySlugLink, item.slug)} className="relatedarticle--cont">{item.title}</NavLink></li>
                        ))}
                        </ul>
                    </div>
                {/* </div> */}
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        relatedPosts:state.news.relatedNewsPosts
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        dispatchRelatedPosts:(slug_link, postSlug)=>dispatch(rightSidebarRelatedPost(slug_link, postSlug))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RightLink)
