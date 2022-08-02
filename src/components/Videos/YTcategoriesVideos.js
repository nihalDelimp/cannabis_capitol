import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/intertainment.png';
import { YOUTUBE_TOKEN } from '../../config';
function YTcategoriesVideos() {
    const limitDesc = 100
    const [data, setData] = useState([])
    const [postsPerPage] = useState(50)
    const [currentPage, setCurrentPage] = useState(1);
    const { category_slug } = useParams();
    console.log(data)

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=${postsPerPage}&playlistId=${category_slug}&key=${YOUTUBE_TOKEN.token}`).then(res => setData(res.data))

    }, [])
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
                                        {data.items?.map((val, index) => (
                                            <div className="newscard list-item" key={index}>
                                                <div className="newscard--wrap ">
                                                    <div className="newscard--videoPlay">
                                                        <img src={val.snippet.thumbnails.medium.url} className="newscard--postThum" alt="" />
                                                    </div>
                                                    <div className="newscard--postCont">
                                                        <h4 className="newscard--postCategory">{val.title}</h4>
                                                        <h3 className="newscard--postTitle" >{val.title}</h3>
                                                        <span className="newscard--postDate"><i> {(() => {
                                                            var d = new Date(val.snippet.publishedAt)
                                                            return (d.toLocaleString('default', { month: 'long' }) + (d.toUTCString().substr(4, 3)) + ", " + (d.toUTCString().substr(12, 5)))
                                                        })()}</i></span>
                                                        <div className="newscard--postPara">
                                                            {val.snippet.description.length > limitDesc ?
                                                                (
                                                                    <><div dangerouslySetInnerHTML={{ __html: val.snippet.description.substring(0, limitDesc) + '...' }} /></>
                                                                ) :
                                                                <div dangerouslySetInnerHTML={{ __html: val.snippet.description }} />
                                                            }

                                                        </div>
                                                    </div>
                                                    <Link to={`/YTvideo/${val.contentDetails.videoId}`} className="newscard--linkDetails">Watch Now</Link>
                                                </div>
                                            </div>
                                        ))}
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

export default YTcategoriesVideos