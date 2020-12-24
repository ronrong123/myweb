let friend1 = {
    name: '배가람',
    age: 29,
    hobby: '게임',
    grade: 'B'
}
let friend2 = {
    name: '이승은',
    age: 30,
    hobby: '유튭',
    grade: 'C'
}
let friend3 = {
    name: '손미희',
    age: 29,
    hobby: '3D',
    grade: 'D'
}

let friends = [friend1, friend2, friend3];

document.write('<table border="1"><tr>');
for (field in friend1) {
    document.write('<th>' + field + '</th>');
}
document.write('</tr>')
for (friend of friends) {
    document.write('<tr>');
    for (field in friend) {
        document.write('<td>' + friend[field] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

document.write('##########################################');

document.write('<style>table{margin-top:20px;border:4px dotted #ffcc00;border-collapse:collapse;text-align:center;}table tr td{padding:10px 20px;border-color:#000;}table tr th{padding:10px 20px;background:#ffcc00;font-weight:400;border-color:#000;}</style>');
document.write('<table border="1">');
document.write('<tr><th>이름</th><th>나이</th><th>취미</th></tr>');
for (var i = 0; i <= friends.length;i++) {
    document.write('<tr><td>' + friends[i].name + '</td><td>' + friends[i].age + '</td><td>' + friends[i].hobby + '</td></tr>');
}
document.write('</table>');


let numbers = [3, 4, 8, 9, 12, 83, 22];
let sum = 0;
for (num of numbers) {
    if (sum < num) {
        sum = num;
    }
}

console.log('가장 큰수: ' + sum);
