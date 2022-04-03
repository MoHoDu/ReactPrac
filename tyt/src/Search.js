import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import styles from "./Search.module.css";
import image from "./images/face.png";

function Search(props) {
  let history = useHistory();
  let i = 0;
  const [search, setSearch] = useState("");
  const contents = props.contents;
  const onChange = (event) => {
    setSearch(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    history.push({
      pathname: "/",
      state: { searchV: search },
    });
  };
  return (
    <div className={styles.box}>
      <form id="frm" onSubmit={onSubmit} method="post">
        <input
          className={styles.searchBar}
          onChange={onChange}
          name="searchValue"
          type="search"
          value={search}
          placeholder="영상을 검색해보세요"
        />
        <input className={styles.searchBtn} type="submit" value=" " />
        <ion-icon className={styles.search} name="search-outline"></ion-icon>
      </form>
      <div className={styles.resultBox}>
        <div className={styles.innerBox}>
          {contents.map((content, index) => {
            if (i > 5 || search === "") {
              return null;
            } else if (content.title.includes(search)) {
              i += 1;
              return (
                <p className={styles.result} key={index}>
                  {content.title}
                </p>
              );
            }
          })}
        </div>
      </div>
      <img className={styles.face} src={image} />
    </div>
  );
}

export default withRouter(Search);
