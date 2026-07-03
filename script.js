// =========================
// PRELOADER
// =========================

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.pointerEvents = "none";
      setTimeout(() => preloader.remove(), 500);
    }, 800);
  }
});


// =========================
// SMOOTH SCROLL (якоря)
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// =========================
// CALCULATOR
// =========================

const checkboxes = document.querySelectorAll(".calculator-left input");
const totalPriceEl = document.getElementById("totalPrice");

function updatePrice() {
  let total = 0;

  checkboxes.forEach(cb => {
    if (cb.checked) {
      total += Number(cb.value);
    }
  });

  totalPriceEl.textContent = total.toLocaleString("ru-RU") + " ₽";
}

checkboxes.forEach(cb => {
  cb.addEventListener("change", updatePrice);
});

updatePrice();


// =========================
// FORM HANDLING (frontend only)
// =========================

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector("textarea").value;

    if (!name || !email) return;

    alert(`Спасибо, ${name}! Я скоро свяжусь с вами.`);

    form.reset();
  });
}


// =========================
// SIMPLE CARD ANIMATION ON SCROLL
// =========================

const animatedElements = document.querySelectorAll(
  ".card, .price-card, .module-card, .offer-card, .portfolio-card"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

animatedElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "0.6s ease";
  observer.observe(el);
});
