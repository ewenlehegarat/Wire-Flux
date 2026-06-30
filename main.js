const API_KEY = 'f4cae5139d261865910d98b7d08d4181';

async function getFilms() {
  try{
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=fr-FR`);
    const data = await response.json();

    data.results.slice(0, 5).forEach(film => {
        const imgUrl = film.poster_path
        ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
        : "Pas d'affiche";

        const afficheFilm = document.createElement('div');
        afficheFilm.classList.add('affiche');
        const hiddenDiv = document.createElement('div');
        hiddenDiv.classList.add('hidden_div');
        afficheFilm.appendChild(hiddenDiv);
        const divButton = document.createElement('div');
        divButton.classList.add('button');
        afficheFilm.appendChild(divButton);

        const afficheImg = document.createElement('img');
        afficheImg.classList.add('affiche_film');
        afficheImg.src = imgUrl;
        afficheImg.alt = `affiche ${film.title} image`;
        afficheImg.ariaHidden = 'true';
        afficheImg.title = `Film ${film.title}`
        hiddenDiv.appendChild(afficheImg);

        const titreFilm = document.createElement('h4');
        titreFilm.textContent = film.title;
        divButton.appendChild(titreFilm);

        const filmFlex = document.querySelector('.films_flex');
        filmFlex.appendChild(afficheFilm);

        const buttonPlay = document.createElement('img');
        buttonPlay.src = './img/Button_play.png';
        buttonPlay.classList.add('button_play');
        buttonPlay.title = 'Play'
        buttonPlay.ariaLabel = 'Lancer le film'
        hiddenDiv.appendChild(buttonPlay);

        buttonPlay.addEventListener('mouseover', ()=>{
            buttonPlay.src = './img/Button_play_hover.png';
        })
        buttonPlay.addEventListener('mouseout', ()=>{
            buttonPlay.src = './img/Button_play.png';
        })
        
        const buttonSliderGauche = document.querySelector('.bouton_gauche');
        buttonSliderGauche.title = 'Précédent';
        buttonSliderGauche.addEventListener('mouseover', ()=>{
            buttonSliderGauche.src = './img/button_gauche_hover.png';
        });
        buttonSliderGauche.addEventListener('mouseout', ()=>{
            buttonSliderGauche.src = './img/button_gauche.png';
        });
        
        const buttonSliderDroite = document.querySelector('.bouton_droite');
        buttonSliderDroite.title = 'Suivant';
        buttonSliderDroite.addEventListener('mouseover', ()=>{
            buttonSliderDroite.src = './img/button_droite_hover.png';
        });
        buttonSliderDroite.addEventListener('mouseout', ()=>{
            buttonSliderDroite.src = './img/button_droite.png';
        });

        const slides = [
            { src: "./img/slider_film_1.png", title: "Demon Slayer : Kimetsu no Yaiba La Forteresse Infinie" },
            { src: "./img/slider_film_2.png", title: "Avatar : de feu et de cendres" },
            { src: "./img/slider_film_3.png", title: "Dune : Deuxième Partie" },
            { src: "./img/slider_film_4.png", title: "Zootopie 2" },
        ];

        document.querySelectorAll(".slider").forEach((sliderEl) => {
            let currentIndex = 0;

            const sliderImage = sliderEl.querySelector("#slider_image");
            const sliderTitle = sliderEl.querySelector(".slider_absolute h3");
            const boutonGauche = sliderEl.querySelector(".bouton_gauche");
            const boutonDroite = sliderEl.querySelector(".bouton_droite");

            function updateSlide() {
                const slide = slides[currentIndex];
                sliderImage.src = slide.src;
                sliderImage.title = slide.title;
                sliderTitle.textContent = slide.title;
            }

            boutonDroite.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlide();
            });

            boutonGauche.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlide();
            });
        });

    });
  }catch(error){
    console.error('Erreur lors du chargement des films :', error);
  };
};
getFilms();

const imageTheRookie = document.querySelector('.the_rookie');
const imageMandalorian = document.querySelector('.the_mandalorian');
const imageOrangeIsTheNewBlack = document.querySelector('.orange_is_the_new_black');
const seriesImages = [imageTheRookie, imageMandalorian, imageOrangeIsTheNewBlack];

function applySeriesStyles(styles) {
    // pour chaque image de selection series
    seriesImages.forEach((image, index) => {
        // assigne les styles des images pour chaque image de selection series
        Object.assign(image.style, styles[index]);
    });
};

function updateSeriesBehavior() {
    const isMobile = window.innerWidth <= 1165;

    if (isMobile) {
        applySeriesStyles([
            { width: '100%', height: '125px', objectPosition: '50% 20%' },
            { width: '100%', height: '30px', objectPosition: '50% 15%' },
            { width: '100%', height: '30px', objectPosition: '50% 15%' }
        ]);
        imageTheRookie.onclick = () => applySeriesStyles([
            { height: '125px' },
            { height: '30px', objectPosition: '50% 15%' },
            { height: '30px', objectPosition: '50% 20%' }
        ]);
        imageMandalorian.onclick = () => applySeriesStyles([
            { height: '30px', objectPosition: '50% 7%' },
            { height: '125px', objectPosition: '50% 85%' },
            { height: '30px', objectPosition: '50% 15%' }
        ]);
        imageOrangeIsTheNewBlack.onclick = () => applySeriesStyles([
            { height: '30px', objectPosition: '50% 7%' },
            { height: '30px', objectPosition: '50% 15%' },
            { height: '125px', objectPosition: '50% 85%' }
        ]);
    } else {
        applySeriesStyles([
            { height: '400px', width: '890px', objectPosition: '50% 50%' },
            { height: '400px', width: '100px', objectPosition: '45% 50%' },
            { height: '400px', width: '100px', objectPosition: '95% 50%' }
        ]);
        imageTheRookie.onclick = () => applySeriesStyles([
            { width: '890px' },
            { width: '100px' },
            { width: '100px' }
        ]);
        imageMandalorian.onclick = () => applySeriesStyles([
            { width: '100px', objectPosition: '52% 50%' },
            { width: '890px' },
            { width: '100px' }
        ]);
        imageOrangeIsTheNewBlack.onclick = () => applySeriesStyles([
            { width: '100px' },
            { width: '100px' },
            { width: '890px' }
        ]);
    };
};

window.addEventListener('resize', updateSeriesBehavior);
updateSeriesBehavior();