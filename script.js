const translations = {
    ka: {
        title: "კრეატიული გრაფიკული დიზაინი",
        subtitle: "პროფესიონალური დიზაინი თქვენი ბრენდისთვის.",
        "services-title": "სერვისები",
        "service-title": "ბრენდინგი",
        "contact-title": "კონტაქტი",
        "footer-text": "© 2024 ElGraphiq. All rights reserved."
    },
    en: {
        title: "Creative Graphic Design",
        subtitle: "Professional design services that elevate your brand.",
        "services-title": "Services",
        "service-title": "Branding",
        "contact-title": "Contact Info",
        "footer-text": "© 2024 ElGraphiq. All rights reserved."
    },
};

function setLanguage(language) {
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("subtitle").textContent = translations[language].subtitle;
    document.getElementById("services-title").textContent = translations[language]["services-title"];
    document.getElementById("service-title").textContent = translations[language]["service-title"];
    document.getElementById("contact-title").textContent = translations[language]["contact-title"];
    document.getElementById("footer-text").textContent = translations[language]["footer-text"];
}
