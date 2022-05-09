const rightBtn=document.getElementById("rightBtn");
const leftBtn=document.getElementById("leftBtn");
const stillRow=document.getElementsByClassName("still-row");

 rightBtn.onclick = function(){
    stillRow[0].classList.add("still-transform");
 };
 leftBtn.onclick = function(){
    stillRow[0].classList.remove("still-transform");
 };

 const unvisible=document.querySelector(".unvisible__menu");
 const closeBtn=document.getElementById("close");
 const barBtn=document.getElementById("bar");
 closeBtn.onclick=function(){
     unvisible.classList.add("transform-unvisible")
 };
 barBtn.onclick=function(){
    unvisible.classList.remove("transform-unvisible")
};

const header=document.querySelector(".header");
window.onscroll=function(){
    
    if (document.documentElement.scrollTop > 50) {
        header.classList.add("transform-y");
      } else {
        header.classList.remove("transform-y");
      }
}
