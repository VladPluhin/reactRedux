import React, { useContext } from "react";
import classes from "./cardRow.module.scss";
import Card from "../Card/Card";
import Masonry from 'react-masonry-css';

interface CardRowProps {
  posts?: any[];
  likedData?: boolean;
}
const CardRow = ({posts, likedData}: CardRowProps) => {
 
    return (
      <div className={classes.cardRow}>
          <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {posts?.map((card, id) => (
                  <div key={card.id +   id}>
                      <Card  card={card} likedData={likedData}/>
                  </div>
              ))}
         </Masonry>
      </div>
    );
};

export default CardRow;
