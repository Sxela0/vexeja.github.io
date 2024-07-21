
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');


    function fadeOutSplashScreen() {
        splashScreen.classList.add('fade-out');
        document.body.style.overflow = 'auto'; 
    }


    setTimeout(fadeOutSplashScreen, 300); // 0.3 seconds

    
    window.addEventListener('load', () => {
        setTimeout(fadeOutSplashScreen, 300); // 0.3 seconds
    });
});
