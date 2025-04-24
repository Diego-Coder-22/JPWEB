// === Ocultar body antes de que cargue todo ===
document.body.classList.add("hidden");

window.addEventListener("load", () => {
    // === Spinner ===
    const spinner = document.getElementById("spinner");

    setTimeout(() => {
        // Mostrar body
        document.body.classList.remove("hidden");
        document.body.classList.add("visible");

        // Empezar a ocultar spinner
        spinner.style.opacity = "0";
        spinner.style.transform = "translateY(100px)";
    }, 3000);

    setTimeout(() => {
        // Eliminar completamente el spinner
        spinner.style.display = "none";
    }, 4000); // Espera 1 segundo más para un fade-out limpio

    // === Menú hamburguesa ===
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    if (abrir && cerrar && nav) {
        abrir.addEventListener("click", () => nav.classList.add("visible"));
        cerrar.addEventListener("click", () => nav.classList.remove("visible"));
    }

    // === Back to Top ===
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        window.onscroll = () => {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            backToTopBtn.style.display = scrollTop > 300 ? "block" : "none";
        };

        backToTopBtn.onclick = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    }

    // === Video slider manual ===
    const btns = document.querySelectorAll(".nav-btn");
    const sliders = document.querySelectorAll(".video-slide");

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            btns.forEach((b) => b.classList.remove("active"));
            sliders.forEach((s) => s.classList.remove("active"));
            btns[i].classList.add("active");
            sliders[i].classList.add("active");
        });
    });

    // === Swiper general ===
    new Swiper(".swiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
        },
    });

    // === FAQ toggle ===
    document.querySelectorAll(".faq-question").forEach((button) => {
        button.addEventListener("click", () => {
            const faqItem = button.parentElement;
            faqItem.classList.toggle("active");
        });
    });

    // === Enviar formulario por WhatsApp ===
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const getVal = (id) => document.getElementById(id)?.value || "";
            const name = getVal("contact-form-name");
            const email = getVal("contact-form-email");
            const phone = getVal("contact-form-phone");
            const message = getVal("contact-form-message");
            const subject = getVal("contact-form-subject");

            const url = `https://wa.me/+34658104482?phone=+34658104482&text=${encodeURIComponent(
                `Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone}\nMensaje: ${message}\nAsunto: ${subject}`
            )}`;
            window.open(url, "_blank");
        });
    }

    // === Swiper para la biografía ===
    new Swiper(".bio-swiper-container", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 10,
    });

    // === Typed.js ===
    if (document.querySelector(".multiple")) {
        new Typed(".multiple", {
            strings: ["MÁS CONFIADO", "RESILIENTE", "MÁS RESPETUOSO", "DISCIPLINADO", "CINTURÓN NEGRO"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });
    }

    // === Filtro por año ===
    window.filterByYear = function (year) {
        document.querySelectorAll(".product").forEach((product) => {
            product.style.display = year === "all" || product.classList.contains(year) ? "flex" : "none";
        });
    };
});
