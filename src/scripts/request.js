import data from '../DATA.json';

data.restaurants.forEach((data) => {

    document.getElementById("featur").innerHTML = `
    <div class="feature-container">
            <img src="${data.pictureId}" alt="Flexbox Feature">
            <h2>${data.city}</h2>
            <p class="card-text">${data.rating}</p>
            <p class="card-text">${data.name}</p>
            <p class="card-text">${data.description}</p>
        </div>
    <div class="feature-container">
        <img src="${data.pictureId}" alt="Flexbox Feature">
        <h2>${data.city}</h2>
        <p class="card-text">${data.rating}</p>
        <p class="card-text">${data.name}</p>
        <p class="card-text">${data.description}</p>
    </div>
    <div class="feature-container">
        <img src="${data.pictureId}" alt="Flexbox Feature">
        <h2>${data.city}</h2>
        <p class="card-text">${data.rating}</p>
        <p class="card-text">${data.name}</p>
        <p class="card-text">${data.description}</p>
    </div>
    
    <div class="feature-container">
        <img src="${data.pictureId}" alt="Flexbox Feature">
        <h2>${data.city}</h2>
        <p class="card-text">${data.rating}</p>
        <p class="card-text">${data.name}</p>
        <p class="card-text">${data.description}</p>
    </div>
    `;
    console.log(data);
});
