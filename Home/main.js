const buttonGauche = document.querySelector('.button_gauche');
const buttonDroite = document.querySelector('.button_droite');

buttonGauche.addEventListener('mouseover', () => {
    buttonGauche.src = url('/img/button_gauche_hover.png');
})

buttonGauche.addEventListener('mouseout', () => {
    buttonGauche.src = url('/img/button_gauche.png');
})

buttonDroite.addEventListener('mouseover', () => {
    buttonDroite.src = url('/img/button_droite_hover.png');
})

buttonDroite.addEventListener('mouseout', () => {
    buttonDroite.src = url('/img/button_droite.png');
})