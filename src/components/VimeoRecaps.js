import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import IsLoadingHOC from './IsLoadingHOC'
import banner from '../assets/intertainment.png';
import HighJinx from './SubVideoContent/HighJinx';
import PatientChronical from './SubVideoContent/PatientChronical';
import LiftedLaughter from './SubVideoContent/LiftedLaughter';
import Potpolitics from './SubVideoContent/PotPolitics';
import PimpsNFolks from './SubVideoContent/PimpsNFolks';
import JokersWorld from './SubVideoContent/JokersWorld';
import { VIMEO_URL } from '../config';
import Events from './SubVideoContent/Events';
import LiveProductions from './SubVideoContent/LiveProductions';
function VimeoRecaps(props) {
    const { setLoading } = props;
    const [recentVideo, setRecentVideo] = useState({})
    const [realTimeVideo, setRealTimeVideo] = useState("")

    const Token = process.env.REACT_APP_VIMEO_TOKEN;

    useEffect(async () => {
        setLoading(true);
        const response = await axios.get(`${VIMEO_URL}/videos`,
            {
                headers: {
                    Authorization: `bearer ${Token}`
                }
            })
        if (response) {
            setRecentVideo(response.data.data[0])
            setRealTimeVideo(response.data.data[0].player_embed_url)
            setLoading(false);
        }
    }, [setRecentVideo]);

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
                        <div className="col">
                            <div className="intertainWraper">
                                <div className="intertainWraperIn">
                                    <div className="row">
                                        <div className="col-lg-7">

                                            <div className="news_listBottom">
                                                <ul className="newsList">
                                                    <li className="newsListItem bigBannner">
                                                        <div className="intThumbnail">
                                                            <ReactPlayer url={realTimeVideo} width={700} height={435} controls />
                                                            <div className="showLive">
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="postTopRightWraper">
                                                <div className="newslistTop">
                                                    <h2 className="newslistTop--title sec_title">Recaps</h2>
                                                    <p className="newslistTop--content">
                                                        The recaps on the Cannabis Capitol network highlight the events that capture the cannabis industry culture
                                                        {/* {realTimeVideo === undefined ? "Daily live streams from Cannabis Capitol studios featuring various cannabis  personalities and influencers." : videoDetails} */}
                                                    </p>
                                                </div>
                                                <div className="news_listBottom">
                                                    <ul className="newsList">
                                                        <li className="newsListItem">
                                                            <div className="intDetails">
                                                                <h3 className="sec_title">Recaps</h3>
                                                                {recentVideo.description}
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intertainWraper" >
                                <div className="intertainWraperIn">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="newslistTop" >
                                                <h2 className="newslistTop--title sec_title">Recaps</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Events />
                            <LiveProductions />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default IsLoadingHOC(VimeoRecaps)