import React from "react";
import styles  from "../../styles/ui.module.scss";

interface BtnPrimaryProps {
  value?: string;
  href?: string;
  type?: string;
  onHandleFunction?: () => void
}

const BtnPrimary:React.FC<BtnPrimaryProps> = ({value, href, onHandleFunction}) => {
  const btnValue= value ? value :  'Button Primary';
  const linkHref = href ? href : '';
  if(linkHref) {
    return(
      <a className={styles.BtnPrimary} href={linkHref} onClick={onHandleFunction}>{btnValue}</a>
    )
  }else {
    return(
      <button className={styles.BtnPrimary} onClick={onHandleFunction}>{btnValue}</button>
    )
  }
  
}

export default BtnPrimary;
