import React, { useEffect, createRef , useState} from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import { useObserver } from "../hooks/useObserver";

import { useSelector , useDispatch} from "react-redux";
import {fetchPost} from '../redux/action-creater';

const SectionMain:React.FC = () => {
		const lastElement =  React.createRef<HTMLDivElement>();
    const [page, setPageRender] = useState(1);
    const [posts, setPosts] = useState([]);
    const dispatch= useDispatch();
    const data = useSelector((state:any)=>state.postReducer.posts)

    function observCallback(){
      setPageRender(page + 1)
    } 
    
    function getPosts(posts:Array<any>, data:any) {
      let newArr: any = []
			if (data && posts.length<=0) {
        newArr = [...data];
        return setPosts(newArr);
      }
      else {
					newArr = [...posts, ...data];
          return setPosts(newArr);
				}
		}
   
    useObserver(lastElement, data, observCallback);
    useEffect(() => {
			dispatch(fetchPost(dispatch, page));
    }, [page]);
    
		useEffect(() => {
			getPosts(posts, data)
		}, [data]);

  
   
  if (posts.length === 0) {
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <Spinner />
          <div ref={lastElement} style={{ height: 1 }}></div>
        </div>
      </section>
    );
  } else{
    return (
      <section className={classes.sectionMain}>
        <div className="container">
          <CardRow
            posts={posts}
          />
          <div ref={lastElement} style={{ height: 100 }}></div>
        </div>
      </section>
    );
  }
};

export default SectionMain;
