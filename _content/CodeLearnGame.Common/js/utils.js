
function playAudio(audioPath) {
    const audio = new Audio(audioPath);
    audio.play();
}

function scrollTo(elementId) {
    const element = document.getElementById(elementId);
    
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    }
}

function scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}