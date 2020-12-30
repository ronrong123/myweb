// reduce
let students = [];
for(let i=1;i<=5;i++){
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i%2==0 ? 'M':'F';
    std.score = 80+i;
    students.push(std);
}


let result = students.every(function(a,b,c){
    return a.score > 81;
});
// true false를 리턴해줌 return조건에 하나라도 틀리면 false
console.log(result);
result = students.some(function(a,b,c){
    return a.score > 81;
});
// some은 하나라도 만족하면 true
console.log(result);
result = students.map(function(a){
   return a.sname
}).indexOf('Hong1');
console.log(result);
// 요소들 중에 찾고싶은 것을 적으면 몇번째 위치인지알려줌







// console.log(students);
// let result = students.map(function(a,b,c){
//     return a.score;
// }).reduce(function(a,b,c,d){
//     return a += b;
// });
//},0);을 적으면 previousvalue가 0부터 시작됨(옵션) 조건에 만족하는 리턴값을 그다음 previousvalue값으로 가져옴 
// reduce : 요소들을 하나씩 반복하는데 리턴값이 다음에 a로 들어감 전단계에 어떤값이 리턴되냐에따라 1째와 두번째가 결정됨
// 리턴해 주는값이 다음 차수의 초기값
