
// //Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
// function seleccionar(links) {
//     var opciones = document.querySelectorAll('#links a');
//     opciones[0].className = "";
//     opciones[1].className = "";
//     opciones[2].className = "";
//     opciones[3].className = "";
//     opciones[4].className = "";
//     links.className = "seleccionado";
// }

// /*Animacion menu responsive*/
//  addEventListener('DOMContentLoaded',() => {
//      const btn_menu = document.querySelector('.btn_menu')
//     if(btn_menu){
//          btn_menu.addEventListener('click', () => {
//              const menu_items = document.querySelector('.menu_items')
//              menu_items.classList.toggle('show')
//          })

//     }
//  })






//apartado de tabs-formacion
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab =>{
    tab.addEventListener("click", () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("qualification__active")
        })
        target.classList.add("qualification__active")

        tabs.forEach(tab =>{
            tab.classList.remove("qualification__active")
        })
        tab.classList.add("qualification__active")
    })
})




//Scroll to button
let buttonTop= document.getElementById("topButton");
window.onscroll= function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        buttonTop.style.display="block";
    }else{
        buttonTop.style.display="none";
    }
}

function topFunction(){
    document.body.scrollTop=0; //safari
    document.documentElement.scrollTop=0;//chrome, firefox ,ie y opera.
}

//download cv with animation
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }


//active link
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach((current)=>{
      const  sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop-50;
      const sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav__menu a[href *='+sectionId +']').classList.add('active__link');
      }else{
        document.querySelector('.nav__menu a[href*='+sectionId +']').classList.remove('active__link');
      }
    })
}

window.addEventListener('scroll',scrollActive);



function sendEmailDefault(){
    var email = "mjesus.duenas.recuero@gmail.com";
    window.open(`mailto:${email}`);
  }