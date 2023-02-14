// //Functions for animations on Scroll
function appearOnScroll () {
    if(document.documentElement.scrollTop >= 200) {
    document.getElementById("first_card").className = "col-sm-4 animate__animated animate__fadeInTopLeft animate__slow"
}
    else{
        document.getElementById("first_card"). className ="col-sm-4 animate__animated"
    }
    if(document.documentElement.scrollTop >= 200) {
        document.getElementById("second_card"). className = "col-sm-4 animate__animated animate__fadeIn animate__slower"
    }
    else{
        document.getElementById('second_card').className = "col-sm-4 animate__animated"
    }
    if(document.documentElement.scrollTop >= 200) {
        document.getElementById('third_card').className = "col-sm-4  animate__animated animate__fadeInTopRight animate__slow"
    }
    else {
        document.getElementById('third_card').className = "col-sm-4 animate__animated"
    }
    // the Showcase animation
    if(document.documentElement.scrollTop >= 700 ) {
        document.getElementById('Showcase').className = "col-sm-12 animate__animated animate__zoomIn animate__slower"
    } 
    else{
        document.getElementById('Showcase').className = "col-sm-12 animate__animated"
    }
    if(document.documentElement.scrollTop >=1300) {
        document.getElementById('footerAnimation').className = "details animate__animated animate__slideInDown animate__slow"
    }  
}
window.addEventListener('scroll', appearOnScroll)

// window.addEventListener('scroll', ()=> {
//     const scrolled  = window.scrollY;
//     console.log('scrolled')
// })