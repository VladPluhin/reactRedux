import React, { useState } from "react";
import styles  from "../../styles/filter.module.scss";
import { CSSTransition } from "react-transition-group";
import State from "../state/state";
import BtnPrimary from  '../UI/BtnPrimary';
import {sortPost} from '../redux/action-creater'
import { useAppDispatch, useAppSelectore } from "../redux/hook";

const Filter: React.FC = () => {
  const state = new State();
  const nodeRef = React.useRef(null)
  const [showed, setShowedFilter] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const [validation, setValidation] = useState(false);
  const dispatch= useAppDispatch();

  const [filter, setFilter]= useState({
    query: '',
    page: 1,
    perPage: 10,
    color: 'black',
    orientation: 'portrait'
  })
  const getFilterValue =( key: string, value:string) => {
    const newfilterValue: any = filter;
    Object.keys(newfilterValue).map((item)=> {
        if(item === key ) {
          newfilterValue[item] = value;
        }
      }
    )
   return setFilter(newfilterValue);
  } 
  const getResetFilter=() => {

  }
  const getPosts=()=> {
    if(filter.query.length > 0) {
      dispatch(sortPost(dispatch, filter))
      setValidation(false)
    } else  {
      setValidation(true)
      setShowedFilter( true)
    }
   } 
  
  const getShowedFilter = () => {
      return showed ? setShowedFilter( false) : setShowedFilter(true);
  };
 
  
  return (
    <div className={ validation ? 'sorting error-validation' : 'sorting'}>
      <button
        className={animateButton ?' sortingclose active' : 'sortingclose ' }
        onClick={() => {getShowedFilter()}}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <CSSTransition
        nodeRef={nodeRef} 
        in={showed}
        timeout={200}
        classNames="filter"
        unmountOnExit
        onEnter={() => setAnimateButton(true)}
        onExited={() => setAnimateButton(false)}>
        <div className={styles.sortingHolder} >
          <div className={styles.container}>
            <div className={styles.scrollwrapper}>
              <h4 className={styles.title}> Search posts</h4>
              <input type="text"  className={styles.search} placeholder="lets find posts.." onChange={(event)=>{getFilterValue('query', event.target.value)}} />
              <span className="validation">Please, write topic for search</span>
              <div className={styles.orientation}>
                <h4 className={styles.title}> Posts orientation</h4>
                <select className={styles.select} onChange={(event)=>{getFilterValue('orientation', event.target.value)}}>
                    {state.filterOptions.orientation.map((item)=>{
                      return <option value={item} key={item}>{item}</option>
                  })}
                </select>
              </div>
              <div className={styles.count}>
                <h4 className={styles.title}>Count posts</h4>
                <select className={styles.select}  onChange={(event) => {getFilterValue('perPage', event.target.value)}}>
                    {state.filterOptions.postsCounter.map((item)=>{
                      return <option value={item} key={item}>{item}</option>
                  })}
                </select>
              </div>
              <div className={styles.colors}>
                <h4 className={styles.title}> Posts colors</h4>
                <select className={styles.select}  onChange={(event)=>{getFilterValue('color', event.target.value)}}>
                    {state.filterOptions.colors.map((item)=>{
                      return <option value={item} key={item}>{item}</option>
                  })}
                </select>
              </div>
              <div className={styles.btnWrapper}>
                  <BtnPrimary
                   value={"Find Posts"}
                    onHandleFunction =  {() => {
                      getShowedFilter()
                      getPosts()}}
                  type="sybmit"/>
                <BtnPrimary
                  value={"Reset filter"}
                  type="sybmit" onHandleFunction =  {() => {
                    getResetFilter()
                    }}/>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Filter;
