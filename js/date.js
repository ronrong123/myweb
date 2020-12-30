// let today = new Date('2020-12-01');
// // 현재시간을 출력 
// // console.log(today.setMonth(0));
// console.log(today.getDay());

// function setCal(yyyy, mm, dd){
//     let today = new Date(yyyy+'-'+mm+'-'+dd);
//     today = new Date(yyyy,mm,0); //말일을 보여줌 (1일부터기때문에 0이면 전달력의 마지막날짜)
//     console.log(today.getDate());
// }

// setCal('2020','06','05');




function showCal(yyyy, mm) {
    let today = new Date(yyyy + '-' + mm + '-01');//현재월의 1일 정보 생성.
    let first = today.getDay();
    today = new Date(yyyy, mm, 0); //전월 정보 생성.
    let last = today.getDate();
    let table = document.createElement('table');
    document.getElementById('show').append(table);
    let tr, td;
    table.setAttribute('border', '1');
    tr = document.createElement('tr');
    table.append(tr);
    for (let i = 1; i <= last; i++) {
        td = document.createElement('td');
        td.innerHTML = i;
        tr.append(td);
        if (i % 7 == 0) {
            tr = document.createElement('tr');
            table.append(tr);
        }
    }
};