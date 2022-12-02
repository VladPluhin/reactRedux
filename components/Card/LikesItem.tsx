import React from "react";
import styles  from "../../styles/card.module.scss";
import { useAppSelectore } from "../redux/hook";
import {
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion
} from "firebase/firestore";

import  {db}  from "../state/state";

interface Card {
  description: string;
  created_at: string;  
  name: string;
  id: string;
  user: {
    username: string
  }
 
  urls: {
    regular: string
  }
}
interface CardProp {
  card: Card;
}

const LikesItem:React.FC<CardProp> = (card) => {
  const likedData = useAppSelectore((state:any)=>state.postsReducer.likedRow)
  const userData = useAppSelectore((state)=>state.postsReducer.userData);
  const isLogin = useAppSelectore((state)=>state.postsReducer.login)
  const cardCreater=(name:any, value:any[] ) =>{
    var obj:any = {};
    obj[name] = value;
    return obj;
  }
  const getLike = async(card:any) =>{
    let cardCollectionRef  =  doc(db,'users', userData.displayName)
    const cardChosen= cardCreater(card.card.id, card)
    
    await updateDoc(cardCollectionRef,{
      likedPosts: arrayUnion(cardChosen)})
  };
  const deletedPost = async (card:any)=> {
    const userDoc = doc(db, "users", card);
    await deleteDoc(userDoc);
  };

  if(isLogin) {
    return( <button className={styles.btnLike} onClick={() =>  getLike( card)} >&#10084;</button> )
  } else if(likedData && isLogin) {
    return( <button className={styles.btnDelet} onClick={() => deletedPost( card)}>&#9747;</button>)
  } else{
    return(<div></div>)
}
};

export default LikesItem;
