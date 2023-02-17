const hamburguer=document.querySelector('.hamburguer');
const menu=document.querySelector('#menu');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle('mostrar')
})

window.addEventListener('click',e=>{
    if (menu.classList.contains('mostrar') && e.target!=menu && e.target!=hamburguer) {

        menu.classList.toggle('mostrar')

    }
})

const btnActive=document.querySelectorAll('.btn-categoria')

btnActive.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        btnActive.forEach(boton=>boton.classList.remove('active'));
        e.currentTarget.classList.add('active')
    })
})


const seccion= document.querySelectorAll('.seccion')
const items= document.querySelectorAll('.items')


function activeMenu(){
    let len=seccion.length;
    while(--len && window.scrollY + 97 < seccion[len].offsetTop){}
    items.forEach(it=>it.classList.remove('active'));
    items[len].classList.add('active')
}

activeMenu()

window.addEventListener('scroll',activeMenu)