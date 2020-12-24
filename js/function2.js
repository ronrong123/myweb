// function nameFunc(){
// window 오브젝트가 가지고있는 prompt 매소드 
// let name1 = document.getElementById('name').value;
// console.log('입력한 이름은: ' + name1);
// }
// function은 이벤트를 줄때 호출함
// nameFunc();


// 입력받은 두수 사이의 합 : 15,25를 적으면 15~25사이의 합
let name1 = window.prompt('숫자를 입력하세요.');
let name2 = window.prompt('숫자를 입력하세요');

diffSum(name1, name2); 

function diffSum(a, b){
    let sum = 0;
    let big, small;

    let n1 = parseInt(a);
    let n2 = parseInt(b);
    if(n1>n2){
        big = n1;
        small = n2;
    }else if(n2>n1){
        big = n2;
        small = n1;
    }else{
        sum = n1;
    }
    for(let i=small;i<=big;i++){
        sum += i;
    }
    document.write(sum);
}


// checkGrade(name1); 
// // 90:A, 80:B, 70:C 그외에는 D 

// function checkGrade(a){
//     if(a > 100){
//         document.write("잘못된점수입니다.")
//     }else if(a >= 90){
//         document.write("A입니다")
//     }else if(a >=80){
//         document.write("B입니다.")
//     }else if(a >=70){
//         document.write("C입니다.")
//     }else{
//         document.write("D입니다.")
//     }
// }

// sum(name1, name2);

// function sum(a, b){
//     let n1 = parseInt(a); //'30'식으로 '' 안에 들어간 숫자를 실제 숫자값으로 변경시켜주는것
//     let n2 = parseInt(b);
//     console.log(n1 + n2);
// }