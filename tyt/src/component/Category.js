import styles from "./Category.module.css";
import { useState } from "react";

function Category({ idxCtg, setIdxCtg }) {
  const onSelect = (event) => {
    setIdxCtg(event.target.value);
  };
  return (
    <div className={styles.box}>
      <select value={idxCtg} onChange={onSelect}>
        <option value={-1}>모두 보기</option>
        <option value={0}>Team01</option>
        <option value={1}>Team02</option>
        <option value={2}>Team03</option>
      </select>
    </div>
  );
}

export default Category;
