import { useState } from "react";
import Category from "./component/Category";
import Contents from "./component/Contents";
import Header from "./component/Header";
import styles from "./Main.module.css";

function Main(props) {
  const category = props.category;
  const setCtg = props.setCategory;
  const contents = props.contents;
  const setCnt = props.setContents;
  const [idxCtg, setIdxCtg] = useState(-1);
  const [idxCnt, setIdxCnt] = useState(-1);
  return (
    <div className={styles.box}>
      {props.loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <Header />
          <Category category={category} idxCtg={idxCtg} setIdxCtg={setIdxCtg} />
          <Contents
            category={category}
            contents={contents}
            indexOfCategory={idxCtg}
            indexOfContents={idxCnt}
          />
        </>
      )}
    </div>
  );
}

export default Main;
