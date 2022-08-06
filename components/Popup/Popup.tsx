import React from "react";
import styles  from "../../styles/popup.module.scss";

interface PopupProps {
  user:any;
}

const Popup = ({user}:PopupProps) => {
  return(
      <div className={styles.popup}>
        <div className={styles.infoWrapper}>
            <div className={styles.popupLogo}>
              <img src={user.profile_image.medium} alt={user.first_name} />
            </div>
            <div className={styles.popupDescription}>
                <h4 className={styles.name}>
                  {user.first_name}
                  {user.last_name ?
                    <span className={styles.lastName}>
                    {user.last_name}</span>:
                  ''}
                </h4>
            </div>
        </div>
        <div className={styles.btnWrapper}>
            <a href={user.links.self} className={styles.btnView}> View Portfolio</a>
        </div>
      </div >
  )
};

export default Popup;
