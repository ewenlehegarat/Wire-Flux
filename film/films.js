const API_KEY = 'f4cae5139d261865910d98b7d08d4181'
const BASE_PATH = '/Wire-Flux'

async function getFilms() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=fr-FR`)
    const data = await response.json()
    data.results.forEach(film => {
      const imgUrl = film.poster_path
        ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
        : "Pas d'affiche"

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
      afficheImg.ariaHidden = 'true'
      afficheImg.title = `Film ${film.title}`
      hiddenDiv.appendChild(afficheImg)

      const titreFilm = document.createElement('h4')
      titreFilm.textContent = film.title
      divButton.appendChild(titreFilm)

      document.querySelector('.films_flex').appendChild(afficheFilm)

      const buttonPlay = document.createElement('img')
      buttonPlay.src = `${BASE_PATH}/img/button_play.png`
      buttonPlay.classList.add('button_play')
      buttonPlay.title = 'Play'
      hiddenDiv.appendChild(buttonPlay)

      buttonPlay.addEventListener('mouseover', () => {
        buttonPlay.src = `${BASE_PATH}/img/button_play_hover.png`
      })
      buttonPlay.addEventListener('mouseout', () => {
        buttonPlay.src = `${BASE_PATH}/img/button_play.png`
      })
      hiddenDiv.addEventListener('mouseover', () => {
        buttonPlay.style.visibility = 'visible'
        buttonPlay.style.opacity = '1'
      })
      hiddenDiv.addEventListener('mouseout', () => {
        buttonPlay.style.visibility = 'hidden'
        buttonPlay.style.opacity = '0'
      })
    })
  } catch(error) {
    console.error('Erreur lors du chargement des films :', error)
  }
}
getFilms()