
// 5숫자 입력하고 최대값 구하기

// let numbers = window.prompt("숫자 5개를 입력하세요.").split(" ");
// split는 공백?을 어떤식으로 처리할지 정해주는것 
let numAry = [];
for(let i=0;i<5;i++){
    let name1 = window.prompt('숫자를 입력하세요');
    numAry[i] = parseInt(name1);
}
maxSum(numAry);

function maxSum(a){

    let n1 = parseInt(a);    
    let max = numAry[0];

    for(let i=0;i<numAry.length;i++){
            if(max < numAry[i]){
                max = numAry[i];
            }
    }
    document.write(max);
}