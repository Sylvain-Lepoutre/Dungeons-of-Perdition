import photos from './data.js';


// Récupération de la section qui contiendra les photos
const cardContainerElt = document.querySelector("body > main > section > div")

// Boucle sur le tableau displayPhotos afin de créer les éléments HTML pour chacune
photos.forEach(element => {
    // Création des éléments HTML avec ajout de classe, contenu et attributs
    const articleElt = document.createElement('article');
    articleElt.classList.add('card');
    articleElt.classList.add('card--active');

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
    imgElt.setAttribute('type', 'image/jpeg');

    const figcaptionElt = document.createElement('figcaption');
    figcaptionElt.classList.add('card__desc');
    figcaptionElt.textContent = element.title;

    // Insertion des éléments dans le DOM
    cardContainerElt.appendChild(articleElt);
    articleElt.appendChild(linkElt);
    linkElt.appendChild(figureElt);
    figureElt.appendChild(imgElt);
    figureElt.appendChild(figcaptionElt);
});
