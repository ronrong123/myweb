
// 5숫자 입력하고 최대값 구하기

let numbers = window.prompt("숫자 5개를 입력하세요.").split(" ");

maxSum(numbers);

function maxSum(a){

    let n1 = parseInt(a);    
    let big = numbers[0];

    for(let i=0;i<numbers.length;i++){
            if(big < numbers[i]){
                big = numbers[i];
            }
    }
    document.write(big);


}