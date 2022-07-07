import React, { useContext } from "react";
import classes from "./cardRow.module.scss";
import Card from "../Card/Card";

interface CardRowProps {
  posts?: any[];
  likedData?: boolean;
}
const CardRow = ({posts, likedData}: CardRowProps) => {
 
    return (
      <div className={classes.cardRow}>
        {posts?.map((card, id) => (
          <div key={card.id +   id} className={classes.cardCol}>
           
            <Card  card={card} likedData={likedData}/>
          </div>
        ))}
      </div>
    );
};

export default CardRow;
