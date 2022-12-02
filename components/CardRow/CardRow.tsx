import React, { useContext } from "react";
import styles from "../../styles/cardRow.module.scss";
import Card from "../Card/Card";
import Masonry from 'react-masonry-css';

interface CardRowProps {
  posts?: any[];

}
const CardRow = ({posts}: CardRowProps) => {
  return (
      <div className={styles.cardRow}>
          <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {posts?.map((card, id) => (
                  <div key={card.id +   id}>
                      <Card  card={card} />
                  </div>
              ))}
         </Masonry>
      </div>
    );
};

export default CardRow;
