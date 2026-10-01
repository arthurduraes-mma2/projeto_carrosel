const telaCarousel = document.getElementById("carousel"); 
const btnEsquerda = document.querySelector('#btnEsquerda'); 
const btnDireita = document.querySelector('#btnDireita'); 

const imagens = [ 
    './img/Design-sem-nome-90-1024x576.jpg', 
    './img/images (1).jpg', 
    './img/images.jpg'
]; 

let indiceAtual = 0; 
let temporizador; 

function atualizarCarrossel(){ 
    telaCarousel.style.backgroundImage = `url('${imagens[indiceAtual]}')`; 
} 
 
btnDireita.addEventListener("click",()=>{ 
    indiceAtual++; 
    if(indiceAtual >= imagens.length){ 
        indiceAtual=0; 
    } 
    atualizarCarrossel();  

    clearTimeout(temporizador); 
    temporizador = setTimeout(() => { 
        btnDireita.click(); 
    }, 3000); 
}); 
 
btnEsquerda.addEventListener("click",()=>{ 
    indiceAtual--; 
    if(indiceAtual<0){ 
        indiceAtual = imagens.length-1; 
    } 
    atualizarCarrossel(); 
 
    clearTimeout(temporizador); 
    temporizador = setTimeout(() => { 
        btnEsquerda.click(); 
    }, 3000); 
}); 
  
atualizarCarrossel(); 

clearTimeout(temporizador); 

temporizador = setTimeout(() => { 
    btnDireita.click(); 
}, 3000);