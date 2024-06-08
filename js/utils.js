
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