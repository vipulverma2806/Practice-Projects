const xpos = document.querySelector("#x");
const ypos = document.querySelector("#y");

window.addEventListener("mouseover", (e)=>{
 xpos.innerText = e.screenX;
 ypos.innerText = e.screenY;

})