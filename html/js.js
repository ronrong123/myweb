var name = document
.getElementById('show')
.innerHTML;
// document: 오브젝트, 보여주는 페이지 (전체보여지는페이지)
// getElementsById('가지고올ID값') 
// .innerHTML: div의
// content값을 읽어오는 명령어
console.log(name);
document
.getElementById('show')
.innerHTML = "World";

var divTag = document.createElement("div");
divTag.innerHTML = "Nice";
// <div>Nice</div> Element: Tag createElement: Tag를 하나 만들겠다
// document.getElementById('show').after(divTag); .after : 뒤에 만들어주는것 (show라고하는
// ID의 .after(뒤에) divTag를 만들겠다/show div의 뒤에 after div가 만들어져있음)
document
.getElementById('show')
.append(divTag);
//.append: 안에 만들어짐,자식메소드 (show라는 메소드의 하위에 만들겠다.(show의 안에 만들어져있음))

console.log("--------------------------------------")

var liTag = document.createElement("li");
var liTag2 = document.createElement("li");
liTag.innerHTML = "Apple" //<li>Apple</li>
liTag2.innerHTML = "Orange" //<li>Orange</li>

document
.getElementById('fruit')
.append(liTag, liTag2);

var grade = 5;
for (var i = 1; i <= 9; i++) {
var str = grade + ' * ' + i + ' = ' + (
    grade * i
);
console.log(str);
// console: log영역에 내용을 출력하겠다.(sysout랑 비슷)
}

console.log("--------------------------------------")

var sum = 0;
for (var i = 1; i <= 100; i++) {
sum += i;
}
console.log('결과값:' + sum);