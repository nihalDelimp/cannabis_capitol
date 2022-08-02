import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VIMEO_URL } from '../../config'
import { LIVE_PRODUCTIONS } from '../common/constants'

const LiveProductions = () => {

  const [LiveProductions, setLiveProductions] = useState([])
  const Token = process.env.REACT_APP_VIMEO_TOKEN;

  useEffect(async () => {
    const LiveProductionsData = await axios.get(`${VIMEO_URL}/albums/${LIVE_PRODUCTIONS}/videos`,
      {
        headers: {
          Authorization: `bearer ${Token}`
        }
      })
    if (LiveProductionsData) {
      console.log(LiveProductionsData.data.data, "production")

      setLiveProductions(LiveProductionsData.data.data)
    }
  }, [setLiveProductions]);

  return (
    <>
      {LiveProductions && LiveProductions.length > 0 ?
        (< div className="intertainWraper" >
          <div className="intertainWraperIn">
            <div className="row">
              <div className="col-lg-12">
                <div className="newslistTop" >
                  <h2 className="newslistTop--title sec_title">Live Production</h2>
                  <Link className="newslistTop--readmore" to={`/videos/${LIVE_PRODUCTIONS}`}>See More Videos &gt;&gt;</Link>
                </div>
                <div className="news_listBottom">
                  <ul className="newsList">
                    {LiveProductions && LiveProductions?.map((item, index) => (
                      <li className="newsListItem" key={index} >
                        <Link to={`s`} className="newsListItemLink">
                          <div className="intThumbnail">
                            <img src={item?.pictures?.base_link} alt="" />
                          </div>
                          <div className="intDetails">
                            <span className="newsTitle">{item?.name.length > 15 ?
                              (
                                <><span dangerouslySetInnerHTML={{ __html: item?.name.substring(0, 20) + "..." }} /></>
                              ) :
                              <> <span dangerouslySetInnerHTML={{ __html: item?.name }} /></>
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
                  <h2 className="newslistTop--title sec_title">Live Production</h2>
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

export default LiveProductions