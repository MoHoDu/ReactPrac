// 변수의 이름을 불변하게 만드는 방법
var v = 1;
// 1억줄 ~
v = 2;
console.log("v :", v);

const c = 1;
// 1억줄 ~
c = 2;
console.log("c :", c);
// TypeError: Assignment to constant variable.
// 상수 변수에 어떤 값을 대입하려고 시도했기 때문에 발생하는 에러
// 상수 : 항상 이름이 가리키는 값이 변하지 않는 변수
