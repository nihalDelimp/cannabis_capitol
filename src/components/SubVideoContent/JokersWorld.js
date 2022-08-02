import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VIMEO_URL } from '../../config'
import { JOKERS_WORLD } from '../common/constants'

const JokersWorld = () => {

    const [JokersWorld, setJokersWorld] = useState([])
    const Token = process.env.REACT_APP_VIMEO_TOKEN;

    useEffect(async () => {
        const JokersWorldData = await axios.get(`${VIMEO_URL}/projects/${JOKERS_WORLD}/items`,
            {
                headers: {
                    Authorization: `bearer ${Token}`
                }
            })
        if (JokersWorldData) {

            setJokersWorld(JokersWorldData.data.data.splice(0, 4))
        }
    }, [setJokersWorld]);

    return (
        <>
            {JokersWorld && JokersWorld.length > 0 ?
                (< div className="intertainWraper" >
                    <div className="intertainWraperIn">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="newslistTop" >
                                    <h2 className="newslistTop--title sec_title">Jokers World</h2>
                                    <Link className="newslistTop--readmore" to={`/videos/${JOKERS_WORLD}`}>See More Videos &gt;&gt;</Link>
                                    {/* <p className="newslistTop--content" dangerouslySetInnerHTML={{ __html: item.description }} /> */}
                                </div>
                                <div className="news_listBottom">
                                    <ul className="newsList">
                                        {JokersWorld && JokersWorld?.map((item, index) => (
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
                </div >) : <div className="intertainWraper" >
                    <div className="intertainWraperIn">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="newslistTop" >
                                    <h2 className="newslistTop--title sec_title">Jokers World</h2>
                                    <p className="newslistTop--content" >No video is present!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default JokersWorld