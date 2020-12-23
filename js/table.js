var tableTag = document.getElementById('tbl');
// <div></div>등 OpenTag , CloseTag를 element(Tag)라고함

var trTag1 = document.createElement('tr'); //<tr></tr>
var tdTag1 = document.createElement('td'); //<td></td>

tdTag1.innerHTML = 'Name';
tdTag1.setAttribute('id', 'first');
tdTag1.setAttribute('class', 'title');
// Attribute: 속성값(id, class)을 만들어줌

var tdTag2 = document.createElement('td'); //<td></td>
tdTag2.innerHTML = 'Age';
tdTag2.setAttribute('class', 'title')
var trTag2 = document.createElement('tr'); //<tr></tr>
var tdTag2_1 = document.createElement('td');
tdTag2_1.setAttribute('class', 'data');


tdTag2_1.innerHTML = 'Hong';

var tdTag2_2 = document.createElement('td');
tdTag2_2.setAttribute('class', 'data');

tdTag2_2.innerHTML = '15';

trTag1.append(tdTag1);
trTag1.append(tdTag2);
trTag2.append(tdTag2_1);
trTag2.append(tdTag2_2);
//.append : 안에 만들어짐, 자식메소드
//.after : 뒤에 만들어주는것
console.log(trTag1);
console.log(trTag2);

tableTag.append(trTag1, trTag2);