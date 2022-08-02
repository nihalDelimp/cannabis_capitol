import axios from "axios";

let api = axios.create({
    headers:{
        Authorization:'Bearer 0lynaalvtg8kp5fpn2a6voixt1gfd9',
        "Client-ID":"urw4uabfjw9juq032a4r3tneah3ggx",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }
})

export default api