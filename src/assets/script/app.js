import photos from './data.js';


// Récupération des 6 dernieres photos
const displayPhotos = photos.slice(-6);

// Récupération de la section qui contiendra les photos
const cardContainerElt = document.querySelector("body > main > section > div")

// Boucle sur le tableau displayPhotos afin de créer les éléments HTML pour chacune
displayPhotos.forEach(element => {
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

    // Création du bouton précédent
    const prevPhotoBtnElt = document.createElement("button");
    prevPhotoBtnElt.setAttribute("type", "button");
    prevPhotoBtnElt.setAttribute("title", "Précédent");
    prevPhotoBtnElt.classList.add("card__btn", "card__btn--left");
    prevPhotoBtnElt.innerHTML = "&lsaquo;";

    // Création du bouton suivant
    const nextPhotoBtnElt = document.createElement("button");
    nextPhotoBtnElt.setAttribute("type", "button");
    nextPhotoBtnElt.setAttribute("title", "Suivant");
    nextPhotoBtnElt.classList.add("card__btn", "card__btn--right");
    nextPhotoBtnElt.innerHTML = "&rsaquo;";

    // Ajout des boutons dans le DOM
    figureElt.appendChild(prevPhotoBtnElt);
    figureElt.appendChild(nextPhotoBtnElt);
});

// Gestion du slider de photos
// Récupération des photos, ainsi que des boutons
const allPhotos = cardContainerElt.querySelectorAll('.card');
const allPrevPhotoBtns = document.querySelectorAll('.card__btn--left');
const allNextPhotoBtns = document.querySelectorAll('.card__btn--right');

// Définition de l'index de la photo courante
let currentPhoto = 0;

// Fonction pour afficher une photo
function showPhoto(index) {
    allPhotos.forEach((photo) => {
        photo.classList.remove('card--active');
    });
    allPhotos[index].classList.add('card--active');
}

// Ecouteur d'événement sur les bouton "previous" pour faire défiler à la photo précédente
allPrevPhotoBtns.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        currentPhoto--;
        if (currentPhoto < 0) {
            currentPhoto = allPhotos.length - 1;
        }
        showPhoto(currentPhoto);
    });
});

// Ecouter d'évènement sur les boutons "next" pour faire défiler à la photo suivante
allNextPhotoBtns.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        currentPhoto++;
        if (currentPhoto >= allPhotos.length) {
            currentPhoto = 0;
        }
        showPhoto(currentPhoto);
    })
})

// Affichage initial de la première photo
showPhoto(currentPhoto);


