import axios from 'axios';


import { GET_VIDEO,GET_SPECIFIC_VIDEO } from './data.type';

export const getVideos=()=>async(dispatch)=>{
    try {
        const allVideos = await axios({
            method:"GET",
            url:"../data.json",
               mode: 'cors', 
               referrerPolicy: 'no-referrer'
        })
        return dispatch({type:GET_VIDEO, payload:allVideos.data})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error.message})
    }
}

export const getSpecificVideo =(user_query,api_key)=>async(dispatch)=>{
    try {
        const particularVideos = await axios({
            method:"GET",
            url:`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${user_query}&key=${api_key}`
        });
        return dispatch({type:GET_SPECIFIC_VIDEO,payload:particularVideos})
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}