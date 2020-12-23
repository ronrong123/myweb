function myFunc(){
    document.write("<style>*{box-sizing:border-box;}::selection{background:#22741c;color:#ffe400;}table{border:3px dotted #d9418d;}table tr td{padding:8px 15px;}.even{background:tomato;}.odd{background:#ffcc00;}</style>")
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");
    let dan = 4;
    document.write('<table border="1" style="border-collapse:collapse;">');
    for(let i=1;i<=10;i++){
            document.write('<tr><td>' + dan + ' &times; ' + i +'</td>' +'<td>' + '= </td><td><b>' + (dan*i) + "</b></td></tr>");      
    }
    document.write('</table>');
    document.write('<h1>실습</h1>')
    let num=2;
    document.write('<table border="1" style="border-collapse:collapse;">');
    for(let i=1;i<=9;i++){
        if(i%2==0){
        document.write('<tr align="center" class="odd"><td>' +num + ' x ' + i + '</td><td>' + '= </td><td><b>' + (num*i) + '</b></td></tr>');
    }else{
        document.write('<tr align="center" class="even"><td>' +num + ' x ' + i + '</td><td>' + '= </td><td><b>' + (num*i) + '</b></td></tr>');
    }
}
    document.write('</table>');
}
