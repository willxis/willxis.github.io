/*
const aboutSection = document.getElementById('about-section')
const topAbout = aboutSection.offsetTop

const main = document.getElementById('main')
const mainHeight = main.offsetHeight
*/

const header = document.getElementById('home-header')

const profileCard = document.getElementById('profile-card')
const profileCardHeight = profileCard.offsetHeight

window.onscroll = function() {
    moveProfileCard()
}

function moveProfileCard() {
    let opacityValue = (100 - Math.trunc(window.pageYOffset) / 3);
    profileCard.style.opacity = opacityValue + '%';

    if (opacityValue > 50 ) {
        header.style.height = opacityValue + 'px' 
    }   else {
        header.style.height = '50px';
    }


    /*
    if((window.pageYOffset) == 55) {
        opacityBreakEven = Math.trunc(window.pageYOffset)
    }else if((window.pageYOffset) >= mainHeight/2 - (profileCardHeight/2)) {
        let opacityCalculada = (window.pageYOffset + opacityBreakEven) + '%';
        console.log('opacityCalculada ', opacityCalculada);
        profileCard.style.opacity = opacityCalculada;
        
        profileCard.classList.add('FixoNaEsquerda')
        profileCard.classList.add('FixoNaEsquerda')
    }
else {
        profileCard.style.opacity = '100%';
        profileCard.classList.remove('FixoNaEsquerda')
    }*/
}