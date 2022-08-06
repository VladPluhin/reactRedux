import React ,{useEffect} from "react";
import styles  from "../../styles/nav.module.scss";
import Link from 'next/link'


const Nav = () => {
  let start:any;
  const anchorsWrapper = React.useRef(null);
  const getStickyAnchors = function ( anchorsWrapper:any) {
    if(anchorsWrapper.current) {
      let viewTopPoint = Number(window.scrollY) - Number(anchorsWrapper.current.offsetHeight);
      let elemBottom = anchorsWrapper.current.offsetTop + anchorsWrapper.current.offsetHeight;
      if(anchorsWrapper.current.offsetHeight!==null) {
        if (elemBottom < viewTopPoint) {
          anchorsWrapper.current.classList.add("is-sticky");
        }
        else if (elemBottom > viewTopPoint) {
          anchorsWrapper.current.classList.remove("is-sticky");
        }
      }
    }
  };
 
  useEffect(() => {
    window.addEventListener("scroll", function () {
      getStickyAnchors(anchorsWrapper);
      clearTimeout(start);
      start = setTimeout(() => {
          getStickyAnchors( anchorsWrapper);
      }, 100);
    });
  },[]);
 
  return (
     <header className='header'ref={anchorsWrapper}>
      <nav>
        <div className={styles.container} >
          <div className={styles.logo}>
            <Link href="/" ><a>PictureApp</a></Link>
          </div>
          <ul className={styles.navLists} >
              <li>
                <Link  href="/liked-posts">  
                  <a>Liked Posts<span className ={styles.iconsheart}> &#10084; </span></a>
                </Link>
              </li>
              <li>
                <Link  href="/search"> 
                  <a>Lets Find  <span className={styles.iconSearch}> &#9906;</span></a>
                </Link>
              </li>
              <li>
                <Link  href="/about"> 
                    <a>about</a>
                </Link>
              </li>
             
          </ul>
          <div className={styles.account}>
            <Link href="/" ><a>account</a></Link>
          </div>
        </div >
      </nav>
   </header>
  );
};

export default Nav;
