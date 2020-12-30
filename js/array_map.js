let person = new Object();
// let person = {}랑 같음 오브젝트를 만드는거임
person.name = 'Hong';
person.age = 10;

person = {
    name: 'Hwang',
    age: 15
}
console.log(person);

function Person(name, age){
    this.name = name;
    this.age = age;
}
person = new Person('park', 20);
console.log(person);

let persons =[];

persons.push(person);
persons.push(new Person('Choi', 21));
persons.push(new Person('Hong', 22));
persons.push(new Person('Hwang', 23));
// push는 하나씩 담아주는것

let names = persons.map(function(a,b,c){
    let member = {};
    member.id = a.name + '-' + b;
    member.age = a.age;
    return member;
});
// filter : 필터링 걸러내서 리턴해줌
let over21 = persons.filter(function(a,b,c){
    return a.age > 21;
}).map(function(a,b,c){
    return a.name;
});

console.log(over21);
// map: 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
// map은 리턴값이 있음, forEach는 반환되지않음, 맴핑느낌
names.forEach(function(a,b,c){
    document.write('<h1>' + a.id + '/' + a.age +'</h1>')
});
// console.log(names);
//  map은 10개가있으면 10개를 가져오고 타입이 다름
//  filter은 조건을 만족하는 갯수만큼만 나오고 타입이 같음
//  reduce는 10개의 타입을 최종 집계를해서 결과가 하나가 나오는데 타입이 다름??비슷한게 sum(), max()등 집계함수를 대신해서나옴
