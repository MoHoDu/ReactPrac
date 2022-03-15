/* eslint-disable */
// eslint 안 보기 : 불필요한 코딩 습관 잡아주는 라이브러리
import React, {useState} from 'react';
import logo from './logo.svg';
// 이미지 파일을 logo라는 변수로 가져옴
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']); 
  let [글내용, 글내용변경] = useState(['2월 17일 발행', '2월 18일 발행', '2월 19일 발행'])
  let [따봉, 따봉변경] = useState(0);
  // [글제목 = 남자코트추천, 글제목변경 = 함수]
  // state는 변수 대신 쓰는 데이터 저장공간
  // 쓰려면 useState()를 이용해 만들어야함
  // 웹 앱처럼 동작하게 만들고 싶어서 사용
  // 글 제목, 내용이 변경될 때에 
  // 그로인해 state가 변경될 때 html이 자동으로 재렌더링 됨
  // 즉, 새로고침 없이 스무스하게 변경, 이동됨.
  // 따봉변경(변경한 값)

  // let [변수1, 변수2] = ['a', 'b']
  // : ES6 destructuring 문법

  function 제목바꾸기() {
    // var notNewArray = 글제목; // 이건 값 공유...reference data type
    var newArray = [...글제목]; // deep copy
    // ... : spread operator/중괄호, 대괄호 모두 제거해주세요
    // 다시 글제목을 중괄호에 담음 => 딥 카피!
    // state 변경시에는 해당 state를 복사 후 변경
    // deep copy 해야됨
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }

  function 글제목정렬() {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  }

  // let posts = '강남 고기 맛집';
  let styling = {color : 'white', fontSize : '20px'};
  // function 함수() {
  //   return 100
  // }

  return (
    <div className="App">
      <div className='black-nav'>
        {/* Html --> JSX 써야됨
        class는 JS에도 있으므로 class 지정할 때에는 className으로
         */}
         <div style={styling}>개발 Blog</div>
         {/* <div style={ {color : 'yellow', fontSize : '30px'} }>개발 Blog</div> */}
         {/* <div style="font-size : 10px">개발 Blog</div> 
         스타일 적용시에는 object로*/}
      </div>
      {/* <h4> {함수()} </h4> */}
      {/* <h4 className={posts}> {posts} </h4> */}
      {/* <img src={logo}></img> */}
      <span onClick={ 글제목정렬 }>가나다 순 정렬</span>
      <div className='list'>
         <h3> {글제목[0]} <span onClick={ ()=>{따봉변경(따봉 + 1)} }>👍🏻</span> {따봉} </h3>
         <p> {글내용[0]} </p>
         <span onClick={ 제목바꾸기 }>⚤ 성별 변경</span>
         <hr/>
      </div>
      <div className='list'>
         <h3> {글제목[1]} </h3>
         <p> {글내용[1]} </p>
         <hr/>
      </div>
      <div className='list'>
         <h3> {글제목[2]} </h3>
         <p> {글내용[2]} </p>
         <hr/>
      </div>

         <Modal />
         {/* div 너무 많아 => 리액트의 comoponent 문법 */}

    </div> // return <div></div>는 크게 한 개만 가능
  );
}

function Modal() {
  // Component 이름은 대문자
  // 반복출현하는 HTML 덩어리들
  // 자주 변경되는 HTML UI들
  // 다른 페이지 만들때에도 컴포넌트로 만들게 됨

  // 너무 많이 만들면 단점
  // state쓸 때에 복잡해질 수 있음 => props 문법 사용
  return (
    // <>
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    // </> // 프레그먼트라는 묶기 문법(의미없는 div 쓰기 싫으면)
  )
  // return() 속에 div는 크게 하나만
}

export default App;
// 리액트를 쓰는 이유 : 실시간으로 확인
// 2. 데이터 바인딩이 쉬움 {변수명} <-- react, angular, vue
// {변수명 or 함수() or 이미지 변수명}