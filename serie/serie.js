const API_KEY = 'f4cae5139d261865910d98b7d08d4181'

async function getSeries() {
  try{
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=fr-FR`)
    const data = await response.json()
    data.results.forEach(serie => {
        const imgUrl = serie.poster_path
        ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
        : "Pas d'affiche";

        const afficheSerie = document.createElement('div')
        afficheSerie.classList.add('affiche')
        const hiddenDiv = document.createElement('div')
        hiddenDiv.classList.add('hidden_div')
        afficheSerie.appendChild(hiddenDiv)
        const divButton = document.createElement('div')
        divButton.classList.add('button')
        afficheSerie.appendChild(divButton)

        const afficheImg = document.createElement('img')
        afficheImg.classList.add('affiche_serie')
        afficheImg.src = imgUrl
        afficheImg.alt = `affiche ${serie.title} image`
        afficheImg.ariaHidden = 'true'
        afficheImg.title = `Séries ${serie.title}`
        hiddenDiv.appendChild(afficheImg)

        const titreSerie = document.createElement('h4')
        titreSerie.textContent = serie.title
        divButton.appendChild(titreSerie)

        const serieFlex = document.querySelector('.series_flex')
        serieFlex.appendChild(afficheSerie)

        const buttonPlay = document.createElement('img')
        buttonPlay.src = '/img/button_play.png'
        buttonPlay.classList.add('button_play')
        buttonPlay.title = 'Play'
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
    console.error('Erreur lors du chargement des séries :', error)
  }
}
getSeries()