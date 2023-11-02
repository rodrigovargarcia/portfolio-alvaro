var typed = new Typed(".auto-type", {
    strings: ["Developer", "C#", ".NET", "Full Stack Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var typed = new Typed(".background-white", {
    strings: ["Proyectos", "Proyectos", "Proyectos"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var typed = new Typed(".background-white2", {
    strings: ["Tecnologías", "Tecnologías", "Tecnologías"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var typed = new Typed(".background-3", {
    strings: ["Estudios", "Estudios", "Estudios"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var typed = new Typed(".background-white3", {
    strings: ["Contacto", "Contacto", "Contacto"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


window.sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
    })

    sr.reveal('.scroll-sobremi', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
    })

    sr.reveal('.card-iure', {
        duration: 3000,
        origin: 'left',
        distance: '400px'
    })

    sr.reveal('.card-tp', {
        duration: 1500,
        origin: 'left',
        distance: '400px'
    })

    sr.reveal('.card-python', {
        duration: 3000,
        origin: 'right',
        distance: '400px'
    })

    sr.reveal('.nombre', {
        delay: 500
    })

    sr.reveal('.presentacion', {
        delay: 1000
    })

    sr.reveal('.presentacion2', {
        delay: 2500
    })

    sr.reveal('.presentacion4', {
        delay: 3800
    })

    sr.reveal('.tecno-flip', {
        duration: 4000,
        rotate:{
            x:1,
            y:180,
        }
    })

    sr.reveal('.tecno-flip2', {
        duration: 6000,
        rotate:{
            x:1,
            y:180,
        }
    })

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector(".go-top-container")
        .classList.add("show");        
    }else{
        document.querySelector(".go-top-container")
        .classList.remove("show"); 
    }
}

document.querySelector(".go-top-container")
.addEventListener("click", () =>{
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})