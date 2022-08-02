import React, {useEffect, useState} from 'react'
import sponser1 from '../../assets/sponsor1.jpg'
import sponser2 from '../../assets/sponsor2.jpg'
import banner from '../../assets/logo-bannerSection.png'
import { Link, useParams } from 'react-router-dom';
import RightLink from './RightLink';
import ScrollToTop from '../common/ScrollToTop';
import Sponsers from '../common/Sponsers';
import {news, tagnews, categorynews} from '../../redux/actions/news'
import {connect, useDispatch, useSelector} from 'react-redux'
import { specificNews } from '../../redux/actions/news';
import { adsPost } from '../../redux/actions';
function Articles({dispatchArticle, specificPost}) {
    const {slug} = useParams();
    const [specificArticle, setSpecificArticle] = useState({})
    const dispatch = useDispatch()
    const adsPosts = useSelector(state => state.posts.ads_post)
    useEffect(()=>{
        dispatchArticle(slug) 
        
    },[slug])

    useEffect(()=>{
        dispatch(adsPost(2))
    },[])
    useEffect(() => {
            setSpecificArticle(specificPost)
        }, [setSpecificArticle, specificPost])

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
                                <h2 className="articleMain--title">{specificArticle?.post?.title}</h2>
                                <h3 className="articleMain--subTitle">{specificArticle.post?.sub_title}</h3>
                                <div className="articleMain--info">
                                    <span className="articleMain--type">News</span>
                                    <span className="articleMain--category">
                                    {specificArticle.post?.category!==null ? <Link to={`/news/category/${specificArticle.post?.category?.slug}`}>
                                            {specificArticle.post?.category===null? "Uncategorized" :specificArticle.post?.category?.title}
                                        </Link>:"Uncatergorized"}
                                    </span>
                                    {/* <span className="articleMain--author">{specificArticle.post?.user_name}</span> */}
                                    <span className="articleMain--date">{(() => {
                                        var d = new Date(specificArticle.post?.created_at)
                                        return (d.toLocaleString('default', { month: 'long' })+(d.toUTCString().substr(4,3))+", "+(d.toUTCString().substr(12,5)))
                                        })()}</span>
                                    <span className="articleMain--tags">{specificArticle.post?.tags.map((item)=>(
                                       <Link to={`/news/tags/${item?.slug}`} key={item.id}> #{item.title} </Link>
                                        ))}</span>
                                </div>
                                <div className="articleMain--content">
                                    {specificArticle.post?.link_id.length===0 ? (
                                    <div className="articleMain--thumbnail">
                                        <img src={specificArticle.post?.image} alt="Image" />
                                    </div>)
                                    :
                                    specificArticle.post?.file_path.length>1 ?
                                    <video src={specificArticle.post?.file_path}  width="100%" height="450px" poster={specificArticle.post?.image} controls></video>
                                    :
                                    <iframe src={`https://www.youtube.com/embed/${specificArticle.post?.link_id}?autoplay=1&rel=0`} width="100%" height="450px"
                                        title='video'
                                    />
                                    }
                                    <div className="articleMain--description">
                                        <p dangerouslySetInnerHTML={{ __html: specificArticle.post?.content }} />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="rightWrap">
                        <div className="rightWrapinIn">
                            <div className="sidebarMain">
                                <RightLink categorySlugLink={specificArticle?.post?.category===null? "uncategorized": specificArticle?.post?.category?.slug} postSlug={slug}/>
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
const mapStateToProps=state=>{
    return{
        specificPost : state.news.specificNewsPost
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        dispatchArticle:(slug_url)=>dispatch(specificNews(slug_url))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Articles)
