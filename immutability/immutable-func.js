// function fn(person) {
//   person = Object.assign({}, person);
//   person.name = "lee";
//   return person;
// }
// var o1 = { name: "kim" };
// var o2 = fn(o1);
// console.log(o1, o2);

// function fn(person) {
//   person.name = "lee";
// }
// var o1 = { name: "kim" };
// var o2 = Object.assign({}, o1);
// fn(o2);
// console.log(o1, o2);

var score = [1, 2, 3];
var a = score;
var b = score;
score.push(4);
// 원본을 바꾸는 방법
var score2 = score.concat(5);
// 원본은 그대로 유지한 채로 원본에서 4를 더한 새로운 배열 리턴
// 복사 과정이 있으므로 성능 측면에서는 더 나쁨. 속도가 느림.
console.log(score, a, b, score2);
