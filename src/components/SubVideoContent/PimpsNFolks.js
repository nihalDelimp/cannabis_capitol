import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VIMEO_URL } from '../../config'
import { PIMPS_N_FOLKS } from '../common/constants'

const PimpsNFolks = () => {

    const [PimpsNFolks, setPimpsNFolks] = useState([])
    const Token = process.env.REACT_APP_VIMEO_TOKEN;

    useEffect(async () => {
        const PimpsNFolksData = await axios.get(`${VIMEO_URL}/projects/${PIMPS_N_FOLKS}/items`,
            {
                headers: {
                    Authorization: `bearer ${Token}`
                }
            })
        if (PimpsNFolksData) {

            setPimpsNFolks(PimpsNFolksData.data.data.splice(0, 4))
        }
    }, [setPimpsNFolks]);

    return (
        <>
            {PimpsNFolks && PimpsNFolks.length > 0 ?
                (< div className="intertainWraper" >
                    <div className="intertainWraperIn">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="newslistTop" >
                                    <h2 className="newslistTop--title sec_title">Pimps N Folks</h2>
                                    <Link className="newslistTop--readmore" to={`/videos/${PIMPS_N_FOLKS}`}>See More Videos &gt;&gt;</Link>
                                    {/* <p className="newslistTop--content" dangerouslySetInnerHTML={{ __html: item.description }} /> */}
                                </div>
                                <div className="news_listBottom">
                                    <ul className="newsList">
                                        {PimpsNFolks && PimpsNFolks?.map((item, index) => (
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
                                    <h2 className="newslistTop--title sec_title">Pimps N Folks</h2>
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

export default PimpsNFolks