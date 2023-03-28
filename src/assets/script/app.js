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
});

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
cardContainerElt.appendChild(prevPhotoBtnElt);
cardContainerElt.appendChild(nextPhotoBtnElt);



// Gestion du slider de photos
// Récupération des cards, ainsi que des boutons
const allCardsElt = cardContainerElt.querySelectorAll('.card');
const prevPhotoBtn = document.querySelector("body > main > section > div > button.card__btn.card__btn--left");
const nextPhotoBtn = document.querySelector("body > main > section > div > button.card__btn.card__btn--right");

// Définition de l'index de la card courante
let currentIndexCard = 0;


// Fonction pour afficher les cards
function showCard(index) {
    // Suppression des class sur toutes les cards
    allCardsElt.forEach((card) => {
        card.classList.remove('card--active', 'card--active--left', 'card--active--right');
    });
    // Si la largeur de l'écran est supérieure à 960px, afficher 2 cards à la fois
    if (window.matchMedia('(min-width: 960px)').matches) {
        // Définition de l'index de la card suivante (ou de la première card si on est à la fin du tableau)
        let nextIndex = index + 1 < allCardsElt.length ? index + 1 : 0;
        // Ajout de la classe 'card--active' sur 2 cards
        allCardsElt[index].classList.add('card--active');
        allCardsElt[nextIndex].classList.add('card--active');
        // Si l'index de la la carte suivante est 0 alors j'attribue une classe '--right' et '--left' pour gérer la disposition
        if (nextIndex === 0) {
            allCardsElt[index].classList.add('card--active--left');
            allCardsElt[nextIndex].classList.add('card--active--right');
        } 
    } else {
        // Sinon, afficher une seule card
        allCardsElt[index].classList.add('card--active');
    }
    
};

// Ecouteur d'événement sur les bouton "previous" pour faire défiler à la card précédente
prevPhotoBtn.addEventListener('click', (event) => {
        event.preventDefault();
        currentIndexCard--;
        if (currentIndexCard < 0) {
            currentIndexCard = allCardsElt.length - 1;
        }
        showCard(currentIndexCard);
    });

// Ecouter d'évènement sur les boutons "next" pour faire défiler à la card suivante
nextPhotoBtn.addEventListener('click', (event) => {
        event.preventDefault();
        currentIndexCard++;
        if (currentIndexCard >= allCardsElt.length) {
            currentIndexCard = 0;
        }
        showCard(currentIndexCard);
        console.log(currentIndexCard);
    });



// Affichage initial des cards
showCard(currentIndexCard);

// Appel de la fonction lors du resize
window.addEventListener('resize', (event) => {
    showCard(currentIndexCard);
})
