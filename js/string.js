let str = 'Please locate where "locate" occurs!';
let strLeng = str.length;
// length: 문자열의 크기를 가지고옴
console.log(strLeng);

// indexOf : 해당 문자열의 위치값을 알려주는것, lastIndexOf : 뒤에서 부터의 문자열 위치를 알려줌, search : 해당되는 위치값을 찾아줌 
// 찾고자하는 문자열이 없으면 -1을 리턴해줌 
console.log(str.indexOf('locate', 13)); //뒤에 숫자를 적으면 값의 위치 후로 찾아줌 
console.log(str.lastIndexOf('locate'));
console.log(str.search('locate'));

// slice : 범위를 지정해 문자를 가져오는것, substring : 인덱스의 위치값 지정, substr : 인덱스의 크기값 지정
let fruit = 'Apple, Banana, Kiwi';

console.log(fruit.slice(0, 5)); //0~5번쨰 문자열의 문자를 가져오겠다.
let from = fruit.indexOf('Banana');
console.log(fruit.substring(from, from+6)); //위치에서 시작해서 6개를 가져오겠다
console.log(fruit.substr(from, 6)); //크기

// replace : 문자열 치환
let newFruit = fruit.replace('Banana', 'Orange');  //새로운 변수에 담는거지 내용이 아예 바뀌는게아님 
console.clear(); //console을 청소해주는것 
console.log(newFruit);

//toUpperCase : 대문자로 변경, toLowerCase : 소문자로 변경, concat : 문자열을 연결, trim:좌우여백을살려줌, padStart: 왼쪽여백에 지정한 문자를 채워주는것, padEnd : 오른쪽 여백에 지정하는것 

console.log('     good        hello        '.trim());
console.log('     good        hello        '.toUpperCase());
console.log('     GOOD        HELLO        '.toLowerCase());
console.log('55'.padStart(4, '0')); //4자리로 지정했을때 비어있는 공백을 0으로 지정 
console.log('55'.padEnd(4, '0')); //뒤로 지정하고싶을때

let uri = 'http://www.naver.net';
console.log(uri.replace('net', 'com'));
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')), '.com'));

// split : 잘라낸 다음 결과값을 배열로 만들어줌 
let fruits = fruit.split(','); //fruit의 값을 잘라낸 다음 결과값을 배열로 만들어줌
for(f of fruits){
    console.log(f.trim()); //trim은 공란을 잘라줌 , 기준이라 두의 공백도 가져오기때문에 없애고 싶으면 trim을 적어줌 
}

// 990101-1234567
// 990102-2345678
// 000201-3456789
// 000202-4567890 2000년 이전, 이후 구분  -> 숫자가 1,3이면 남자입니다 2000년 이전, 이후 구분  -> 숫자가
// 2,4이면 여자입니다

function getGender(num) {
    let fNum = num.replace('-', '').substr(6, 1);
    let fYear = num.substr(0, 2);
    if (fYear == 99) {
        if (fNum == 1) {
            return '남자';
        } else if (fNum == 2) {
            return '여자';
        }
    } else if (fYear == 00) {
        if (fNum == 4) {
            return '여자';
        } else if (fNum == 3) {
            return '남자';
        }
    }else{
        return '잘못된값';
    }

}
let numbers = '990101-3234567';
numbers += ' 990102-2345678';
numbers += ' 000201-3456789';
numbers += ' 000202-4567890';
numbers += ' 0003024567890';

let numAry = numbers.split(' ');
for (num of numAry) {
    let result = getGender(num);
    console.log('결과: ' + result);
}