import { createApi } from "unsplash-js";
import {  ACTIONS_LIST} from '../redux/postReducer'

export const fetchPost = (dispatch:any, pages:number, ) :any=> {
 
  return function()  {
    const Api= createApi({accessKey: "k6MK8xSwdSo_9QcKO4iLm0r_nirfy7FUADRtpAMqhRw"});
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