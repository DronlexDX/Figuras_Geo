var figura =document.getElementById("figura");

function circulo(){
    figura.classList.toggle("circulo");
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Haz hecho un circulo";
}

function moveTop(){
    figura.classList.toggle("moveTop");
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Te haz movido hacia arriba";

}

function moveLeft(){
    figura.classList.toggle("moveLeft");
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Te haz movido a la izquierda";
    
}

function Triangulo(){
    figura.classList.toggle("Triangulo");
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Haz hecho un triangulo";
}

function moveButton(){
    figura.classList.toggle("moveButton");
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Te haz movido hacia abajo";
    
}

function moveRight(){
    figura.classList.toggle("moveRight");
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Te haz movido a la derecha";
    
}

function Rombo(){
    figura.classList.toggle("Rombo");  
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Haz hecho un rombo";
}

function Huevo(){
    figura.classList.toggle("Huevo"); 
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Haz hecho un huevo"; 
}

function Color(){
    figura.classList.toggle("Color"); 
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Haz cambiado de color"; 
}

function Pacman(){
    figura.classList.toggle("Pacman"); 
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Haz hecho un pacman"; 
}

function Luna(){
    figura.classList.toggle("Luna");  
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Haz creado una luna";
}

function Imagen(){
    figura.classList.toggle("Imagen");  
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Haz introducido una imagen";
}
function Color(){
const parteizquierda = document.querySelector(".left");
const partederecha = document.querySelector(".right");
parteizquierda.classList.toggle("active");
partederecha.classList.toggle("active");
let titulo = document.querySelector(".fig");
titulo.innerText = "Haz cambiado el color principal";
}

function Gif(){
    figura.classList.toggle("Gif");  
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Gif";
}

function Hoja(){
    figura.classList.toggle("Hoja");
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Haz hecho una hoja";  
}

function Rectangulo(){
    figura.classList.toggle("Rectangulo");  
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Haz hecho un rectangulo";
}


function Trapecio(){
    figura.classList.toggle("Trapecio");  
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Has hecho un trapecio";
}

function panelLateral(){
    const panel = document.querySelector(".panel-lateral");
    panel.classList.toggle("active");
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Panel lateral";
}

function PanelSuperior(){
    const panel = document.querySelector(".panel-superior");
    panel.classList.toggle("active");
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Panel superior";
}

function ImagenFondo(){
    const body = document.querySelector(".ImagenFondo");
    body.classList.toggle("active");
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Cambiar ImagenFondo";
} 


function diamante(){
    figura.classList.toggle("diamante");  
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Has hecho un diamante";
}