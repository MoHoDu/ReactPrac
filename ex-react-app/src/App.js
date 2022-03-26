import Button from "./Button";
import styles from "./App.module.css";
// 1 컴포넌트 당 1개의 .js파일을 가질 수 있어 모듈화 가능
// .module.css의 각 css 파일을 위의 import로 가져와서 사용
// 여기서의 스타일은 className혹은 id로 import한 스타일 객체의
// 프로퍼티를 전달하여 적용시키는 것
// 즉, 어떤 정해둔 클래스나 id에 적용할 스타일이 아니라 특정 jsx element
// 에 적용할 스타일로 생각 가능하다
// 컴파일 과정 중에 리엑트가 랜덤한 이름을 생성시키기 때문에 굳이 .css
// 파일의 클래스나 id명을 외울 필요 없다.

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      {/* 갑자기 버튼의 스타일이 안 먹는다면...
      해당 현상들 캐싱때문에 그렇습니다.
      start된 것을 멈추고 다시 시작 후 강력새로고침 해보세요! 
      FE 작업할때 아주 흔하게 겪는 현상입니다 :) */}
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
