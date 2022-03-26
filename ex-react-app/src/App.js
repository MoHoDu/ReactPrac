import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";
// 1 컴포넌트 당 1개의 .js파일을 가질 수 있어 모듈화 가능
// .module.css의 각 css 파일을 위의 import로 가져와서 사용
// 여기서의 스타일은 className혹은 id로 import한 스타일 객체의
// 프로퍼티를 전달하여 적용시키는 것
// 즉, 어떤 정해둔 클래스나 id에 적용할 스타일이 아니라 특정 jsx element
// 에 적용할 스타일로 생각 가능하다
// 컴파일 과정 중에 리엑트가 랜덤한 이름을 생성시키기 때문에 굳이 .css
// 파일의 클래스나 id명을 외울 필요 없다. 다른 스타일시트에서 이름이 곂쳐도
// 상관 없다는 것
import { useEffect } from "react";
// 인자 1. Argument : 한번만 실행하고 싶은 코드
// 2. Dependencies : [keyword] 처음 그리고, keyword가 바뀔 때에만 실행
// -> 지켜보는 것들

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    console.log("I run only once.");
    // 첫 번째로 렌더링 될 때만 실행하고 싶은데...
    // 렌더링될 때마다 계속 실행됨.. 해당 컴포넌트의 모든 부분이-> useEffects
  }, []);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
    // 한번은 아니고 특정한 때에만 실행되게 하고 싶은데...
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' & 'keyword' changes.");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      {/* 갑자기 버튼의 스타일이 안 먹는다면...
      해당 현상들 캐싱때문에 그렇습니다.
      start된 것을 멈추고 다시 시작 후 강력새로고침 해보세요! 
      FE 작업할때 아주 흔하게 겪는 현상입니다 :) */}
      <Button text={"Continue"} />
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
