//Menu Hamburguesa//

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");

});

//video slider//

const btns =document.querySelectorAll(".nav-btn");
const sliders =document.querySelectorAll(".video-slide");

const sliderNav = function (manual){
  btns.forEach((btn) =>{
    btn.classList.remove ("active")
  });

  sliders.forEach((slide) =>{
    slide.classList.remove ("active")
  });

  btns[manual].classList.add("active");
  sliders[manual].classList.add("active");
}

btns.forEach ((btn,i) =>{
  btn.addEventListener("click", () =>{
    sliderNav(i);
  });
});

// Slider //
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }
});

//FORMULARIO AGENDE SU CLASE//
  // Función para enviar datos a WhatsApp
  document.addEventListener('DOMContentLoaded', function () {
    // Función para enviar datos a WhatsApp
    function sendToWhatsApp(formId, phoneNumber, baseUrl) {
        const form = document.getElementById(formId);
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById(`${formId}-name`).value;
            const email = document.getElementById(`${formId}-email`).value;
            const phone = document.getElementById(`${formId}-phone`).value;
            const message = document.getElementById(`${formId}-message`).value;
            const subject = document.getElementById(`${formId}-subject`) ? document.getElementById(`${formId}-subject`).value : '';

            const url = `${baseUrl}?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone}\nMensaje: ${message}\nAsunto: ${subject}`)}`;

            window.open(url, '_blank');
        });
    }

    // Aplicar a los formularios
    sendToWhatsApp('contact-form', '+34658104482', 'https://wa.me/+34658104482');
});
