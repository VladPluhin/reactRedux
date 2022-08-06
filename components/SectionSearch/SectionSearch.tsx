import styles  from "../../styles/sectionSearch.module.scss";
import CardRow from "../CardRow/CardRow";
import Filter from "../Filter/Filter";
import Spinner from "../Spiner/Spiner";
import {  useAppSelectore } from "../redux/hook";

const SectionSearch = () => {
  const searchPosts = useAppSelectore((state:any)=>state.postsReducer.searchedPosts)
  const isLoading = useAppSelectore((state)=>state.postsReducer.loading);
  
  if (searchPosts!.length === 0) {
      return (
        <section className={styles.sectionSearch}>
          <div className="container">
            <h2>Let`s find posts...</h2>
            <Filter />
          </div>
        </section>
      );
    } else if( searchPosts!.length === 0 && isLoading){
        return (
          <section className={styles.sectionSearch}>
            <div className="container">
              <Spinner />
            </div>
          </section>
        );
      } else {
      return (
        <section className={styles.sectionSearch}>
          <div className="container">
            <Filter />
            <CardRow
              posts={searchPosts}
            />
          </div>
        </section>
      );
    }
};

export default SectionSearch;
