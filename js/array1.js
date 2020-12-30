let fruits = ['Apple', 'Banana'];
fruits[2] = 'Melon';
fruits[fruits.length] = 'Orange';
// 배열이름.length를 하면 번호를 지정하지않아도 다음 배열에 추가 
fruits[fruits.length] = 'Mango';
// fruits[2] ='new Melon';
delete fruits[2];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
fruits = [];
fruits.push('Apple');
fruits.push('Banana');
fruits.unshift('Orange');
fruits.unshift('Melon');
// push : 마지막 부분에 값을 추가
//  unshitf : 앞부분에 값을 추가
// fruits.pop();
// fruits.shift();
// shift : 제일 앞부분에있는 요소부터 하나씩 빼옴
// pop : 제일 뒤에있는 요소부터 하나씩 빼오는것

let fruit = fruits.splice(1, 0, 'New Orange', 'New Apple');
// splice : delete와 다르게 완전 없애버림(delete는 지워지지만 자리는 남아있음), 변수를 선언해 담을수도있음
// 삭제도 할수있지만 추가도 가능함 
// (위치, 몇개를 잘라낼지, 추가할요소)
console.log(fruit);
for(fruit of fruits){
        console.log(fruit);
    }

fruits = ['Apple', 'Banana', 'Mango'];
fruit = {
    name: 'Apple',
    price: 2000,
    weight: 50
}
fruit['name']; // name based (fruit.name);
fruits[0]; // index based
// 배열은 인덱스 기준으로 가져오고 오브젝트는 오브젝트로

