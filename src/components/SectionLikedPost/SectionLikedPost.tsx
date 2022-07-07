import React from "react";
import classes from "./sectionLikedPost.module.scss";
import CardRow from "../CardRow/CardRow";
import { useSelector } from "react-redux";
const SectionLikedPost = () => {
  const likesPost = useSelector((state:any)=>state.postReducer.likedPosts);
  const likedRow = useSelector((state:any)=>state.postReducer.likedPosts)
  
  if (likesPost.length === 0) {
    return (
      <section className={classes.sectionLiked}>
        <div className="container">
           <h1>No posts chosen...</h1>
        </div>
    </section>
    )
  }else  {
   return (
      <section className={classes.sectionLiked}>
        <div className="container">
          <CardRow posts= {likesPost} likedData={likedRow}/>
        </div>
      </section>
    );
  }
 
};
export default SectionLikedPost;
