import classes from "./sectionSearch.module.scss";
import CardRow from "../CardRow/CardRow";
import Filter from "../Filter/Filter";

import {  useAppSelectore } from "../redux/hook";
const SectionSearch = () => {
  const searchPosts = useAppSelectore((state:any)=>state.postsReducer.searchedPosts)

  if (searchPosts!.length === 0) {
      return (
        <section className={classes.sectionSearch}>
          <div className="container">
            <h2>Let`s find posts...</h2>
            <Filter />
          </div>
        </section>
      );
    } else{
      return (
        <section className={classes.sectionSearch}>
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
