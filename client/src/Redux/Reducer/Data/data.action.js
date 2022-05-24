import axios from 'axios';

import { GET_VIDEO,GET_SPECIFIC_VIDEO } from './data.type';

export const getVideos=()=>async(dispatch)=>{
    try {
        const allVideos = await axios({
            method:"GET",
            url:"https://ce4kvluf13.execute-api.ap-south-1.amazonaws.com/stage/video-list"
        })
        return dispatch({type:GET_VIDEO, payload:allVideos})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}

