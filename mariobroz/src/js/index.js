const btnTrailer = document.querySelector('.botao-trailer');
const btnFechar = document.querySelector('.fechar-modal');
const modal = document.querySelector('.modal');
const video = document.getElementById("video");
const linkVideo = video.src;

function alternarModal() {    
    modal.classList.toggle("aberto"); 
}

btnTrailer.addEventListener("click", () => {
    alternarModal(); 
    video.setAttribute("src", linkVideo);
});

btnFechar.addEventListener("click", ()=> {
    alternarModal(); 
    video.setAttribute("src", "");
});