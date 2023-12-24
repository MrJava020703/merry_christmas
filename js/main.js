
//Loader Function
function loader() {
    document.querySelector('.loader').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 5);
}

window.onload = fadeOut();