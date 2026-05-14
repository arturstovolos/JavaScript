function unique(arr){
let result=[];
for(let i=0;i<arr.length;i++){
if(result.indexOf(arr[i])===-1){result.push(arr[i]);}
}
return result;
}

function aclean(arr){
let result=[];
let temp=[];
for(let i=0;i<arr.length;i++){
let word=arr[i].toLowerCase().split('').sort().join('');
if(temp.indexOf(word)===-1){
temp.push(word);
result.push(arr[i]);
}
}
return result;
}

function countElements(arr){
let map=new Map();
for(let i=0;i<arr.length;i++){
if(map.has(arr[i])){map.set(arr[i],map.get(arr[i])+1);}
else{map.set(arr[i],1);}
}
return map;
}

function isUnique(arr){
for(let i=0;i<arr.length;i++){
if(arr.indexOf(arr[i])!==i){return false;}
}
return true;
}

console.log(unique([1,2,2,3]));
console.log(aclean(["nap","pan","ear","are"]));
console.log(countElements([1,2,2,3,3,3]));
console.log(isUnique([1,2,3]));
console.log(isUnique([1,2,2]));