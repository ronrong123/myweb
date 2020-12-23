// undefined
let something = 'null';
something = 1 > 2;
something = "";

if(something){
    console.log("참입니다.")
}else{
    console.log("거짓입니다")
}

//object

something = {
    name: 'Hong',
    age: 20,
    phone: '010-1111-2222'
}
// name, age, phone은 something의 클래스느낌(field) 변수처럼씀

let name = something.name;
let age = something['age'];

for (field in something){
    console.log(field, something[field]);
}
//something의 object가 가지고있는 field를 가져오겠다

let nameAry = ['Hong', 'Park', "Kim", 'Hwang', 'Lee'];
// nameAry는 배열타입
let name1 = nameAry[0];
let name2 = nameAry[1];
nameAry[2] = 'choi';

for(let i=0;i<nameAry.length;i++){
    console.log('nameAry['+ i + '] => ' + nameAry[i]);
}
let i=1;
document.write('<style>table tr td{padding:10px 20px;}table{margin-top:20px;}table th{padding:10px 20px;background:#ccc;}</style>')
document.write('<table border="1" style="border-collapse:collapse;">')
document.write('<tr><th>순번</th><th>이름</th></tr>')
for(str of nameAry){
    document.write('<tr><td>' + i + '</td><td>' + str +'</td></tr>')
    i++
}
document.write('</table>')
// 자바에서 string str:nameAry랑 비슷한듯

