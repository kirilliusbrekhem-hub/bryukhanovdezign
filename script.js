/* ==========================================

   BRYBRANDING 2.0

   script.js

========================================== */



// =========================

// Плавное появление блоков

// =========================



const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


        if (entry.isIntersecting) {


            entry.target.classList.add("show");



        }



    });



}, {


    threshold: 0.15



});



document.querySelectorAll(

    ".card,.project,.tariff,.timeline-item,.advantage,.review-card,.faq-item"

).forEach(el => {


    el.classList.add("hidden");



    observer.observe(el);



});



// =========================

// Кнопка смены темы

// =========================



const themeButton = document.getElementById("themeToggle");



if (themeButton) {


    if (localStorage.getItem("theme") === "dark") {


        document.body.classList.add("dark");



        themeButton.textContent = "☀️";



    }



    themeButton.addEventListener("click", () => {


        document.body.classList.toggle("dark");



        const dark = document.body.classList.contains("dark");



        themeButton.textContent = dark ? "☀️" : "🌙";



        localStorage.setItem("theme", dark ? "dark" : "light");



    });



}



// =========================

// Плавная прокрутка

// =========================



document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", e => {


        e.preventDefault();



        const target = document.querySelector(link.getAttribute("href"));



        if (target) {


            target.scrollIntoView({


                behavior: "smooth"



            });



        }



    });



});
// =========================

// Калькулятор стоимости

// =========================



const serviceSelect = document.getElementById("service");

const result = document.getElementById("result");



const prices = {
    website: 1999,

    logo: 699,

    marketplace: 499,

    bot: 1499,

    vpn: 999

};



function updatePrice() {


    if (!serviceSelect || !result) return;



    const value = serviceSelect.value;



    if (prices[value]) {


        result.textContent =

            "Стоимость: " + prices[value] + " ₽";



    } else {


        result.textContent =

            "Выберите услугу";



    }



}



if (serviceSelect) {


    serviceSelect.addEventListener("change", updatePrice);



    updatePrice();



}



// =========================

// Шапка при прокрутке

// =========================



const header = document.querySelector("header");



window.addEventListener("scroll", () => {


    if (!header) return;



    if (window.scrollY > 60) {


        header.style.boxShadow =

            "0 10px 35px rgba(0,0,0,.12)";



    } else {


        header.style.boxShadow = "none";



    }



});



// =========================

// Анимация счётчиков

// =========================



const counters = document.querySelectorAll(".counter");



counters.forEach(counter => {


    const target = Number(counter.dataset.target);



    let current = 0;



    const speed = Math.max(10, target / 60);



    function animate() {


        current += speed;



        if (current >= target) {


            counter.textContent = target;



            return;



        }



        counter.textContent = Math.floor(current);



        requestAnimationFrame(animate);



    }



    animate();



});
// =========================

// Кнопка "Наверх"

// =========================



const topButton = document.createElement("button");



topButton.innerHTML = "↑";



topButton.id = "scrollTop";



document.body.appendChild(topButton);



Object.assign(topButton.style, {
    position: "fixed",

    right: "20px",

    bottom: "20px",

    width: "52px",

    height: "52px",

    border: "none",

    borderRadius: "50%",

    background: "#2563eb",

    color: "#fff",

    fontSize: "24px",

    cursor: "pointer",

    opacity: "0",

    visibility: "hidden",

    transition: ".3s",

    zIndex: "9999",

    boxShadow: "0 12px 30px rgba(37,99,235,.3)"

});



window.addEventListener("scroll", () => {


    if (window.scrollY > 400) {


        topButton.style.opacity = "1";

        topButton.style.visibility = "visible";



    } else {


        topButton.style.opacity = "0";

        topButton.style.visibility = "hidden";



    }



});



topButton.addEventListener("click", () => {


    window.scrollTo({
        top: 0,

        behavior: "smooth"

    });



});



// =========================

// Анимация появления

// =========================



const style = document.createElement("style");



style.textContent = `

.hidden{
    opacity:0;

    transform:translateY(40px);

    transition:.8s;

}

.show{
    opacity:1;

    transform:translateY(0);

}

`;



document.head.appendChild(style);



// =========================

// Текущий год в футере

// =========================



const copyright = document.querySelector(".copyright");



if (copyright) {


    copyright.innerHTML =

        `${new Date().getFullYear()} BRYBRANDING<br>`;



}



// =========================

// Конец script.js

// =========================
