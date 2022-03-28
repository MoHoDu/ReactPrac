// eslint - disable;
// eslint 안 보기 : 불필요한 코딩 습관 잡아주는 라이브러리
import React, { useState } from "react";
import styles from "./header.module.css";
import icon from "./logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={icon} alt="logo" />
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input className={styles.searchBar} type="search" name="srch" />
        <input className={styles.submitBtn} type="submit" value="검색" />
      </form>
    </div>
  );
}

export default Header;
