import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/intertainment.png';
import { API_URL } from '../../config';
import Pagination from '../common/Pagination';

function CategoriesVideos() {
    const limitDesc=100
    const [data, setData]=useState([])
    const [postsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1);
    const { category_slug } = useParams();
    useEffect(() => {
        window.scrollTo(0,0)

        axios.post(`${API_URL.baseUrl}/api/get_related_videos?category_slug=${category_slug}&page=${currentPage}&limit=${postsPerPage}`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err.message))
    }, [category_slug])

    const paginate = (number)=>{
        axios.post(`${API_URL.baseUrl}/api/get_related_videos?category_slug=${category_slug}&page=${number}&limit=${postsPerPage}`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err.message))
        setCurrentPage(number)
    }
    return (
        <div>
            <section className="hm_banner">   
                <div className="banner_box">
                    <img src={banner} alt="Null" />
                </div>
            </section>
            <section className="wrap_con">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="leftWrap">
                        <div className="leftWrapin ">
                            <div className="cardMain list-wrapper ">
                                {data.data?.posts?.map((val)=>(  
                                <div className="newscard list-item" key={val.id}>
                                    <div className="newscard--wrap ">
                                        <div className="newscard--videoPlay">
                                            <img src={val.image} className="newscard--postThum" alt="" />
                                        </div>
                                        <div className="newscard--postCont">
                                            <h4 className="newscard--postCategory">{val.category.title}</h4>
                                                <h3 className="newscard--postTitle" >{val.title}</h3>
                                            <span className="newscard--postDate"><i> {(() => {
                                            var d = new Date(val.created_at)
                                            return (d.toLocaleString('default', { month: 'long' })+(d.toUTCString().substr(4,3))+", "+(d.toUTCString().substr(12,5)))
                                            })()} 
                                            {/* by {val.user_name} */}
                                            </i></span>
                                            <p className="newscard--postPara">
                                            {val.content.length > limitDesc ?
                                                (
                                                <><div dangerouslySetInnerHTML={{ __html: val.content.substring(0, limitDesc)+'...'}}/></>
                                                ) :
                                                <div dangerouslySetInnerHTML={{ __html: val.content }} />
                                            }
                                                
                                            </p>
                                        </div>
                                            <Link to={`/video/${val.slug}`} className="newscard--linkDetails">Watch Now</Link>
                                    </div>
                                </div>
                                ))}                         
                            </div>
                             </div>
                    </div>
                </div>
            </div>
    <Pagination postsPerPage={postsPerPage} totalPosts={data.data?.total_count} paginate={paginate} currentPage={currentPage}/>

        </div>
    </section>

        </div>
    )
}

export default CategoriesVideos





