const translations = {
    ka: {
        title: "კრეატიული გრაფიკული დიზაინი",
        subtitle: "პროფესიონალური დიზაინი თქვენი ბრენდისთვის.",
        buttonText: "მეტის ნახვა",
        SERVICES: "სერვისები",
        CONTACT: "კონტაქტი",
        "services-title": "სერვისები",
        branding: "ბრენდინგი",
        logo: "ლოგო",
        banner: "სარეკლამო ბანერი",
        animation: "ლოგოს ანიმაცია",
        "branding-text": "უნიკალური ვიზუალური იდენტობის შექმნა. ინდივიდულური სტილი ყოველთვის გამოგარჩევთ კონკურენტებისგან.",
        "logo-text": "ლოგოს დიზაინის შექმნა, რომელიც საუბრობს თქვენს ბრენდზე. კრეატიულობა და პროფესიონალიზმი ყოველ პიქსელში.",
        "banner-text": "ეს არის თქვენი ხმა ვიზუალური მარკეტინგის სამყაროში, რომელიც იპყრობს ყურადღებას და აწვდის თქვენს აზრებს წამებში.",
        "animation-text": "ანიმაცია ყურადღების მიპყრობის ყველაზე ეფექტური საშუალებაა. ვიზუალური შთაბეჭდილება, რომელიც გამოგარჩევთ კონკურენტებისგან.",
        "contact-title": "კონტაქტი",
        "contact-text": "დაგვიკავშირდით დიზაინის ან თანამშრომლობის საკითხებზე !",

    },
    en: {
        title: "Creative Graphic Design",
        subtitle: "Professional design services that elevate your brand.",
        buttonText: "Learn More",
        SERVICES: "Services",
        CONTACT: "Contact",
        "services-title": "SERVICES",
        branding: "BRANDING",
        logo: "LOGO",
        banner: "ADVERTISING BANNER",
        animation: "LOGO ANIMATION",
        "branding-text": "The creation of a unique visual identity. A distinctive style will always set you apart from your competitors.",
        "logo-text": "Logo design that speaks about your brand. Creativity and professionalism in every pixel.",
        "banner-text": "This is your voice in the world of visual marketing, capturing attention and delivering your message in seconds.",
        "animation-text": "Animation is the most effective way to capture attention. A visual impression that sets you apart from your competitors.",
        "contact-title": "CONTACT",
        "contact-text": "Contact us for design or collaboration inquiries !"
    },
};

function setLanguage(language) {
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("subtitle").textContent = translations[language].subtitle;
    document.getElementById("buttonText").textContent = translations[language].buttonText;
    document.getElementById("SERVICES").textContent = translations[language].SERVICES;
    document.getElementById("CONTACT").textContent = translations[language].CONTACT;
    document.getElementById("services-title").textContent = translations[language]["services-title"];
    document.getElementById("branding").textContent = translations[language].branding;
    document.getElementById("logo").textContent = translations[language].logo;
    document.getElementById("banner").textContent = translations[language].banner;
    document.getElementById("animation").textContent = translations[language].animation;
    document.getElementById("branding-text").textContent = translations[language]["branding-text"];
    document.getElementById("logo-text").textContent = translations[language]["logo-text"];
    document.getElementById("banner-text").textContent = translations[language]["banner-text"];
    document.getElementById("animation-text").textContent = translations[language]["animation-text"];
    document.getElementById("contact-title").textContent = translations[language]["contact-title"];
    document.getElementById("contact-text").textContent = translations[language]["contact-text"];

}
