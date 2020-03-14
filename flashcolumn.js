window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let elementTitle = document.getElementById('banner-title');
    let clicker = document.getElementById('clicker');
    clicker.addEventListener('click', function(){
        elementTitle.classList.remove('banner');
        elementTitle.classList.add('flanner');
    });
    
});