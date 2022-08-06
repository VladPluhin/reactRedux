import React, { useEffect , useState} from "react";
import styles  from "../../styles/sectionMain.module.scss";
import CardRow from "../CardRow/CardRow";
import Spinner from "../Spiner/Spiner";
import { useObserver } from "../hooks/useObserver";
import {fetchPost} from '../redux/action-creater';
import { useAppDispatch, useAppSelectore } from "../redux/hook";

const SectionMain:React.FC = () => {
		const lastElement =  React.createRef<HTMLDivElement>();
    const [page, setPageRender] = useState(1);
    const [posts, setPosts] = useState([]);
    const dispatch= useAppDispatch();
    const data = useAppSelectore((state)=>state.postsReducer.posts);
    const isLoading = useAppSelectore((state)=>state.postsReducer.loading)
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

  if (isLoading) {
    return (
      <section className={styles.sectionMain}>
        <div className="container">
          <Spinner />
          <div ref={lastElement} style={{ height: 1 }}></div>
        </div>
      </section>
    );
  } else{
    return (
      <section className={styles.sectionMain}>
        <div className="container">
          <CardRow
            posts={posts}/>
          <div ref={lastElement} style={{ height: 100 }}></div>
        </div>
      </section>
    );
  }
};

export default SectionMain;
