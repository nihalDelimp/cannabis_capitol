import React, { useEffect, useState } from 'react';
import banner from './assets/intertainment.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { YOUTUBE_TOKEN } from './config'
import Twitch from './components/Videos/Twitch'
function Youtube() {
    const [videoData, setVideoData] = useState([])
    const [playlistData, setplaylistData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC1pb1oF42Wz0YwjQRKQBv5Q&maxResults=28&key=${YOUTUBE_TOKEN.token}`)
            .then((res) =>
                setVideoData(res.data),
                setLoading(true))
    }, [])

    useEffect(() => {
        if (loading === true) {
            let newPlaylistIds = videoData?.items?.map((item) => item.contentDetails.itemCount > 0 ? item.id : 0)
            let promiseArray = [];
            for (let i = 0; i < newPlaylistIds?.length; i++) {
                if (newPlaylistIds[i] !== 0) {
                    promiseArray.push(fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=4&playlistId=${newPlaylistIds[i]}&key=${YOUTUBE_TOKEN.token}`))
                }
            }
            //  console.log(promiseArray)
            Promise.all(promiseArray)
                //  .then(values=>values.map(value=>console.log(value.url)))
                //  .then(values=>values.map(value=>axios.get(value.url).then(res=>console.log(res.data))))
                //  .then(values=>values.every(value=>axios.get(value.url).then(res=>setplaylistData(res.data))))
                //  .catch(err=>console.log(err))
                .then(function (responses) {
                    // Get a JSON object from each of the responses
                    return Promise.all(responses.map(function (response) {
                        return response.json();
                    }));
                }).then(function (data) {
                    // Log the data to the console
                    // You would do something with both sets of data here
                    setplaylistData(data);
                }).catch(function (error) {
                    // if there's an error, log it
                    console.log(error);
                });
        }
    }, [videoData, loading])
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
                            <Twitch />

                            {videoData.items?.map((item) =>
                            (item.contentDetails.itemCount > 0 && item.snippet.title !== "Comedy Minute" &&
                                <div className="intertainWraper" key={item.id}>
                                    <div className="intertainWraperIn">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="newslistTop" >
                                                    <h2 className="newslistTop--title sec_title">{item.snippet.localized.title}</h2>
                                                    <Link className="newslistTop--readmore" to={`/YTmorevids/${item.id}`}>{item.contentDetails.itemCount > 3 && <>See More Videos &gt;&gt;</>}</Link>
                                                    <div className="newslistTop--content">
                                                        <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                                        {/* <div className="intThumbnail">
                                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                                        </div> */}
                                                    </div>

                                                </div>
                                                <div className="news_listBottom">
                                                    <ul className="newsList">

                                                        {playlistData.map(item2 => item2.items.map(val => (
                                                            <>
                                                                {item.id === val.snippet.playlistId && Object.values(val.snippet?.thumbnails).length > 1 &&
                                                                    <li className="newsListItem" key={val.id}>
                                                                        <Link to={`/YTvideo/${val.snippet.resourceId.videoId}`} className="newsListItemLink">
                                                                            <div className="intThumbnail">
                                                                                <img src={val.snippet.thumbnails.medium.url} alt="" />
                                                                            </div>
                                                                            <div className="intDetails">
                                                                                <span className="episodeNumber">{val.snippet.title.length > 30 ?
                                                                                    (
                                                                                        <><span dangerouslySetInnerHTML={{ __html: val.snippet.title.substring(0, 45) + "..." }} /></>
                                                                                    ) :
                                                                                    <> <span dangerouslySetInnerHTML={{ __html: val.snippet.title }} /></>
                                                                                }</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                }
                                                            </>
                                                        )))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Youtube
