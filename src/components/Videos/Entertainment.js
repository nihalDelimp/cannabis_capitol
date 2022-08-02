import React, { useEffect, useState } from 'react';
import banner from '../../assets/intertainment.png';
import ScrollToTop from '../common/ScrollToTop';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { videosData } from '../../redux/actions/video';
import Twitch from './Twitch';
function Entertainment({ videosDataList, dispatchVideoData }) {
    const [videoData, setVideoData] = useState([])
    useEffect(() => {
        dispatchVideoData();
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setVideoData(videosDataList)
    }, [videosDataList])

    return (
        <div>
            <ScrollToTop />
            <section className="hm_banner">
                <div className="banner_box">
                    <img src={banner} alt="Null" />
                </div>
            </section>

            <section className="wrap_con">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Twitch />
                            {videoData.categories?.map((item) =>
                            (item.post_type === "2" && item.videos_four.length !== 0 &&
                                <div className="intertainWraper" key={item.id}>
                                    <div className="intertainWraperIn">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="newslistTop" >
                                                    <h2 className="newslistTop--title sec_title">{item.title}</h2>
                                                    <Link className="newslistTop--readmore" to={`/morevids/${item.slug}`}>See More Videos &gt;&gt;</Link>
                                                    <p className="newslistTop--content" dangerouslySetInnerHTML={{ __html: item.description }} />
                                                </div>
                                                <div className="news_listBottom">
                                                    <ul className="newsList">
                                                        {item.videos_four?.map((val) => (
                                                            <li className="newsListItem" key={val.id}>
                                                                <Link to={`/video/${val.slug}`} className="newsListItemLink">
                                                                    <div className="intThumbnail">
                                                                        <img src={val.image_path} alt="" />
                                                                    </div>
                                                                    <div className="intDetails">
                                                                        <span className="newsTitle">{val.title.length > 20 ?
                                                                            (
                                                                                <><span dangerouslySetInnerHTML={{ __html: val.title.substring(0, 20) + "..." }} /></>
                                                                            ) :
                                                                            <> <span dangerouslySetInnerHTML={{ __html: val.title }} /></>
                                                                        }</span> <span
                                                                            className="episodeNumber">{item.title.length > 20 ?
                                                                                (
                                                                                    <><span dangerouslySetInnerHTML={{ __html: item.title.substring(0, 20) + "..." }} /></>
                                                                                ) :
                                                                                <> <span dangerouslySetInnerHTML={{ __html: item.title }} /></>
                                                                            }</span>
                                                                        <p className="newsGuest">{val.sub_title.length > 20 ?
                                                                            (
                                                                                <><span dangerouslySetInnerHTML={{ __html: val.sub_title.substring(0, 20) + "..." }} /></>
                                                                            ) :
                                                                            <> <span dangerouslySetInnerHTML={{ __html: val.sub_title }} /></>
                                                                        }</p>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            )}

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
const mapStateToProps = state => {
    return {
        videosDataList: state.video.videoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchVideoData: () => dispatch(videosData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Entertainment)
