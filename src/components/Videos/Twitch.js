import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TwitchPlayer } from 'react-twitch-embed';
import ReactPlayer from 'react-player/twitch'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Twitch() {
    const [data, setData] = useState([])
    const [realTimeVideo, setrealTimeVideo] = useState("")
    const [videoDetails, setVideoDetails] = useState("")
    useEffect(() => {
        axios.get('https://api.twitch.tv/kraken/channels/625512126/videos?limit=14', {
            headers: {
                'Accept': 'application/vnd.twitchtv.v5+json',
                "Client-ID": "urw4uabfjw9juq032a4r3tneah3ggx"
            }
        }).then(json => setData(json.data)).catch(err => console.log(err.message))
    }, [setData])
    const handleUrl = (url, details) => {
        setrealTimeVideo(url)
        setVideoDetails(details)
    }
    useEffect(() => {
        handleUrl()
    }, [setrealTimeVideo])
    return (
        <>
            <div className="intertainWraper">
                <div className="intertainWraperIn">
                    <div className="row">
                        <div className="col-lg-7">

                            <div className="news_listBottom">
                                <ul className="newsList">
                                    <li className="newsListItem bigBannner">
                                        <div className="intThumbnail">
                                            {realTimeVideo === undefined ? <TwitchPlayer channel="cannabiscapitol" width={700} height={435} controls />
                                                : <ReactPlayer url={realTimeVideo} width={700} height={435} controls />}
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
                                    <h2 className="newslistTop--title sec_title">Daily live streams</h2>
                                    <p className="newslistTop--content">
                                        {realTimeVideo === undefined ? "Daily live streams from Cannabis Capitol studios featuring various cannabis  personalities and influencers." : videoDetails}
                                    </p>
                                </div>
                                <div className="news_listBottom">
                                    <ul className="newsList">
                                        <li className="newsListItem">
                                            <div className="intDetails">
                                                <h3 className="sec_title">Live Now</h3>
                                                <span className="episodeNumber">Cannabis Capitol Daily </span>
                                                <span className="episodeNumber">@StonerShenanigans w/</span><br />
                                                <span className="episodeNumber">@CaliforniaClouds420</span><br />
                                                <span className="episodeNumber">@JenniLovesDank</span><br />
                                                <span className="episodeNumber">@JourdanJade, &amp; @The_Faded_Kitten</span>
                                                <p className="newsGuest"><a href="https://www.twitch.tv/cannabiscapitol" target="_blank" rel="noreferrer">Live now on twitch.tv/cannabiscapitol </a></p>
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
                                <h2 className="newslistTop--title sec_title"> Daily Live Streams </h2>
                                <div className="newslistTop--content">
                                    <div className="intThumbnail"></div>
                                </div>
                            </div>


                            <div className="news_listBottom">
                                <ul className="newsList">
                                    <OwlCarousel className='owl-theme' loop items={4} margin={10}>
                                        {data?.videos?.map((item, index) => (
                                            <li className="newsListItem item" key={index}>
                                                <Link className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={item.thumbnails.large[0].url} alt={item.thumbnails.large[0].url} onClick={() => handleUrl(item.url, item.title)} />
                                                        {/* <ReactPlayer url={item.url} height={140} controls width={300} /> */}
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="episodeNumber">
                                                            {item.title.length > 10 ? <p>{item.title.substring(0, 45) + "..."}</p> : <p>{item.title}</p>}
                                                        </span>
                                                        <p className="newsGuest"></p>
                                                    </div>
                                                </Link>
                                            </li>

                                        ))}
                                    </OwlCarousel>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Twitch

