let friends = [];
let i=0;

// js에서 모두 쓰여지는 변수를 전역변수라고함
function input_friend(){
    // 이부분에서만 쓰여지는 변수를 지역변수라고함
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let hb = document.getElementById('hobby').value;

    let friend = {};
    friend.name = name;
    friend.age = age;
    friend.hobby = hb;
 
    friends[i] = friend;
    console.clear();
    //  clear : 이전에 있었던 로그 정보를 지우겠다.
    for(frd of friends){
        let trTag = document.createElement('tr');
        trTag.innerHTML;
        document.getElementById('friends').append(trTag);
        for(field in frd){
            let tdTag = document.createElement('td');
            tdTag.innerHTML = frd[field];
            trTag.append(tdTag);
        }
    }
    console.log(friends);
    
    // let trTag = document.createElement('tr');
    // document.getElementById('friends').append(trTag);
    // let tdTag = document.createElement('td');
    // tdTag.innerHTML = name;
    // let tdTag2 = document.createElement('td');
    // tdTag2.innerHTML = age;
    // let tdTag3 = document.createElement('td');
    // tdTag3.innerHTML = hb;

    // trTag.append(tdTag, tdTag2, tdTag3);
    
    // console.log(name.value, age.value, hb.value);
    // document.getElementById('result').value = name.value+', ' + age.value+ ', '+hb.value
    //  input은 value속성에 넣어야함 
}