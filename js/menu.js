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


