import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router'
import { Link, NavLink } from 'react-router-dom';
import { YOUTUBE_TOKEN } from '../../config';

function YtRelatedVideos() {
    const { slug } = useParams();
    const [relatedVideo, setRelatedVideo] = useState([])
    useEffect(async () => {
        await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_TOKEN.token}&channelId=UC1pb1oF42Wz0YwjQRKQBv5Q&part=snippet,id&order=date&maxResults=50`).then(res => setRelatedVideo(res.data?.items))
        // axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${slug}&type=video&maxResults=3&key=${YOUTUBE_TOKEN.token}`).then(res=>setRelatedVideo(res.data.items))
        // console.log(relatedVideo)
    }, [])
    // var numbers = relatedVideo;
    // useEffect(()=>{
    var numbers = relatedVideo;
    var randomRelatedVideos = []

    for (var i = 0; i < 3; i++) {
        var randomChoice = numbers[~~(Math.random() * numbers.length)]
        randomRelatedVideos.push(randomChoice)
    }
    //  console.log(randomRelatedVideos)
    // },[slug])

    return (
        <>
            <div className="news_listBottom">
                <ul className="newsList">
                    {randomRelatedVideos?.map((item, index) => (
                        <li className="newsListItem" key={index}>
                            <NavLink to={`/YTvideo/${item?.id?.videoId}`} className="newsListItemLink">

                                <div className="intThumbnail">
                                    <img src={item?.snippet?.thumbnails.high.url} alt="" />
                                </div>
                                <div className="intDetails">
                                    <span className="newsTitle">{item?.snippet.channelTitle}</span>
                                    <span
                                        className="episodeNumber">{item?.snippet.title.length > 10 ?
                                            (
                                                <><span dangerouslySetInnerHTML={{ __html: item?.snippet.title.substring(0, 20) + "..." }} /></>
                                            ) :
                                            <span dangerouslySetInnerHTML={{ __html: item?.snippet.title }} />
                                        }</span>
                                </div>
                            </NavLink>

                        </li>


                    ))}
                    <div className="moreVideosLink">
                        <Link to={`/shows`}>More like this &gt;&gt;</Link>
                    </div>
                </ul></div>

        </>
    )
}

export default YtRelatedVideos
