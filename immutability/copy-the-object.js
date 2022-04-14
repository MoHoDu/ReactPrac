var o1 = { name: "kim" };
var o2 = Object.assign({}, o1);
var o3 = { ...o1 };
// target을 뒤의 소스와 합쳐서 리턴
o2.name = "lee";
console.log(o1, o2, o1 === o2);
console.log(o1, o3, o1 === o3);
