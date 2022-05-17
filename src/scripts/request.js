import('../DATA.json').then(({
    default: jsonData,
}) => {
    const restaurants = jsonData.restaurants;
    let restoList = '';
    restaurants.forEach((data_resto) => {
        restoList +=
            `
                <div class="col">
                    <div class="card">
                        <div class="card-img">
                            <div class="city-label">
                                <span class="city-label-text">
                                    Kota ${data_resto.city}
                                </span>
                            </div>
                            <img src="${data_resto.pictureId}" alt="Gambar makanan ${data_resto.name}">
                        </div>
                        <div class="card-body">
                            <div class="rating">
                                <span>${data_resto.rating}</span>
                            </div>
                            <h3 class="card-title">
                                <a href="./restaurant/${data_resto.id}" title="Link ke halaman detail makanan">${data_resto.name}</a>
                            </h3>
                            <p class="card-text">${data_resto.description}</p>
                        </div>
                    </div>
                </div>
                `;
    });
    document.querySelector('#resto-list').innerHTML = restoList;
});


const nav = document.querySelector("#nav");
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY < 20) {
        nav.classList.remove("shadow-bottom");
    } else {
        nav.classList.add("shadow-bottom");
    }
});
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});

//resto 2

import('../DATA2.json').then(({
    default: jsonData,
}) => {
    const restaurants = jsonData.restaurants;
    let restoList = '';
    restaurants.forEach((data_resto) => {
        restoList +=
            `
                <div class="col">
                    <div class="card">
                        <div class="card-img">
                            <div class="city-label">
                                <span class="city-label-text">${data_resto.difficulty}
                                </span>
                            </div>
                            <img src="${data_resto.images}" alt="Gambar Resep Makanan ${data_resto.title}">
                        </div>
                        <div class="card-body">
                            <div class="rating">
                                <span>${data_resto.time}</span>
                            </div>
                            <h3 class="card-title">
                                <a href="./restaurant/${data_resto.id}" title="Link detail resep">${data_resto.title}</a>
                            </h3>
                        </div>
                    </div>
                </div>
                `;
    });
    document.querySelector('#resep-list').innerHTML = restoList;
});