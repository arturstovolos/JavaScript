const form=document.querySelector(".grocery-form");
const input=document.getElementById("grocery");
const list=document.querySelector(".grocery-list");
const container=document.querySelector(".grocery-container");
const clearBtn=document.querySelector(".clear-btn");
const alert=document.querySelector(".alert");
const btn=document.querySelector(".submit-btn");
let edit=false;
let editElement;
let editId;
let items=JSON.parse(localStorage.getItem("list"))||[];
form.addEventListener("submit",function(e){
e.preventDefault();
const value=input.value;
if(value&&!edit){
const id=Date.now().toString();
const article=document.createElement("article");
article.classList.add("grocery-item");
article.setAttribute("data-id",id);
article.innerHTML=`
<p class='title'>${value}</p>
<div class='btn-container'>
<button type="button" class='edit-btn'>
<i class='fas fa-edit'></i>
</button>
<button type="button" class='delete-btn'>
<i class='fas fa-trash'></i>
</button>
</div>
`;
list.append(article);
items.push({id,value});
localStorage.setItem("list",JSON.stringify(items));
article.querySelector(".delete-btn").addEventListener("click",function(){
list.removeChild(article);
items=items.filter(i=>i.id!==id);
localStorage.setItem("list",JSON.stringify(items));
if(items.length===0)container.classList.remove("show-container");
show("видалено","danger");
});
article.querySelector(".edit-btn").addEventListener("click",function(){
input.value=value;
edit=true;
editId=id;
editElement=article.querySelector(".title");
btn.textContent="Редагувати";
});
container.classList.add("show-container");
show("додано","success");
input.value="";
}
else if(value&&edit){
editElement.textContent=value;
items=items.map(i=>{
if(i.id===editId)i.value=value;
return i;
});
localStorage.setItem("list",JSON.stringify(items));
show("оновлено","success");
btn.textContent="Додати";
edit=false;
input.value="";
}
else{
show("введіть значення","danger");
}
});
clearBtn.addEventListener("click",function(){
list.innerHTML="";
items=[];
localStorage.removeItem("list");
container.classList.remove("show-container");
show("очищено","danger");
});
function show(text,type){
alert.textContent=text;
alert.classList.add(`alert-${type}`);
setTimeout(function(){
alert.textContent="";
alert.classList.remove(`alert-${type}`);
},1500);
}
window.addEventListener("DOMContentLoaded",function(){
items.forEach(function(item){
const article=document.createElement("article");
article.classList.add("grocery-item");
article.setAttribute("data-id",item.id);
article.innerHTML=`
<p class='title'>${item.value}</p>
<div class='btn-container'>
<button type="button" class='edit-btn'>
<i class='fas fa-edit'></i>
</button>
<button type="button" class='delete-btn'>
<i class='fas fa-trash'></i>
</button>
</div>
`;
list.append(article);
container.classList.add("show-container");
article.querySelector(".delete-btn").addEventListener("click",function(){
list.removeChild(article);
items=items.filter(i=>i.id!==item.id);
localStorage.setItem("list",JSON.stringify(items));
if(items.length===0)container.classList.remove("show-container");
show("видалено","danger");
});
article.querySelector(".edit-btn").addEventListener("click",function(){
input.value=item.value;
edit=true;
editId=item.id;
editElement=article.querySelector(".title");
btn.textContent="Редагувати";
});
});
});