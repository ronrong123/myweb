let show = document.getElementById('show');
// getElementById : ID값의 내용이 아닌 전체 내용을 가져온다 <div id=show>부터
console.log(show.id);
//innerHtml : 내용을 가져옴
//getAttribute('id'): ID의 속성을 가져옴 
function turnOn(){
    let img1 = document.getElementsByTagName('img');
    img1[0].src= 'https://www.w3schools.com/js/pic_bulbon.gif';
    console.log(img1[0]);
}
function turnOff(){
    let img1 = document.getElementsByTagName('img');
    img1[0].src='https://www.w3schools.com/js/pic_bulboff.gif';
    console.log(imt1[0]);
}