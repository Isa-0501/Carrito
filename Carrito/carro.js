var polvo = document.querySelector('.polvo')
var fondo = document.querySelector('.fondo')
var carro = document.querySelector('.carro')
var llantauno = document.querySelector('.llantauno')
var llantados = document.querySelector('.llantados')
var luz = document.querySelector('.luz')

fondo.addEventListener('click', Mover)

function Mover (){
    carro.classList.add('carro_mover')
    fondo.classList.add('fondo_mover')
    llantauno.classList.add('llantas_mover')
    llantados.classList.add('llantas_mover')
    polvo.classList.remove('oculto')
    luz.classList.remove('oculto')
}
