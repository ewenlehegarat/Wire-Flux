const buttonInscription = document.querySelector('.sinscrire');
const buttonConnection = document.querySelector('.seconnecter');
const formulaireInscription = document.querySelector('.formulaire_inscription')
const formulaireConnection = document.querySelector('.formulaire_connection')

buttonInscription.addEventListener('click', () =>{
    if(buttonConnection.style.zIndex = 2){
        buttonInscription.style.zIndex = 2
        buttonConnection.style.zIndex = 1
        formulaireInscription.style.display = "flex"
        formulaireConnection.style.display = "none"
    };
});
buttonConnection.addEventListener('click', () =>{
    if(buttonInscription.style.zIndex = 2){
        buttonConnection.style.zIndex = 2
        buttonInscription.style.zIndex = 1
        formulaireConnection.style.display = "flex"
        formulaireInscription.style.display = "none"
    };
});