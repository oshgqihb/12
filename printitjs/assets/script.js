const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const nbSlides = slides.length;	// Stocke dans nbSlides le nombre de slides
let dotsDiv = document.querySelector(".dots"); // Stocke dans dotsDiv la div .dots


for (i = 0; i < nbSlides; i++) { // Boucle qui créé les 4 dots du carrousel
	if (i == 0) {
		dotsDiv.innerHTML = "<div class='dot dot_selected'></div>";
	} else {
		dotsDiv.innerHTML += "<div class='dot'></div>";
	}
}

let dotNumber = 0; // Retourne au slide 0
let bannerImage = document.querySelector(".banner-img"); // Stocke dans bannerImage l'image du carrousel
let bannerText = document.querySelector("#banner p"); // Stocke dans bannerText le texte du carrousel

function slideChangePlus() { // Fonction qui passe au slide suivant
	if (dotNumber < nbSlides - 1) { // Si dotNumber < nbSlides-1 alors on passe au slide suivant

		dotNumber++;
		document.querySelector(".dot_selected").classList.remove("dot_selected");
		// On enleve la classe .dot_selected de l'élément contenant la classe .dot_selected
		document.querySelectorAll(".dot")[dotNumber].classList.add("dot_selected");
		// Sélection du "dotNumber"ième élement .dot et ajout de la classe .dot_selected
		bannerImage.src = "./assets/images/slideshow/" + slides[dotNumber].image;
		// Changement de la propriété src de bannerImage : on concatène le début de l'URL de l'image avec
		// la propriété image du tableau slides correspondant à dotNumber
		bannerText.innerHTML = slides[dotNumber].tagLine;
		// Idem qu'au-dessus mais pour le texte en changeant la propriété tagLine

	} else { // Sinon ça veut dire qu'on est au dernier slide, alors on revient au slide 0

		dotNumber = 0;
		document.querySelector(".dot_selected").classList.remove("dot_selected");
		document.querySelectorAll(".dot")[dotNumber].classList.add("dot_selected");
		bannerImage.src = "./assets/images/slideshow/" + slides[dotNumber].image;
		bannerText.innerHTML = slides[dotNumber].tagLine;
		
	}
}

function slideChangeMinus() { // Fonction qui passe au slide précédent
	if (dotNumber > 0) { // Si dotNumber > 0 alors on passe au slide précédent
		dotNumber--;
		document.querySelector(".dot_selected").classList.remove("dot_selected");
		document.querySelectorAll(".dot")[dotNumber].classList.add("dot_selected");
		bannerImage.src = "./assets/images/slideshow/" + slides[dotNumber].image;
		bannerText.innerHTML = slides[dotNumber].tagLine;
	} else { // Sinon cela veut dire qu'on est au premier slide, donc on revient au dernier
		dotNumber = nbSlides - 1;
		document.querySelector(".dot_selected").classList.remove("dot_selected");
		document.querySelectorAll(".dot")[dotNumber].classList.add("dot_selected");
		bannerImage.src = "./assets/images/slideshow/" + slides[dotNumber].image;
		bannerText.innerHTML = slides[dotNumber].tagLine;
	}
}

let leftArrow = document.querySelector(".arrow_left"); // Stocke dans leftArrow la fleche gauche
let rightArrow = document.querySelector(".arrow_right"); // Stocke dans rightArrow la fleche droite

rightArrow.addEventListener("click", slideChangePlus); // Si clic sur flèche droite -> fonction slideChangePlus
leftArrow.addEventListener("click", slideChangeMinus); // Si clic sur flèche gauche -> fonction slideChangeMinus



// Exemple de tableau plus simple que celui des slides
const listeFilms = ["Retour vers le futur", "Game of Thrones", "Dumb et dumber", "Titanic"];

let filmVariable = 0;
filmVariable++;
console.log(filmVariable);

let filmVu = listeFilms[filmVariable];
console.log(filmVu);