import React, { useState } from "react";
import Contents from "./contents";
import styles from "./category.module.css";

function Members({ mb, SM, SSM }) {
  const members = mb;
  return (
    <form
      className={styles.members}
      method="post"
      action=""
      onClick={(event) => {
        const oriMem = [...SM];
        if (event.target.checked) {
          oriMem.push(event.target.value);
          SSM(oriMem);
        } else if (event.target.value !== undefined) {
          const newList = oriMem.filter(
            (element) => element !== event.target.value
          );
          SSM(newList);
        }
      }}
    >
      members :
      {members.map((member) => (
        <label key={member.id}>
          <input type="checkbox" name="member" value={member.name} />
          {member.name}
        </label>
      ))}
    </form>
  );
}

function Tags({ tg, ST, SST }) {
  const tags = tg;
  return (
    <form
      className={styles.tags}
      method="post"
      action=""
      onClick={(event) => {
        const oriTag = [...ST];
        if (event.target.checked) {
          oriTag.push(event.target.value);
          SST(oriTag);
        } else if (event.target.value !== undefined) {
          const newList = oriTag.filter(
            (element) => element !== event.target.value
          );
          SST(newList);
        }
      }}
    >
      tags :
      {tags.map((tag) => (
        <label key={tag.id}>
          <input type="checkbox" name="tag" value={tag.name} />
          {tag.name}
        </label>
      ))}
    </form>
  );
}

function Formats({ fmt, SF, SSF }) {
  const formats = fmt;
  return (
    <form
      className={styles.formats}
      method="post"
      action=""
      onClick={(event) => {
        const oriFmt = [...SF];
        if (event.target.checked) {
          oriFmt.push(event.target.value);
          SSF(oriFmt);
        } else if (event.target.value !== undefined) {
          const newList = oriFmt.filter(
            (element) => element !== event.target.value
          );
          SSF(newList);
        }
      }}
    >
      formats :
      {formats.map((fmt) => (
        <label key={fmt.id}>
          <input type="checkbox" name="format" value={fmt.name} />
          {fmt.name}
        </label>
      ))}
    </form>
  );
}

function Category({ members, tags, formats, setMbr, setTgs, setFmt }) {
  const [selectedM, setSM] = useState([]);
  const [selectedT, setST] = useState([]);
  const [selectedF, setSF] = useState([]);
  return (
    <>
      <div className={styles.box}>
        <form className={styles.order} method="post">
          <select>
            <option>최신순</option>
            <option>오래된순</option>
            <option>인기순</option>
          </select>
        </form>
        <Members mb={members} SM={selectedM} SSM={setSM} setMembers={setMbr} />
        <Tags tg={tags} ST={selectedT} SST={setST} setTags={setTgs} />
        <Formats fmt={formats} SF={selectedF} SSF={setSF} setFormats={setFmt} />
      </div>
      <Contents
        members={members}
        tags={tags}
        formats={formats}
        setMbr={setMbr}
        SM={selectedM}
        setTgs={setTgs}
        ST={selectedT}
        setFmt={setFmt}
        SF={selectedF}
      />
    </>
  );
}

export default Category;
