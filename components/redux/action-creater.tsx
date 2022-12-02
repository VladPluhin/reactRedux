import App from "next/app";
import { createApi } from "unsplash-js";
import { postsSlice } from "./postSlice";
import { AppDispatch } from "./store";
import {  signInWithPopup } from "firebase/auth";
const Api= createApi({accessKey: "k6MK8xSwdSo_9QcKO4iLm0r_nirfy7FUADRtpAMqhRw"});
import { db}  from "../state/state";
import {doc,setDoc} from "firebase/firestore";
export const fetchPost = (dispatch:AppDispatch, pages:number, ) :any=> {
  dispatch(postsSlice.actions.postIsLoading())  
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
  dispatch(postsSlice.actions.postIsLoading())  
  return function()  {
    return Api.search.getPhotos(filter)
    .then((result:any) => {
      return dispatch(postsSlice.actions.postsSearching([...result.response.results])) 
    })
    .catch(() => {
      console.log("something went wrong!!");
    });
  }
}


export const setLogin = (dispatch:AppDispatch,  auth:any, provider:any,) :any=>{
  
  return function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user :any= result.user;
      const userDoc= doc(db, 'users', user.displayName);
      setDoc(userDoc,  { likedPosts: {} }, { merge: true });
      return  dispatch(postsSlice.actions.getLogin({photoURL: user.photoURL, displayName: user.displayName})) 
      //написать функцию в которой сделать проверку на юзера. если он есть то не мержить туда likedPost
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
}