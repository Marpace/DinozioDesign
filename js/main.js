
// *********************************  NAVBAR SECTION  *******************************


const toggler = document.querySelector('#navbar-toggler');
const div1 = document.querySelector('#toggler-div-1');
const div2 = document.querySelector('#toggler-div-2');
const div3 = document.querySelector('#toggler-div-3');
const smallNav = document.querySelector('#small-nav');
const navFiller = document.querySelector('#nav-filler');
const navWrap = document.querySelector('#nav-wrap');
const navDiv = document.querySelector('#small-nav').children[0];

const animateToggler = function(element){
    element.style.top = "15px"
    element.style.width = "70%"
    element.style.transition = ".1s"
}
const animateX = function(element){
    element.style.top = ""
    element.style.width = ""
    element.style.transition = ""
}
toggler.addEventListener('click', function(){
    if(getComputedStyle(div2).opacity === "1"){
        animateToggler(div1);
        animateToggler(div3);
        div2.style.opacity = "0"
        setTimeout(function(){
            div1.style.transform = "rotate(45deg)";
            div3.style.transform = "rotate(-45deg)";
        }, 100);

        smallNav.style.height = "230px";
        smallNav.style.padding = " 20px 30px";

    } else {
        div1.style.transform = "";
        div3.style.transform = "";
        
        setTimeout(() => {
           animateX(div1);
           animateX(div3) 
           div2.style.opacity = "1"
        }, 100);
        smallNav.style.height = "0";
        smallNav.style.padding = "0 30px";
    }
})












// ***************************************  FOOTER  *********************************


const footerBtn = document.querySelector('#footer-social').children[0];

footerBtn.addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

const currentYear = new Date().getFullYear();
const year = document.querySelector('#copyright').children[0];
year.innerHTML = `© ${currentYear}`

// SCREEN SIZE 768px OR HIGHER

if(window.screen.width >= 768){

    // Navbar animation 

    window.onscroll = function() {scrollNav()};

    function scrollNav() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navFiller.style.height = "50px"
            smallNav.style.height = "50px"
            navDiv.style.right = "50%"
            navDiv.style.marginRight = "-184px" 
            navDiv.style.top = "6px"
            navWrap.style.display = "none"
        } else {
            setTimeout(() => {
                navWrap.style.display = "flex"
                smallNav.style.justifyContent = "flex-end"
            }, 200);
            navFiller.style.height = "80px"
            navDiv.style.right = "100px"
            navDiv.style.top = "20px"
            navDiv.style.marginRight = "" 
            smallNav.style.height = ""
        }
    }

}



