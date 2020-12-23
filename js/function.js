function sum(num1, num2){
    let result = num1 + num2;
    console.log(result);
    return result;
}
// function이라는 함수로 sum이라는 변수를 만들겠다.
let result = sum('10', '20');
sum(10, 20);
document.write('<h1>' + result + '</h1>');

let myfunc = function(a, b) {
    let result = a*b;
    console.log('반갑습니다.');
    return result;
}
result = myfunc(4,6);

let yourfunc = myfunc;
result = yourfunc(5,7);
// myfunc()안에 들어있는 function정의문을 실행해주세요
// console.log(myfunc());
console.log(result);
//  naN(not a number)
let theotherfunc = function(n1, n2){
    return n1/n2;
}
function otherfunc(a, b, funcdef){
    let result = funcdef(a,b);
    console.log('result: ' + result);
}
//funcdef에 function을 매개값으로 넣을수있음
// function이 매개값으로도 쓰여질수있음
otherfunc(20, 30, myfunc);
otherfunc(20, 30, theotherfunc);

