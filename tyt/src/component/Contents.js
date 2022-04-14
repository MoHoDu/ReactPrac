import styles from "./Contents.module.css";
import { useRef, useEffect, useState } from "react";

function Content(props) {
  const title = props.info.title;
  const idxTeam = props.info.teamIndex;
  const ssum = props.info.ssum;
  const category = props.category;
  const num = props.num;

  const moveContent = (event) => {
    if (window.innerWidth <= 767) return;
    event.target.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <div
      onMouseOver={moveContent}
      className={
        num === 0 ? `${styles.content} ${styles.selected}` : `${styles.content}`
      }
      id={`${props.index}`}
    >
      <p className={styles.cntTeam}>{category.team[idxTeam].name}</p>
      <img src={ssum} />
      <h2 className={styles.cntTitle}>{title}</h2>
    </div>
  );
}

function Platform(props) {
  const srch = props.srch;
  const contents = props.contents;
  const idx = Number(props.idxCtg);
  const rendered = props.rendered;
  const setRendered = props.setRendered;
  const [isRendered, setIsRendered] = useState(false);
  let index = 0;
  let length = -1;

  const refBox = useRef();
  const refPlat = useRef();

  const moveLeft = () => {
    if (length <= 0) {
      return;
    }
    const lstSltIdx = `${props.idx}${index.toString()}`;
    const lastSelected = document.getElementById(lstSltIdx);
    if (index === 0) {
      index = length;
    } else {
      index -= 1;
    }
    const sltIdx = `${props.idx}${index.toString()}`;
    const select = document.getElementById(sltIdx);
    select.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    lastSelected.classList.toggle(styles.selected);
    select.classList.toggle(styles.selected);
  };

  const moveRight = () => {
    if (length <= 0) {
      return;
    }
    const lstSltIdx = `${props.idx}${index.toString()}`;
    const lastSelected = document.getElementById(lstSltIdx);
    if (index === length) {
      index = 0;
    } else {
      index += 1;
    }
    const sltIdx = `${props.idx}${index.toString()}`;
    const select = document.getElementById(sltIdx);
    select.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    lastSelected.classList.toggle(styles.selected);
    select.classList.toggle(styles.selected);
  };

  const setZero = () => {
    length = -1;
    setRendered(true);
  };

  useEffect(() => {
    setZero();
  }, []);

  return (
    <div className={styles.outBox} ref={refPlat}>
      <div className={styles.platform}>
        <span className={styles.platTitle}>{props.title}</span>
        {rendered === true ? (
          <div className={`${styles.contentBox}`} ref={refBox}>
            {contents.map((content, index) => {
              if (
                content.platformIndex === props.idx &&
                (content.teamIndex === idx || idx === -1)
              ) {
                if (srch === "" || srch === undefined) {
                  length += 1;
                  return (
                    <Content
                      index={`${props.idx}${length}`}
                      num={length}
                      key={content.idx}
                      info={content}
                      category={props.category}
                    />
                  );
                } else {
                  if (content.title.includes(srch)) {
                    length += 1;
                    return (
                      <Content
                        index={`${props.idx}${length}`}
                        num={length}
                        key={content.idx}
                        info={content}
                        category={props.category}
                      />
                    );
                  } else {
                    if (index === contents.length - 1 && length < 0) {
                      return (
                        <span key={content.idx} className={styles.noResult}>
                          검색 결과가 없습니다...
                        </span>
                      );
                    } else return null;
                  }
                }
              } else {
                if (index === contents.length - 1 && length < 0) {
                  return (
                    <span key={content.idx} className={styles.noResult}>
                      검색 결과가 없습니다...
                    </span>
                  );
                } else return null;
              }
            })}
          </div>
        ) : null}
      </div>
      {length > 0 ? (
        <>
          <button className={styles.left} onClick={moveLeft}>
            &lt;
          </button>
          <button className={styles.right} onClick={moveRight}>
            &gt;
          </button>
        </>
      ) : null}
    </div>
  );
}

function Contents(props) {
  const srch = props.srch;
  const category = props.category;
  const contents = props.contents;
  const idxCtg = props.indexOfCategory;
  const idxCnt = props.indexOfContents;
  const rendered = props.rendered;
  const setRendered = props.setRendered;

  return (
    <div className={styles.box}>
      {category.platforms.map((platform, index) => (
        <Platform
          key={index}
          srch={srch}
          idx={index}
          title={platform}
          contents={contents}
          category={category}
          idxCtg={idxCtg}
          idxCnt={idxCnt}
          rendered={rendered}
          setRendered={setRendered}
        />
      ))}
    </div>
  );
}

export default Contents;
