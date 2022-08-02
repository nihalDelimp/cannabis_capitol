import React from 'react'
import { Link } from 'react-router-dom'

function CategoryNewsPosts({categoryData, limitDesc}) {
    return (
        <>
            {categoryData.posts?.map((val)=>(  
                                    <div className="newscard list-item" key={val.id}>
                                        <div className="newscard--wrap ">
                                            <div className="newscard--videoPlay">
                                                <img src={val.image} className="newscard--postThum" alt="" />
                                            </div>
                                            <div className="newscard--postCont">
                                                <h4 className="newscard--postCategory">{val.category===null ? "Uncategorized" : val.category.title}</h4>
                                                    <h3 className="newscard--postTitle" >{val.title}</h3>
                                                <span className="newscard--postDate"><i> {(() => {
                                                var d = new Date(val.created_at)
                                                return (d.toLocaleString('default', { month: 'long' })+(d.toUTCString().substr(4,3))+", "+(d.toUTCString().substr(12,5)))
                                                })()} by {val.user_name}</i></span>
                                                <div className="newscard--postPara">
                                                {val.content.length > limitDesc ?
                                                    (
                                                    <><div dangerouslySetInnerHTML={{ __html: val.content.substring(0, limitDesc)+'...'}}/></>
                                                    ) :
                                                    <div dangerouslySetInnerHTML={{ __html: val.content }} />
                                                }    
                                                </div>
                                            </div>
                                                <Link to={`/news/${val.slug}`} className="newscard--linkDetails">Continue Reading</Link>
                                        </div>
                                    </div>
                                    ))}
        </>
    )
}

export default CategoryNewsPosts
