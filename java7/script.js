function sumSalaries(salaries){
let sum=0;
for(let value of Object.values(salaries)){sum+=value;}
return sum;
}

function count(obj){
return Object.keys(obj).length;
}

let user={name:"John",years:30};
let {name,years:age,isAdmin=false}=user;

console.log(sumSalaries({John:100,Ann:160,Pete:130}));
console.log(sumSalaries({}));

console.log(count({a:1,b:2,c:3}));

console.log(name);
console.log(age);
console.log(isAdmin);