var o1 = { name: "kim", score: [1, 2] };
Object.freeze(o1);
// freeze를 한 번 하면 풀 수 없다.
// 공식적으로는 복사를 해서 풀든 하는 법 밖에는 없다.
// 객체의 프로퍼티를 얼리는 것
o1.name = "lee";
o1.city = "seoul";
Object.freeze(o1.score);
o1.score.push(3);
// 프로퍼티에 해당 객체는 레퍼런스로 저장되어 있기 때문에 가능
console.log(o1);
// o1.score.push(3);
//         ^

// TypeError: Cannot add property 2, object is not extensible
