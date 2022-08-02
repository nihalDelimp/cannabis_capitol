import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VIMEO_URL } from '../../config'
import { EVENTS } from '../common/constants'

const Events = () => {

    const [Events, setEvents] = useState([])
    const Token = process.env.REACT_APP_VIMEO_TOKEN;

    useEffect(async () => {
        const EventsData = await axios.get(`${VIMEO_URL}/projects/${EVENTS}/items`,
            {
                headers: {
                    Authorization: `bearer ${Token}`
                }
            })
        if (EventsData) {

            setEvents(EventsData.data.data.splice(0, 4))
        }
    }, [setEvents]);

    return (
        <>
            {Events && Events.length > 0 ?
                (< div className="intertainWraper" >
                    <div className="intertainWraperIn">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="newslistTop" >
                                    <h2 className="newslistTop--title sec_title">Events</h2>
                                    <Link className="newslistTop--readmore" to={`/videos/${EVENTS}`}>See More Videos &gt;&gt;</Link>
                                </div>
                                <div className="news_listBottom">
                                    <ul className="newsList">
                                        {Events && Events?.map((item, index) => (
                                            <li className="newsListItem" key={index} >
                                                <Link to={`s`} className="newsListItemLink">
                                                    <div className="intThumbnail">
                                                        <img src={item?.video?.pictures?.base_link} alt="" />
                                                    </div>
                                                    <div className="intDetails">
                                                        <span className="newsTitle">{item?.video?.name.length > 15 ?
                                                            (
                                                                <><span dangerouslySetInnerHTML={{ __html: item?.video?.name.substring(0, 20) + "..." }} /></>
                                                            ) :
                                                            <> <span dangerouslySetInnerHTML={{ __html: item?.video?.name }} /></>
                                                        }</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >) : ""}
        </>

    )
}

export default Events