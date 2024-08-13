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

document.getElementById("whatsappButton").addEventListener("click", function(event) {
  event.preventDefault();

  // Captura los datos del formulario
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;
  let option = document.getElementById("option").value;

  // Número de WhatsApp al que enviarás el mensaje (con código de país, sin espacios ni guiones)
  let phoneNumber = "+34652768245"; // Reemplaza con el número de destino

  // Construye el mensaje de WhatsApp
  let whatsappMessage = `Nombre: ${name}%0ACorreo: ${email}%0ATeléfono: ${phone}%0AOpción seleccionada: ${option}%0AMensaje: ${message}`;

  // Construye el enlace de WhatsApp
  let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  // Abre el enlace de WhatsApp
  window.open(whatsappURL, "_blank");
});

