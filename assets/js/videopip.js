document.addEventListener('DOMContentLoaded', () => {
    const youtubeContainer = document.getElementById('youtube-player-container');
    
    window.addEventListener('scroll', () => {
        const rect = youtubeContainer.getBoundingClientRect();
        if (window.innerHeight < rect.top || rect.bottom < 0) {
            // The video is out of view, enable PiP mode
            youtubeContainer.classList.add('pip-video');
        } else {
            // The video is in view, disable PiP mode
            youtubeContainer.classList.remove('pip-video');
        }
    });
});
