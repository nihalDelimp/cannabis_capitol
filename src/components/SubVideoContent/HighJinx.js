import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VIMEO_URL } from '../../config'
import { HIGH_JINX } from '../common/constants'

const HighJinx = () => {

  const [highJinx, setHighJinx] = useState([])
  const Token = process.env.REACT_APP_VIMEO_TOKEN;

  useEffect(async () => {
    const highjinxData = await axios.get(`${VIMEO_URL}/projects/${HIGH_JINX}/items`,
      {
        headers: {
          Authorization: `bearer ${Token}`
        }
      })
    if (highjinxData) {
      setHighJinx(highjinxData.data.data.splice(0, 4))
    }
  }, [setHighJinx]);

  return (
    <>
      {highJinx && highJinx.length > 0 ?
        (< div className="intertainWraper" >
          <div className="intertainWraperIn">
            <div className="row">
              <div className="col-lg-12">
                <div className="newslistTop" >
                  <h2 className="newslistTop--title sec_title">High Jinx</h2>
                  <Link className="newslistTop--readmore" to={`/videos/${HIGH_JINX}`}>See More Videos &gt;&gt;</Link>
                </div>
                <div className="news_listBottom">
                  <ul className="newsList">
                    {highJinx && highJinx?.map((item, index) => (
                      <li className="newsListItem" key={index} >
                        <Link className="newsListItemLink" to={`/playvideo/Heiii`} >
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

export default HighJinx