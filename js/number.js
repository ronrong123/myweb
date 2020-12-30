let x = 10;
let y = '5';

let result = x + parseFloat(y);
// 문자가 있는 식은 둘 다 문자로 인식함 
// parseInt : 문자열을 숫자로 바꿔줌, 문자열에 들어있는게 숫자 타입이 아니면 nan이 뜸 
// parseFloat : double타입 변환(소수)
// 곱하기와 나누기는 문자열을 숫자 타입으로 변환하지않아도됨
result = x/y;
console.log(result);
function sum(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    console.log(parseInt(num1) + parseInt(num2));
}

