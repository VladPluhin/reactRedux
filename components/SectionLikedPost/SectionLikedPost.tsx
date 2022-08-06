import React from "react";
import styles  from "../../styles/sectionLikedPost.module.scss";
import CardRow from "../CardRow/CardRow";
import { useAppSelectore } from "../redux/hook";

const SectionLikedPost = () => {
  const likesPost = useAppSelectore((state:any)=>state.postsReducer.likedPosts);
  const likedRow = useAppSelectore((state:any)=>state.postsReducer.likedPosts)
  
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
          <CardRow posts= {likesPost} likedData={likedRow}/>
        </div>
      </section>
    );
  }
 
};
export default SectionLikedPost;
