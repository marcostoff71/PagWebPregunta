const spanContainer = document.querySelector(".container-pregunta").getElementsByTagName("span").item(0);
const btnSi =document.getElementById("btnSi");
const btnNo =document.getElementById("btnNo");
function agregaAnimacion(){
    spanContainer.classList.remove("animate-pregunta");
    void spanContainer.offsetWidth;
    spanContainer.classList.add("animate-pregunta");
}
window.addEventListener('DOMContentLoaded',()=>{
})
setInterval(agregaAnimacion,2000);


// Animacion de corazones
const menIzq=document.getElementById('conte-left')
const menDer=document.getElementById('conte-rigth')

function crearNodo(can){
    let containerCora =document.createElement('div');
    containerCora.style.animationDelay=`${getRandomInt(1,can)*0.3}s`;
    containerCora.classList.add('container-cora');
    containerCora.innerHTML=`<i class="fa-solid fa-heart"></i>`;
    containerCora.style.fontSize='1rem'
    containerCora.style.pointerEvents='none'
    return containerCora;
}
function llenarElementos(can){

    for(let i=0;i<can;i++){
        
        let coraDer=crearNodo(can);
        coraDer.classList.add('container-cora--rigth');
        menDer.appendChild(coraDer);
    
        let coraIzq=crearNodo(can);
        coraIzq.classList.add('container-cora--left');
        menIzq.appendChild(coraIzq);
    }

}
llenarElementos(20);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

btnSi.addEventListener('click',()=>{

    menDer.childNodes.forEach(e=>{
        animarCora(e,'der')
    });

    menIzq.childNodes.forEach(e=>{
        animarCora(e,'izq')
    })

    modal.classList.add('modal--show');
    setTimeout(()=>{
        modal.classList.remove('modal--show');
        
    },2000);
    setTimeout(()=>{

        mandarMensaje();
    },5000);


})

function mandarMensaje(){
    
    let url="https://wa.me/525520787346?text=Mira"
    abrirNuevoTab(url);
}
function abrirNuevoTab(url) {
    // Abrir nuevo tab
    var win = window.open(url, '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
    win.focus();
}
function animarCora(e,dire){
    e.animate([
        {
            transform:`
                translateY(${getRandomInt(20,170)}px)
                translateX(${dire=='der'?'-':''}${getRandomInt(20,170)}px)
                rotate(${getRandomInt(0,360)}deg)
            `,
            opacity:1
        }
    ],{
        duration:getRandomInt(500,1000),
        iterations:5,
        delay:getRandomInt(0,100)
    })
}


const modal=document.querySelector(".modal");


function mostrarModal(){
    modal.classList.add("modal--show");
}

btnNo.addEventListener('mouseover',moverBtnNo);
btnNo.addEventListener('click',moverBtnNo)
function moverBtnNo(){                      
    btnNo.style.position='absolute';
    let maxX=window.innerWidth - btnNo.offsetWidth;
    let maxY=window.innerHeight - btnNo.offsetHeight;

    let x=getRandomInt(0,maxX);
    let y=getRandomInt(0,maxY);

    btnNo.style.left=`${x}px`;
    btnNo.style.top=`${y}px`;


    console.table({x,y});
}