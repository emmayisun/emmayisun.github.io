document.addEventListener('DOMContentLoaded', (event) => {
    const videoElement = document.getElementById('player');
    let isPip = false;

    window.addEventListener('scroll', () => {
        const videoPosition = videoElement.getBoundingClientRect();
        if ((videoPosition.top < window.innerHeight && videoPosition.bottom >= 0) && !isPip) {
            videoElement.classList.remove('pip-video');
            isPip = false;
        } else if (!isPip) {
            videoElement.classList.add('pip-video');
            isPip = true;
        }
    });
});
