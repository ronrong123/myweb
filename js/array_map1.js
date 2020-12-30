let students = [];
let student = {
    sno:1,
    sname:'Hong',
    sgen:'F',
    score:80
};
for(let i=1;i<=5;i++){
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i%2==0 ? 'M':'F';
    std.score = 80+i;
    students.push(std);
}
let fstd = students.filter(function(a,b,c){
    return a.sgen == 'F';
}).map(function(a,b,c){
    return a.score;
});
console.log(fstd);

console.log(students);