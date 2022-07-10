import { createApi } from "unsplash-js";
import { postsSlice } from "./postSlice";
import { AppDispatch } from "./store";

const Api= createApi({accessKey: "k6MK8xSwdSo_9QcKO4iLm0r_nirfy7FUADRtpAMqhRw"});

export const fetchPost = (dispatch:AppDispatch, pages:number, ) :any=> {
  return function()  {
      return Api.photos
      .list({
        page: pages,
      })
      .then((result:any) => {
        return  dispatch(postsSlice.actions.postsFetching([...result.response.results])) 
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }
}

export const sortPost = (dispatch:AppDispatch, filter:any) :any=> {
  return function()  {
    return Api.search.getPhotos(filter)
    .then((result:any) => {
      return dispatch(postsSlice.actions.postsSearching(([...result.response.results]))) 
    })
    .catch(() => {
      console.log("something went wrong!!");
    });
  }
}
