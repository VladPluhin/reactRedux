import React, { useState} from "react";
import styles  from "../../styles/user.module.scss";
import { useAppDispatch, useAppSelectore } from "../redux/hook";
import {initializeApp} from '@firebase/app';
import { getAuth, GoogleAuthProvider , signOut} from "firebase/auth";
import State from "../state/state";
import {setLogin} from '../redux/action-creater';
import Link from 'next/link'
import { postsSlice } from "../redux/postSlice";
const User = () => {
  const state = new State();
  const dispatch= useAppDispatch();
  const userData = useAppSelectore((state)=>state.postsReducer.userData);
  const isLogin = useAppSelectore((state)=>state.postsReducer.login)
  const provider = new GoogleAuthProvider(); 
  const app = initializeApp(state.firebaseOptions);
  const auth = getAuth(app);

  const getLogin = async (event:any) => {
    event.preventDefault();
    dispatch(setLogin(dispatch,auth, provider))
  }

  const  getLogOut = (event:any)=> {
    event.preventDefault();
    signOut(auth).then(() => {
    return dispatch(postsSlice.actions.getLogOut())

    }).catch((error) => {
      console.log(error)
    });
    
  }
  if (!isLogin) {
    return (
    <div className={styles.account}>
          <a  href="#" onClick={getLogin}>Login in.</a>
    </div>
    )
  }else  {
   return (
    <div className={styles.account}>
        <div className = {styles.userWrapper}>
          <Link  href="/liked-posts"> 
            <a  className = {styles.userWrapper}>
              <div className= {styles.userInfo}>
                <h6>{userData.displayName}</h6>
              </div>
              <div className = {styles.userLogo}>
                  <img src = {userData.photoURL } alt = {userData.displayName} />
              </div>
              </a>
          </Link>
        </div>
        <div className={styles.logOut}>
            <a href="#" onClick={getLogOut}> Log Out</a>
        </div>
      </div>
    );
  }
 
};
export default User;
