import React, { useState } from "react";
import styles from "./contents.module.css";

function Content({ title, text, members, tags, format, search }) {
  return (
    <div
      className={styles.contentBox}
      style={search ? {} : { display: "none" }}
    >
      <h2>{title}</h2>
      <p>{text}</p>
      <p>members : {members.map((m) => m + " ")}</p>
      <p>tags : {tags.map((t) => "#" + t + " ")}</p>
      <p>format : {format}</p>
    </div>
  );
}

function Contents({ members, tags, formats, SM, ST, SF }) {
  const [contents, setContents] = useState([
    {
      id: 0,
      title: "title1",
      text: "text1",
      members: [members[0].name, members[1].name],
      tags: [tags[0].name, tags[6].name],
      format: formats[0].name,
    },
    {
      id: 1,
      title: "title2",
      text: "text2",
      members: [members[1].name, members[2].name],
      tags: [tags[4].name, tags[5].name],
      format: formats[2].name,
    },
    {
      id: 2,
      title: "title3",
      text: "text3",
      members: [members[0].name, members[2].name],
      tags: [tags[3].name, tags[4].name],
      format: formats[1].name,
    },
  ]);
  return (
    <div className={styles.box}>
      {contents.map((cnt) => (
        <Content
          key={cnt.id}
          title={cnt.title}
          text={cnt.text}
          members={cnt.members}
          tags={cnt.tags}
          format={cnt.format}
          search={
            SM.filter((m) => !cnt.members.includes(m)).length === 0 &&
            ST.filter((t) => !cnt.tags.includes(t)).length === 0 &&
            SF.filter((f) => !cnt.format.includes(f)).length === 0
          }
        />
      ))}
    </div>
  );
}

export default Contents;
