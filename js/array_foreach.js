let persons = ['Hong', 'Hwang', 'Park', 'Choi'];

persons.forEach(myCallBack);


function myCallBack(a, b, c) {
    console.log(a, b, c);
}

persons = [];

let person2 = {};
person2.name = '김유진';
person2.age = 29;
person2.score = 85;
persons.push(person2);

let person3 = {};
person3.name = '김수람';
person3.age = 10;
person3.score = 100;
persons.push(person3);
let person = {
    name: '김환희',
    age: 4,
    score: 95
};

persons.push(person);

let person1 = {};
person1.name = '김도현';
person1.age = 2;
person1.score = 85;
persons.push(person1);

// persons.push('송다희');

console.log(persons);
let tbTag = document.createElement('table');
tbTag.setAttribute('border', '1');
// setAttribute : 선택한 요소의 속성값을 정함  

function drawTable(){
    document.getElementById('show').append(tbTag);
    let trTag = document.createElement('tr');
    trTag.innerHTML = '<th>이름</th><th>나이</th><th>점수</th>'
    tbTag.append(trTag);
    persons.forEach(myCallFunc)
}

function myCallFunc(a, b, c){
    let trTag = document.createElement('tr');
        for(field in a){
            let tdTag = document.createElement('td');
            tdTag.innerHTML = a[field];
            trTag.append(tdTag);
        }
        tbTag.append(trTag);
}