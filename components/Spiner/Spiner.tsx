import React from "react";
import styles  from "../../styles/spiner.module.scss";

const Spinner = () => {
    return (
        <div className={styles.spinnerWrapper}>
            <div className={styles.loadingioSpinner}>
                <div className={styles.spiner}>
                    <div></div>
                    <div className={styles.round2}></div>
                    <span>Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner;
