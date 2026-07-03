/*==================================

PRELOADER

==================================*/



window.addEventListener("load",()=>{


const preloader=document.querySelector(".preloader");



setTimeout(()=>{


preloader.classList.add("hide");



},700);



});



/*==================================

SMOOTH REVEAL

==================================*/



const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");



}



});



},{


threshold:.15



});



document.querySelectorAll(

"section,.card,.price-card,.module-card,.offer-card,.portfolio-card,.contact-form"

).forEach(el=>{


observer.observe(el);



});



/*==================================

CALCULATOR

==================================*/



const total=document.getElementById("totalPrice");



const checks=document.querySelectorAll(

'.calc-item input'

);



function updateTotal(){


let sum=0;



checks.forEach(item=>{


if(item.checked){


sum+=Number(item.value);



}



});



total.innerHTML=

sum.toLocaleString("ru-RU")+" ₽";



}



checks.forEach(item=>{


item.addEventListener(

"change",

updateTotal

);



});



updateTotal();



/*==================================

SMOOTH MENU

==================================*/



document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


anchor.addEventListener("click",function(e){


e.preventDefault();



const target=document.querySelector(

this.getAttribute("href")

);



if(target){


target.scrollIntoView({


behavior:"smooth"



});



}



});



});



/*==================================

HEADER

==================================*/



const header=document.querySelector("header");



window.addEventListener("scroll",()=>{


if(window.scrollY>40){


header.classList.add("scroll");



}else{


header.classList.remove("scroll");



}



}); 

/*==================================

BACK TO TOP

==================================*/



const topButton=document.createElement("button");



topButton.className="top-button";



topButton.innerHTML="↑";



document.body.appendChild(topButton);



window.addEventListener("scroll",()=>{


if(window.scrollY>500){


topButton.classList.add("show");



}else{


topButton.classList.remove("show");



}



});



topButton.addEventListener("click",()=>{


window.scrollTo({


top:0,



behavior:"smooth"



});



});



/*==================================

COUNTERS

==================================*/



const counters=document.querySelectorAll(".hero-stats h3");



let started=false;



window.addEventListener("scroll",()=>{


const stats=document.querySelector(".hero-stats");



if(!stats)return;



if(window.scrollY>stats.offsetTop-500 && !started){


started=true;



counters.forEach(counter=>{


const target=counter.innerText;



const number=parseInt(target);



const suffix=target.replace(number,"");



let value=0;



const speed=Math.max(15,Math.floor(1200/number));



const timer=setInterval(()=>{


value++;



counter.innerHTML=value+suffix;



if(value>=number){


counter.innerHTML=target;



clearInterval(timer);



}



},speed);



});



}



});



/*==================================

PARALLAX

==================================*/



const hero=document.querySelector(".hero");



window.addEventListener("mousemove",(e)=>{


if(!hero)return;



const x=(window.innerWidth/2-e.clientX)/40;



const y=(window.innerHeight/2-e.clientY)/40;



hero.style.backgroundPosition=`${x}px ${y}px`;



});



/*==================================

CARD HOVER

==================================*/



document.querySelectorAll(

".card,.price-card,.module-card,.offer-card,.portfolio-card"

).forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.transform="translateY(-12px)";



});



card.addEventListener("mouseleave",()=>{


card.style.transform="";



});



});



/*==================================

CONTACT FORM

==================================*/



const form=document.querySelector(".contact-form");



if(form){


form.addEventListener("submit",(e)=>{


e.preventDefault();



const button=form.querySelector("button");



button.disabled=true;



button.innerHTML="Отправлено ✓";



setTimeout(()=>{


button.disabled=false;



button.innerHTML="Отправить";



form.reset();



},2500);



});



}



/*==================================

BUTTON RIPPLE

==================================*/



document.querySelectorAll(".button").forEach(btn=>{


btn.addEventListener("click",(e)=>{


const ripple=document.createElement("span");



const size=Math.max(btn.offsetWidth,btn.offsetHeight);



ripple.style.width=size+"px";



ripple.style.height=size+"px";



ripple.style.left=e.offsetX-size/2+"px";



ripple.style.top=e.offsetY-size/2+"px";



ripple.className="ripple";



btn.appendChild(ripple);



setTimeout(()=>{


ripple.remove();



},600);



});



});



/*==================================

END

==================================*/



console.log("bryukhanovdezign loaded successfully.");
