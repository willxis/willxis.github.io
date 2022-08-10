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
}