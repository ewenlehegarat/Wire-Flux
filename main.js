const API_KEY = 'f4cae5139d261865910d98b7d08d4181'

async function getFilms() {
  try{
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=fr-FR`)
    const data = await response.json()
    data.results.slice(0, 5).forEach(film => {
        const imgUrl = film.poster_path
        ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
        : "Pas d'affiche";

        const afficheFilm = document.createElement('div')
        afficheFilm.classList.add('affiche')
        const hiddenDiv = document.createElement('div')
        hiddenDiv.classList.add('hidden_div')
        afficheFilm.appendChild(hiddenDiv)
        const divButton = document.createElement('div')
        divButton.classList.add('button')
        afficheFilm.appendChild(divButton)

        const afficheImg = document.createElement('img')
        afficheImg.classList.add('affiche_film')
        afficheImg.src = imgUrl
        afficheImg.alt = `affiche ${film.title} image`
        hiddenDiv.appendChild(afficheImg)

        const titreFilm = document.createElement('a')
        titreFilm.textContent = film.title
        divButton.appendChild(titreFilm)

        const filmFlex = document.querySelector('.films_flex')
        filmFlex.appendChild(afficheFilm)

        const buttonPlay = document.createElement('img')
        buttonPlay.src = '../img/button_play.png'
        buttonPlay.classList.add('button_play')
        hiddenDiv.appendChild(buttonPlay)

        buttonPlay.addEventListener('mouseover', ()=>{
            buttonPlay.src = '../img/button_play_hover.png'
        })
        buttonPlay.addEventListener('mouseout', ()=>{
            buttonPlay.src = '../img/button_play.png'
        })

        hiddenDiv.addEventListener('mouseover', ()=>{
            buttonPlay.style.visibility = 'visible'
            buttonPlay.style.opacity = '1'
        })
        hiddenDiv.addEventListener('mouseout', ()=>{
            buttonPlay.style.visibility = 'hidden'
            buttonPlay.style.opacity = '0'
        })
    })
  }catch(error){
    console.error('Erreur lors du chargement des films :', error)
  }
}
getFilms()

const imageTheRookie = document.querySelector('.the_rookie')
const imageMandalorian = document.querySelector('.the_mandalorian')
const imageOrangeIsTheNewBlack = document.querySelector('.orange_is_the_new_black')

if(window.innerWidth <= 1199){
    
    imageTheRookie.addEventListener('click', ()=>{
        if(imageTheRookie.style.height = '125px'){
            imageTheRookie.style.height = '125px'
            imageMandalorian.style.height = '30px'
            imageOrangeIsTheNewBlack.style.height = '30px'
            imageMandalorian.style.objectPosition = '50% 15%'
            imageOrangeIsTheNewBlack.style.objectPosition = '50% 15%'
        }
    })
    imageMandalorian.addEventListener('click', ()=>{
        if(imageMandalorian.style.height = '125px'){
            imageTheRookie.style.height = '30px'
            imageMandalorian.style.height = '125px'
            imageOrangeIsTheNewBlack.style.height = '30px'
            imageMandalorian.style.objectPosition = '50% 100%'
            imageOrangeIsTheNewBlack.style.objectPosition = '50% 15%'
            imageTheRookie.style.objectPosition = '50% 7%'
        }
    })
    imageOrangeIsTheNewBlack.addEventListener('click', ()=>{
        if(imageOrangeIsTheNewBlack.style.height = '125px'){
            imageTheRookie.style.height = '30px'
            imageMandalorian.style.height = '30px'
            imageOrangeIsTheNewBlack.style.height = '125px'
            imageMandalorian.style.objectPosition = '50% 15%'
            imageOrangeIsTheNewBlack.style.objectPosition = '50% 100%'
            imageTheRookie.style.objectPosition = '50% 7%'
        }
    })

}else{
    imageTheRookie.addEventListener('click', ()=>{
    if(imageTheRookie.style.width = '100px'){
            imageTheRookie.style.width = '890px'
            imageMandalorian.style.width = '100px'
            imageOrangeIsTheNewBlack.style.width = '100px'
        }
    })

    imageMandalorian.addEventListener('click', ()=>{
        if(imageMandalorian.style.width = '100px'){
            imageTheRookie.style.width = '100px'
            imageMandalorian.style.width = '890px'
            imageOrangeIsTheNewBlack.style.width = '100px'
            imageTheRookie.style.objectPosition = '52% 50%'
        }
    })

    imageOrangeIsTheNewBlack.addEventListener('click', ()=>{
        if(imageOrangeIsTheNewBlack.style.width = '100px'){
            imageTheRookie.style.width = '100px'
            imageMandalorian.style.width = '100px'
            imageOrangeIsTheNewBlack.style.width = '890px'
        }
    })
}