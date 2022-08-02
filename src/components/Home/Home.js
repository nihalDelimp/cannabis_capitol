import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import mainImage from '../../assets/banner.png';
import sponser1 from '../../assets/sponsor1.jpg'
import sponser2 from '../../assets/sponsor2.jpg'
import sponser3 from '../../assets/sponsor3.jpg'
import SingupForm from '../common/SingupForm';
import Pagination from "../common/Pagination";
import HomePost from './HomePost';
import {connect, useDispatch, useSelector} from 'react-redux'
import {adsPost, featuredPost, postsdata} from '../../redux/actions'
import InstaPost from './InstaPost';
import MainPost from './MainPost';
import ScrollToTop from '../common/ScrollToTop';
import Sponsers from '../common/Sponsers';
function Home({paginationPost, homePosts, mainFeaturedPost}) {
    const [postPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch()
    const adsPosts = useSelector(state => state.posts.ads_post)
    useEffect(async() =>{
        await paginationPost(currentPage, postPerPage)
        await mainFeaturedPost();
        
    },[currentPage, paginationPost, mainFeaturedPost])
    const paginate = (number)=>{
        paginationPost(number, postPerPage)
        setCurrentPage(number)
    }
    return (
        <div>

            <ScrollToTop/>
          <section className="hm_banner">
        <div className="banner_box">
            <img src={mainImage} className="" alt="alt" />
        </div>
    </section>
    <section className="wrap_con">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="leftWrap">
                        <div className="leftWrapin">
                            <div className="cardMain list-wrapper">
                                <div className="newscard list-item firstNews">
                                    <MainPost/>
                                </div>
                                <HomePost postsData={homePosts?.posts?.posts}/>
                            </div>
                            <Pagination postsPerPage={postPerPage} totalPosts={homePosts?.posts?.total_count} paginate={paginate} currentPage={currentPage}/>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="rightWrap">
                        <div className="rightWrapinIn">
                            <div className="sidebarMain searchSidebar">
                                {/* <form className="formSidebar" action="">
                                    <input type="search" name="search" className="searchRight"
                                        placeholder="Search and hit etner..." />
                                </form> */}
                            </div>
                            <div className="sidebarMain newsletterSidebar">
                                <h3 className="sidebarTitle sec_title">Join Our Network</h3>
                                <form className="formSidebar" action="">
                                    {/* <label>Email Address</label>
                                    <input type="email" name="email" className="searchRight"
                                        placeholder="Your Email Address" /> */}
                                    <Link to="/">
                                        <input type="submit"  data-toggle="modal" value="Sign up" data-target="#signupForm" />
                                        <SingupForm/>
                                    </Link>
                                </form>
                            </div>
                            <div className="sidebarMain">
                                <h3 className="sidebarTitle sec_title">Instagram</h3>
                                {/* <div className="rightadv"> */}
                                    {/* <img src={instagram} alt="alt" /> */}
            <InstaPost/>

                                {/* </div> */}
                            </div>
                            {/* <Sponsers limit={3} ads={adsPosts?.advertisements}/> */}

                            <div className="sidebarMain">
                                <h3 className="sidebarTitle sec_title">Advertisement</h3>
                                    <div >
                                        <img src={sponser1} alt="Item" />
                                    </div><div >
                                        <img src={sponser2} alt="Item" />
                                    </div><div >
                                        <img src={sponser3} alt="Item" />
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
        homePosts:state.posts
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        paginationPost: (page,limit)=>dispatch(postsdata(page,limit)),
        mainFeaturedPost:()=>dispatch(featuredPost())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
    