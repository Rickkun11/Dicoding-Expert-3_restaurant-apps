import data from '../DATA.json';
import warung from '../DATA2.json';

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
    `;
    console.log(data);
});


warung.warung.forEach((data) => {

    document.getElementById("featur2").innerHTML = `
    <div class="feature-container">
            <p class="card-text">${data.id}</p>
            <h2>${data.title}</h2>
            <p class="card-text">${data.time}</p>
            <p class="card-text">${data.servings}</p>
            <p class="card-text">${data.difficulty}</p>
    </div>
    <div class="feature-container">
            <p class="card-text">${data.id}</p>
            <h2>${data.title}</h2>
            <p class="card-text">${data.time}</p>
            <p class="card-text">${data.servings}</p>
            <p class="card-text">${data.difficulty}</p>
    </div>
    <div class="feature-container">
            <p class="card-text">${data.id}</p>
            <h2>${data.title}</h2>
            <p class="card-text">${data.time}</p>
            <p class="card-text">${data.servings}</p>
            <p class="card-text">${data.difficulty}</p>
    </div>
    `;
    console.log(data);
});
