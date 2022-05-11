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
 const unvisibleMen=document.querySelector(".unvisible__menu-men");
 const closeBtn=document.getElementById("close");
 const closeBtnMen=document.getElementById("close-men");
 const barBtn=document.getElementById("bar");
 const menBtn=document.getElementById("men-btn");
 const menCategory=document.querySelector(".men-category");
 closeBtn.onclick=function(){
     unvisible.classList.add("transform-unvisible")
 };
 menCategory.onclick=function(){
  unvisibleMen.classList.add("transform-reverse")
};
 closeBtnMen.onclick=function(){
  unvisibleMen.classList.add("transform-reverse")
  unvisible.classList.add("transform-unvisible")
};
 barBtn.onclick=function(){
    unvisible.classList.remove("transform-unvisible")
};
menBtn.onclick=function(){
  unvisibleMen.classList.remove("transform-reverse")
};

const header=document.querySelector(".header");
window.onscroll=function(){
    
    if (document.documentElement.scrollTop > 50) {
        header.classList.add("transform-y");
      } else {
        header.classList.remove("transform-y");
      }
}

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        300:{
          items:2
      },
      500:{
        items:3
    },
        1000:{
            items:4
        },
        1300:{
          items:5
      },
     1500:{
        items:6
    }

    }
})
});

const newBtn=document.querySelector(".new-button");
const whatBtn=document.querySelector(".what-button");
const row1=document.querySelector(".row1");
const row2=document.querySelector(".row2");


newBtn.onclick=function(){
  row2.classList.add("product-none")
  row1.classList.remove("product-none")
  whatBtn.style.color="#666"
  newBtn.style.color="black"
  whatBtn.classList.remove("border-btn")
  newBtn.classList.add("border-btn")

}
whatBtn.onclick=function(){
  row1.classList.add("product-none")
  row2.classList.remove("product-none")
  newBtn.style.color="#666"
  whatBtn.style.color="black"
  newBtn.classList.remove("border-btn")
  whatBtn.classList.add("border-btn")

}


