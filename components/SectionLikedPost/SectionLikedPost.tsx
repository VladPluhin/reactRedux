import React, {useEffect, useState} from "react";
import styles  from "../../styles/sectionLikedPost.module.scss";
import CardRow from "../CardRow/CardRow";
import { useAppSelectore } from "../redux/hook";
import {
  collection,
  getDocs,
 
} from "firebase/firestore";
import  {db}  from "../state/state";


const SectionLikedPost = () => {
  let userData:any = useAppSelectore((state) => state.postsReducer.userData);
  const [likesPost, setLikesPost] = useState([]);
  const cardCollectionRef  = collection(db, userData.displayName);
  const getUsers = async () => {
    const data:any = await getDocs(cardCollectionRef);
     setLikesPost(data.docs.map((doc:any) => ({ ...doc.data() })));

  };
  useEffect(() => {
    getUsers();
  }, [])
  console.log(likesPost)

  if (likesPost.length === 0) {
    return (
      <section className={styles.sectionLiked}>
        <div className="container">
           <h1>No posts chosen...</h1>
        </div>
    </section>
    )
  }else  {
   return (
      <section className={styles.sectionLiked}>
        <div className="container">
          {/* <CardRow posts= {likesPost} /> */}
        </div>
      </section>
    );
  }
 
};
export default SectionLikedPost;
