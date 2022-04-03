import styles from "./Contents.module.css";

function Content(props) {
  const title = props.info.title;
  const idxTeam = props.info.teamIndex;
  const ssum = props.info.ssum;
  const category = props.category;
  return (
    <div className={styles.content}>
      <p className={styles.cntTeam}>{category.team[idxTeam].name}</p>
      <img src={ssum} />
      <h2 className={styles.cntTitle}>{title}</h2>
    </div>
  );
}

function Platform(props) {
  const contents = props.contents;
  const idx = Number(props.idxCtg);
  console.log(idx);
  return (
    <div className={styles.platform}>
      <span className={styles.platTitle}>{props.title}</span>
      <span />
      <div className={styles.contentBox}>
        {contents.map((content) => {
          return content.platformIndex === props.idx &&
            (content.teamIndex === idx || idx === -1) ? (
            <Content
              key={content.idx}
              info={content}
              category={props.category}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}

function Contents(props) {
  const category = props.category;
  const contents = props.contents;
  const idxCtg = props.indexOfCategory;
  const idxCnt = props.indexOfContents;
  return (
    <div className={styles.box}>
      {category.platforms.map((platform, index) => (
        <Platform
          key={index}
          idx={index}
          title={platform}
          contents={contents}
          category={category}
          idxCtg={idxCtg}
          idxCnt={idxCnt}
        />
      ))}
    </div>
  );
}

export default Contents;
