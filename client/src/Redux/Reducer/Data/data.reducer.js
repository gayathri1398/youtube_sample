import {  GET_VIDEO,GET_SPECIFIC_VIDEO } from "./data.type";

const INITIAL_STATE ={
    video:[],
    specificVideo:[]
}

const dataReducer=(state=INITIAL_STATE,action)=>{
  switch (action.type) {
      case GET_VIDEO:
          return {
              ...state,
              video:action.payload
          }
      case GET_SPECIFIC_VIDEO:
          return{
              ...state,
              specificVideo:action.payload
          }  
    
  
      default:
          return{
              ...state
          }
  }
}

export default dataReducer;