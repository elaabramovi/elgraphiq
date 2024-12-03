const translations = {
    ka: {
        title: "კრეატიული გრაფიკული დიზაინი",
        subtitle: "პროფესიონალური დიზაინი თქვენი ბრენდისთვის.",
        "services-title": "სერვისები",
        "contact-title": "დაგვიკავშირდით",
        "footer-text": "© 2024 ElGraphiq. All rights reserved."
    },
    en: {
        title: "Creative Graphic Design",
        subtitle: "Professional design services that elevate your brand.",
        "services-title": "Services",
        "contact-title": "Contact Us",
        "footer-text": "© 2024 ElGraphiq. All rights reserved."
    },
};

function setLanguage(language) {
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("subtitle").textContent = translations[language].subtitle;
    document.getElementById("services-title").textContent = translations[language]["services-title"];
    document.getElementById("contact-title").textContent = translations[language]["contact-title"];
    document.getElementById("footer-text").textContent = translations[language]["footer-text"];
}
