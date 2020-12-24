let friends = [];
// 배열
for (let i = 0; i < 3; i++) {
    let name = window.prompt('이름을 입력하세요');
    let age = window.prompt('나이를 입력하세요');
    let friend = {};
    // 오브젝트
    friend.name = name;
    friend.age = age;
    friends[i] = friend;
}
document.write('<style>table{border-collapse:collapse;text-align:center;}</style>')
document.write('<table border="1"><tr>');
for (field in friends[0]) {
    document.write('<th>' + field + '</th>');
}
document.write('</tr>');
for (frd of friends) {
    document.write('<tr>')
    for (field in frd) {
        document.write('<td>' + frd[field] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');