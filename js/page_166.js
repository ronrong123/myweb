function drawTable(){
    let h2Tag = document.createElement('h2');
    h2Tag.innerHTML = '입력 양식 데이터 전송 버튼';
    document.getElementById('show').append(h2Tag);
    let formTag = document.createElement('form');
    formTag.setAttribute('method', 'get');
    document.getElementById('show').append(formTag);
    let pTag = document.createElement('p');
    pTag.innerHTML = '이름: ';
    formTag.append(pTag);
    let pTag2 = document.createElement('p');
    pTag2.innerHTML = '학과: ';
    formTag.append(pTag2);
    let inTag = document.createElement('input');
    inTag.setAttribute('type', 'text');
    inTag.setAttribute('name','name');
    pTag.append(inTag);
    let inTag2 = document.createElement('input');
    inTag2.setAttribute('type', 'text');
    inTag2.setAttribute('name','major');
    pTag2.append(inTag2);    
    let inTag3 = document.createElement('input');
    inTag3.setAttribute('type', 'submit');
    inTag3.setAttribute('value','전송');
    formTag.append(inTag3);

}