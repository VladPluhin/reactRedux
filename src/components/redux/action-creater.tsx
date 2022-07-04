import { createApi } from "unsplash-js";
import {  ACTIONS_LIST} from '../redux/postReducer'

export const fetchPost = (dispatch:any) :any=> {
 return function()  {
  const Api= createApi({accessKey: "k6MK8xSwdSo_9QcKO4iLm0r_nirfy7FUADRtpAMqhRw"});
    return Api.photos
    .list({
      page: 2,
    })
    .then((result:any) => {
      console.log(result.response.results)
      return dispatch({type: ACTIONS_LIST.FETCH_POST,  payload:[...result.response.results]}); 
    })
    .catch(() => {
      console.log("something went wrong!");
    });
  }
}