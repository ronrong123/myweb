let ulTag = document.createElement('ul');
// createElement : 만들고싶은 element를 만들음
ulTag.innerHTML = 'Fruit';
ulTag.id ='fruit2';

let liTag = document.createElement('li');
liTag.innerHTML = 'Banana';
let liTag1 = document.createElement('li');
liTag1.innerHTML = 'Orange';

ulTag.append(liTag);
ulTag.append(liTag1);

document.getElementById('show').append(ulTag);
// append : 하위요소에 넣어주는것
console.log(ulTag)

function input_friend(){
    let name = document.getElementById('fruit').value;
    let liTag2 = document.createElement('li');
    liTag2.innerHTML = name;
    document.getElementById('fruit2').append(liTag2);
    
    document.getElementById("fruit").value = '';
    // liTag2.append(name);

}