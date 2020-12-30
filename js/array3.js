let numbers = [34, 55, 22, 10, 100, 6, 7];

numbers.sort(function(a, b){
    // sort: 코드가 가지고있는 키값을 기준으로 정렬
    // if(a > b){
    //     return 1;
    //     // 1은 양의값 : 오름차순
    // }else{
    //     return -1;
    //     // -1은 음의값 : 내림차순
    // }
    return a - b; // 반대로하면 내림차순
});
// console.log(numbers);
let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);
let sum = 0;
numbers.forEach(function(a, b, c){
    sum += a;
    console.log(a, b, c);
    let liTag = document.createElement('li');
    liTag.innerHTML = a;
    ulTag.append(liTag);
    //  a: 배열에 들어있는 요소의 값, b: 순서(index), c:배열자체
    // forEach : 주어진 함수를 배열 요소 각각에 대해 실행합니다. 
    // 매개값을 3개 가짐, 꼭 a,b,c가 아니어도됨
});
let liTag = document.createElement('li');
liTag.innerHTML = '합계: ' + sum;
ulTag.append(liTag);