import React, { useEffect, createRef , useState} from "react";
import classes from "./sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import { useObserver } from "../hooks/useObserver";
// import State from "../state/state";

import { useSelector , useDispatch} from "react-redux";
import {fetchPost} from '../redux/action-creater';

const SectionMain:React.FC = () => {
	
		const lastElement =  React.createRef<HTMLDivElement>();
    const [page, setPageRender] = useState(1);
    const [posts, setPosts] = useState([]);
    const dispatch= useDispatch();
    const data = useSelector((state:any)=>state.postReducer.posts)

    let observCallback= ()=> {
      setPageRender(page + 1)
    } 
    
    function getPosts(posts:Array<any>, data:any) {
      let newArr: any = []
      console.log(posts)
			if (data) {
					newArr = [...posts, ...data];
          return setPosts(newArr);
				}
		}
    useEffect(() => {
			dispatch(fetchPost(dispatch, page));
    }, [page]);


    useObserver(lastElement, data, observCallback);

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
            data={posts}
            likesRow={false}
          />
          <div ref={lastElement} style={{ height: 100 }}></div>
        </div>
      </section>
    );
  }
};

export default SectionMain;
