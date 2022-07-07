import React, { useContext, useState } from "react";
import classes from "./card.module.scss";
import { AppContext } from "../context/context";
import Popup from "../Popup/Popup";
import { CSSTransition } from 'react-transition-group';
import { useSelector , useDispatch} from "react-redux";
import {  ACTIONS_LIST} from '../redux/postReducer'
interface Card{
  
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
  likedData? : boolean

}

const Card:React.FC<CardProp>= ({card, likedData}) => {
  const [hovered, setHovered] = useState(false);
  const hoverOff = React.createRef<HTMLInputElement>();
  const hoverOn = React.createRef<HTMLInputElement>();
  const dispatch= useDispatch();
  const likedRow = useSelector((state:any)=>state.postReducer.likedRow)
  const gethoverOff=()=> {
    setHovered(false)
    return  ()=> {hoverOff.current!.removeEventListener("mouseleave", gethoverOff)}
  }
 
  const gethoverOn=()=> {
    setHovered(true)
    return  ()=> {hoverOn.current!.removeEventListener("mouseenter", gethoverOn)};
  }

function getLike(card:any)    {
  dispatch({type: ACTIONS_LIST.LIKED_POST,  payload:[card]}); 
  };
  
  function deletedPost(card:any)  {
    dispatch({type: ACTIONS_LIST.REMOVE_POST,  payload:[card.id]}); 
  };
  return (
    <div className={classes.card}  ref={hoverOff} onMouseLeave={gethoverOff}>
      <div className={classes.cardImg}>
        <img className="img" src={card.urls?.regular} alt={card.description? card.description: 'image descriptiom'}/>
      </div>
      <div className={classes.cardBody}>
        {likedData?
          <button className={classes.btnDelet} onClick={() => deletedPost( card)}>
            &#9747;
          </button>
         : <button className={classes.btnLike} onClick={() =>  getLike( card)} >
            &#10084;
          </button>
        }
        <time className={classes.date} dateTime={ card.created_at ?  card.created_at.slice(0, 10) : ""}>
          { card.created_at ?  card.created_at.slice(0, 10) : ""}
        </time>
        <div className={classes.description}>
          { card.description ? <p> { card.description} </p> : " "}
        </div>
        <span className={classes.title}  ref={ hoverOn} onMouseOver={gethoverOn}>
          <span>Author:</span>
          {card.name ? card.name : card.user.username}
        </span>
      </div>
      <CSSTransition
        in={hovered}
        timeout={300}
        classNames="popup"
        unmountOnExit>
          <Popup user= { card.user}/>
      </CSSTransition>

    </div>
  );
};

export default Card;
