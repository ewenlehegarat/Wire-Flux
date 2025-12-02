const buttonGauche = document.querySelector('.bouton_gauche')
const buttonDroite = document.querySelector('.bouton_droite')
const hiddenDiv = document.querySelectorAll('.hidden_div')
const buttonPlay = document.querySelectorAll('.button_play')

buttonGauche.addEventListener('mouseover', function(){
    buttonGauche.src = 'img/button_gauche_hover.png'
})

buttonGauche.addEventListener('mouseout', function(){
    buttonGauche.src = 'img/bouton_gauche.png'
})


buttonDroite.addEventListener('mouseover', function(){
    buttonDroite.src = 'img/button_droite_hover.png'
})

buttonDroite.addEventListener('mouseout', function(){
    buttonDroite.src = 'img/button_droite.png'
})


buttonPlay.forEach(buttonplay => {
    buttonplay.addEventListener('mouseover', function(){
        buttonplay.src = 'img/Button_play_hover.png'
    })

    buttonplay.addEventListener('mouseout', function(){
        buttonplay.src = 'img/Button_play.png'
    })
});