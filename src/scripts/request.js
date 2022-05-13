import data from '../DATA.json';

let html = "";
data.restaurants.forEach((resto) => {
html += document.getElementById("posts").innerHTML = `
    <article class="post-item">
        <img class="post-item__thumbnail"
            src="${resto.pictureId}"
            alt="Gambar suasana restoran yang berada di ${resto.city}" 
        />
        <div class="city">
            <span>${resto.city}</span>
        </div>
        <div class="post-item__content">
            <p class="post-item__date">
            Rating <a href="#" class="post-item__date__author">${resto.rating}</a>
        </p>
            <h1 class="post-item__title"><a href="#">${resto.name}</a></h1>
            <p class="post-item__description">${resto.description}</p>
        </div>
    </article>
    `;
});

/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}