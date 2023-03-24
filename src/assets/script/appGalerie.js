import photos from './data.js'

console.log(photos);

const cardContainer = document.querySelector("body > main > section > div")

for (const element of photos) {
    // console.log(element.path);
    // Création des éléments HTML avec ajout de classe, contenu et attributs
    const articleElt = document.createElement('article');
    articleElt.classList.add('card');
    
    const linkElt = document.createElement('a');
    linkElt.classList.add('card__link');
    linkElt.setAttribute('href', element.path);
    linkElt.setAttribute('target', '_blank');

    const figureElt = document.createElement('figure');
    figureElt.classList.add('card__item');

    const imgElt = document.createElement('img');
    imgElt.classList.add('card__img');
    imgElt.setAttribute('src', element.path);
    imgElt.setAttribute('alt', element.title);
    console.log(imgElt);

    const figcaptionElt = document.createElement('figcaption');
    figcaptionElt.classList.add('card__desc');
    figcaptionElt.textContent = element.title;
    
        

// Insertion des éléments dans le DOM une fois que l'image est chargée
    // imgElt.addEventListener('load', () => {
    // Insertion des éléments dans le DOM
    cardContainer.appendChild(articleElt);
    articleElt.appendChild(linkElt);
    linkElt.appendChild(figureElt);
    figureElt.appendChild(imgElt);
    figureElt.appendChild(figcaptionElt);
    };
