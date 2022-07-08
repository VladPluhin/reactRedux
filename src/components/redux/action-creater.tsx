import { createApi } from "unsplash-js";
import {  ACTIONS_LIST} from '../redux/postReducer'
const Api= createApi({accessKey: "k6MK8xSwdSo_9QcKO4iLm0r_nirfy7FUADRtpAMqhRw"});


export const fetchPost = (dispatch:any, pages:number, ) :any=> {
  return function()  {
      return Api.photos
      .list({
        page: pages,
      })
      .then((result:any) => {
        return dispatch({type: ACTIONS_LIST.FETCH_POSTS,  payload:[...result.response.results]}); 
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }
}

export const sortPost = (dispatch:any, filter:any) :any=> {
    
  
  return function()  {
    return Api.search.getPhotos(filter)
    .then((result:any) => {
      return dispatch({type: ACTIONS_LIST.FIND_POST,   payload:[...result.response.results]}); 
    })
    .catch(() => {
      console.log("something went wrong!!");
    });
  }
  
 
}


 