// Menu Hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Mostrar u ocultar el botón cuando se desplaza la página
window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Desplazar suavemente hacia arriba cuando se hace clic en el botón
document.getElementById("backToTopBtn").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Video slider
const btns = document.querySelectorAll(".nav-btn");
const sliders = document.querySelectorAll(".video-slide");

const sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    sliders.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    sliders[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// Slider
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

// FORMULARIO AGENDE SU CLASE
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

// Inicializar Swiper para la biografía
document.addEventListener('DOMContentLoaded', function () {
    const bioSwiper = new Swiper('.bio-swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,
    });
});

// Typed.js
const typed = new Typed(".multiple", {
    strings: ["MÁS CONFIADO", "RESILIENTE", "MÁS RESPETUOSO", "DISCIPLINADO", "CINTURÓN NEGRO"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});


// Datos de campeonatos
const championships = [
  {
      event: 'Campeonato de Jiu Jitsu',
      year: '2020',
      belt: 'Cinturón Negro',
      description: 'Descripción del campeonato 2020',
      imgUrl: 'https://via.placeholder.com/100'
  },
  {
      event: 'Campeonato Internacional',
      year: '2022',
      belt: 'Cinturón Verde',
      description: 'Descripción del campeonato 2022',
      imgUrl: 'https://via.placeholder.com/100'
  },
  {
      event: 'Campeonato Local',
      year: '2015',
      belt: 'Cinturón Azul',
      description: 'Descripción del campeonato 2015',
      imgUrl: 'https://via.placeholder.com/100'
  },
];

// Función para mostrar las tarjetas en el DOM
function displayChampionships(filterYear = 'all') {
  const champCardsContainer = document.getElementById('champ-cards');
  champCardsContainer.innerHTML = ''; // Limpiar el contenedor

  championships.forEach(champ => {
      // Si el filtro es 'all' o si el año de la tarjeta coincide con el filtro
      if (filterYear === 'all' || champ.year === filterYear) {
          const card = document.createElement('div');
          card.className = 'champ-card-item';

          card.innerHTML = `
              <div class="champ-card-img">
                  <img src="${champ.imgUrl}" alt="${champ.event}"/>
              </div>
              <div class="champ-card-content">
                  <h4>${champ.event}</h4>
                  <h3>${champ.year}</h3>
                  <p>${champ.belt}</p>
                  <div class="champ-card-tag">
                      <p>${champ.description}</p>
                  </div>
              </div>
          `;

          champCardsContainer.appendChild(card); // Añadir la tarjeta al contenedor
      }
  });
}

// Función para manejar el filtro de años
function setupFilters() {
  const filterItems = document.querySelectorAll('.champ-filter-item');

  filterItems.forEach(item => {
      item.addEventListener('click', () => {
          const year = item.getAttribute('data-year');
          displayChampionships(year); // Mostrar campeonatos filtrados
      });
  });
}

// Inicializar la página
function init() {
  displayChampionships(); // Mostrar todos los campeonatos al cargar la página
  setupFilters(); // Configurar los filtros
}

// Ejecutar la función de inicialización
init();
