import React,{useEffect, useState} from 'react'
import newsBanner from '../../assets/news-banner.jpg'
import {
    useParams
  } from "react-router-dom";
import Pagination from '../common/Pagination';
import {news, tagnews, categorynews} from '../../redux/actions/news'
import {connect} from 'react-redux'
import NewsPage from './NewsPage'; 
import TagNewsPosts from './TagNewsPosts';
import CategoryNewsPosts from './CategoryNewsPosts';

function News({dispatchNews, newsPosts, dispatchTagNews, dispatchCategoryNews }) {
    const [data, setdata] = useState([])
    const [tags, setTagData] = useState([])
    const [category, setCategoryData] = useState([])
    const [postPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1);
    let { tag_slug, category_slug } = useParams();
    useEffect(async()=>{
        window.scrollTo(0,0);
        return (
            tag_slug === undefined && category_slug===undefined 
            ? dispatchNews(currentPage, postPerPage) 
            : tag_slug !== undefined && category_slug===undefined 
            ? dispatchTagNews(tag_slug, currentPage, postPerPage) 
            :tag_slug === undefined && category_slug!==undefined 
            ? dispatchCategoryNews(category_slug, currentPage, postPerPage)
            :""
    )
},[setCurrentPage, tag_slug, category_slug])

    useEffect(()=>{
        window.scrollTo(0,0);

        if(tag_slug!==undefined){
            setTagData(newsPosts.tagnews)
        }
        else if(category_slug!==undefined){
            setCategoryData(newsPosts.categoryNews)
        }
        else{
            setdata(newsPosts.news) 
        } 
    },[tag_slug,category_slug,setdata,setTagData,setCategoryData,newsPosts])
    
    const paginate = (number)=>{
        setCurrentPage(number)
        if(tag_slug!==undefined){
            dispatchTagNews(tag_slug, number, postPerPage)
            setCurrentPage(number)
        } else if(category_slug!==undefined){
           dispatchCategoryNews(category_slug, number, postPerPage)
            setCurrentPage(number)
        }else{
            dispatchNews(number, postPerPage);
            setCurrentPage(number)
        }
        }
        
    return (
        <div>
            <section className="hm_banner">
        <div className="banner_box">
            <img src={newsBanner} className="" alt="" />
        </div>
    </section>

    <section className="wrap_con">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="leftWrap">
                        <div className="leftWrapin ">
                            <div className="cardMain list-wrapper">
                                {tag_slug === undefined && category_slug === undefined && <NewsPage newsPosts={data}/> }
                                {!data.posts && tag_slug !== undefined && category_slug === undefined && <TagNewsPosts tagData={tags} limitDesc={100}/>}
                                {!data.posts && category_slug !== undefined && tag_slug === undefined && <CategoryNewsPosts categoryData={category} limitDesc={100}/>}                         
                            </div>
                            {tag_slug===undefined && category_slug===undefined && <Pagination postsPerPage={postPerPage} totalPosts={data.total_count} paginate={paginate} currentPage={currentPage}/> }
                            {tag_slug !==undefined && category_slug===undefined && <Pagination postsPerPage={postPerPage} totalPosts={tags.total_count} paginate={paginate} currentPage={currentPage}/> }
                            {tag_slug ===undefined && category_slug!==undefined && <Pagination postsPerPage={postPerPage} totalPosts={category.total_count} paginate={paginate} currentPage={currentPage}/>}
                  
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        newsPosts: state.news
    }
}
const mapDispatchToProps= dispatch =>{
    return{
        dispatchNews:(page, limit)=>dispatch(news(page,limit)),
        dispatchTagNews:(tags, page, limit) =>dispatch(tagnews(tags, page, limit)),
        dispatchCategoryNews:(category, page, limit) =>dispatch(categorynews(category, page, limit))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News)
