// boton-menu active .nav-menu-visible
const navToogle = document.querySelector(".boton-menu") //Boton
const navMenu = document.querySelector(".nav-menu") //Listado
const opcion = document.querySelector(".nav-menu-item") //Opcion

navToogle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu-visible")
})

navMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu-invisible")
})