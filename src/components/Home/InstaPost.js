// import React from 'react'
// import InstagramFeed  from 'react-ig-feed'
// import Feed from "react-instagram-authless-feed"
// import 'react-ig-feed/dist/index.css'
// const InstaPost = () => {
//     // return <InstagramFeed token="IGQVJWemdzX0UyQVdmWTE2VHVTVzZAfZATB0bk92RGNPT3NaV3VKRmt5VU1fREdkZAGpXZAUREYWdUX3Q4T29lekRmUmxtb0s0eEVBUWFvUDVhN2VZAdzFqUWlZARmJpdE9nWEY5RjlHbW1LdFhxOGd5NnF1VwZDZD"  counter="3"/>  
//     return  <InstagramFeed className="ig__feed" token="IGQVJVLVI4YkJMRVl1ekxUNmFsQ1g3OU1kMmdfRFRsQW9XWk0yeTB6V210MEd1ZAzE4SEFHQUIzQUsxLV9pVnFFS3RYcUJhN2dhUVBON0tGUnRlQnp6Yk41NE9FMWpYbGxkaF9UNV9USkJrVjhQSDBkZAwZDZD" counter="6"/>     

// // return <Feed userName="nhlchrs" className="Feed" limit="3"/>
// }
// export default InstaPost


import axios from 'axios'
import React, { useEffect, useState } from 'react'

function InstaPost() {
    const [InstaGramPost, setInstaGramPost] = useState([])
    useEffect(()=>{
        axios.get('https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&access_token=IGQVJXYl80Ui1tX0k0Y2lxQmNYdTlnM3lMMmhJdWpmemlqR0R1N2xsVXNNRm1yQjhSTkxqd1VHM0x1VTVuMmxDSWNETjYxTld1VnJrOHdZAeUdmdUd5ZATBoRzI5cm50WlhUTkhHc3Npdnd3RmRtbVR5cgZDZD').then(res=>setInstaGramPost(res.data.data))
    },[])
    return (
        <div className="mainDiv">
            {InstaGramPost.slice(0,6).map((item,index)=>(
            <div className="instaPost" key={index}>
            <a href={item.permalink} target="_blank">
                <img src={item.media_url} className="imageInstaPost" alt="insta Url" />
            </a>
            </div>
    ))}
        </div>
    )
}

export default InstaPost
