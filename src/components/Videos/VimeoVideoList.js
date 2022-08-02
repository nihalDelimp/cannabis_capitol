import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/intertainment.png';
import { VIMEO_URL } from '../../config';
import IsLoadingHOC from '../IsLoadingHOC'

function VimeoVideoList(props) {
    const limitDesc = 100
    const [postsPerPage] = useState(50)
    const [currentPage, setCurrentPage] = useState(1);
    const { slug } = useParams();
    const { setLoading } = props;

    const [data, setData] = useState([])
    const Token = process.env.REACT_APP_VIMEO_TOKEN;
    console.log(slug, "nihal Sluggg")
    const VIMEO_API_URL = slug !== "9259746" ? `${VIMEO_URL}/projects/${slug}/items` : `${VIMEO_URL}/albums/${slug}/videos`;

    useEffect(async () => {
        setLoading(true);
        const highjinxData = await axios.get(VIMEO_API_URL,
            {
                headers: {
                    Authorization: `bearer ${Token}`
                }
            })
        if (highjinxData) {
            setData(highjinxData.data.data);
            setLoading(false);

        }
    }, []);
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
                                        {data && data?.length > 0 && data?.map((item, index) => (
                                            <div className="newscard list-item" key={index}>
                                                <div className="newscard--wrap ">
                                                    <div className="newscard--videoPlay">
                                                        <img src={slug === "9259746" ? item.pictures.base_link : item.video.pictures.base_link} className="newscard--postThum" alt="" />
                                                    </div>
                                                    <div className="newscard--postCont">
                                                        <h4 className="newscard--postCategory">{slug === "9259746" ? item.name : item.video.name}</h4>
                                                        {/* <h3 className="newscard--postTitle" >{item.video.name}</h3> */}
                                                        <span className="newscard--postDate"><i> {(() => {
                                                            var d = new Date(slug === "9259746" ? item.release_time : item.video.release_time)
                                                            return (d.toLocaleString('default', { month: 'long' }) + (d.toUTCString().substr(4, 3)) + ", " + (d.toUTCString().substr(12, 5)))
                                                        })()}</i></span>
                                                        <div className="newscard--postPara">
                                                            {slug === "9259746" ? item.release_time : item.video.description === null ? <div dangerouslySetInnerHTML={{ __html: "No description present" }} />
                                                                : item?.video?.description?.length > limitDesc ?
                                                                    (
                                                                        <><div dangerouslySetInnerHTML={{ __html: item.video.description.substring(0, limitDesc) + '...' }} /></>
                                                                    ) :
                                                                    <div dangerouslySetInnerHTML={{ __html: item.video.description }} />
                                                            }

                                                        </div>
                                                    </div>
                                                    <Link to={`/YTvideo/${"item.contentDetails.videoId"}`} className="newscard--linkDetails">Watch Now</Link>
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

export default IsLoadingHOC(VimeoVideoList)