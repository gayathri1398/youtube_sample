import {  GET_VIDEO, } from "./data.type";

const INITIAL_STATE ={
    video:[],
    specificVideo:[]
}

export const DataReducer=(state=INITIAL_STATE,action)=>{
  switch (action.type) {
      case GET_VIDEO:
          return {
              ...state,
              video:action.payload
          }
          
    
  
      default:
          break;
  }
}