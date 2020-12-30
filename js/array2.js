let fruits = [];
function sum(){
    let num1 = document.getElementById('num1').value;
    fruits.push(num1);
    console.log(fruits);
    document.getElementById("num1").value = '';
}
function minus(){
    fruits.pop();
    console.log(fruits);
}