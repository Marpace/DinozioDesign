
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


// *********************************  ABOUT SECTION  *******************************



const arrowRight = document.querySelector('#arrow-right');
const arrowLeft = document.querySelector('#arrow-left');
const indicator = document.querySelector('#inner-indicator');
const number = document.querySelector('#number')
const who = document.querySelector('#who')
const what = document.querySelector('#what')


arrowRight.addEventListener('click', function(){
    arrowRight.children[0].style.color = "grey";
    arrowLeft.children[0].style.color = '#FE7F24';
    indicator.style.right = "0";
    who.style.opacity = "0";
    what.style.opacity = "1";
    number.innerHTML = "2/2";
});



arrowLeft.addEventListener('click', function(){
    arrowLeft.children[0].style.color = "grey";
    arrowRight.children[0].style.color = '#FE7F24';
    indicator.style.right = "50%";
    what.style.opacity = "0";
    who.style.opacity = "1";
    number.innerHTML = "1/2";
});






// $('#arrow-right').click(function(){
//     $(this).children().css('color', 'grey');
//     $('#inner-indicator').addClass('indicator-right');
//     $('#number').html('2/2');
//     $('#arrow-left').children().css('color', '#FE7F24')
//     $('#who').animate({
//         opacity: "0"
//     }, 1000, function(){
//         $('#who').css('display', "none")
//     });
//     $('#what').delay(2000).animate({
//         opacity: "1"
//     }, 1000);
// });


// $('#arrow-left').click(function(){
//     $(this).children().css('color', 'grey');
//     $('#inner-indicator').removeClass('indicator-right');
//     $('#number').html('1/2');
//     $('#arrow-right').children().css('color', '#FE7F24')
//     $('#what').animate({
//         opacity: "0"
//     }, 500);
//     $('#what').css('display', "none")
//     $('#who').css('display', 'block')
//     $('#who').animate({
//         opacity: "1"
//     }, 500);
// });




// const card1 = $('#card-1')
// const card2 = $('#card-2')
// const title1 = $('#title-1')
// const title2 = $('#title-2')

// const titles = [title1, title2]
// const cards = [card1, card2];

// const switchCard = function(){
//   cards.forEach(card => {

//     if(card.hasClass('front')){
//         card.animate({
//             top: "40px",
//             opacity: 0
//         }, 300, function(){
//             card.css('top', '');
//             card.addClass('back');
//         });
//         card.delay(300).animate({
//             opacity: 1
//         });

//         setTimeout(function(){
//             card.addClass('back');
//             card.removeClass('front');
//         }, 300);
//     } else if (card.hasClass('back')){
//         setTimeout(function(){
//             card.addClass('front');
//             card.removeClass('back');
//         }, 200);
//     }
//   });
// };

// const selector1 = $('#selector-1')
// const selector2 = $('#selector-2')

// const selectors = [selector1, selector2];

// let animating = false;

// selector1.click(function(){
//     if(!animating){
//         animating = true;
//         if(!selector1.hasClass('active')) {
//             switchCard();
//             selector1.addClass('active');
//             selector2.removeClass('active');
//             card1.html('A full service survey company with over a decade experience in design and CAD. We measure any and all standing structures and produce accurate drawings of existing conditions. Our customers use our services to template their work, and to get a baseline of the existing structure in order to do their design and construction work with ease of mind and certainty.');
//             setTimeout(() => {
//                 card2.html('');
//             }, 200);
//             title2.removeClass('title-active')
//             setTimeout(() => {
//                 title1.addClass('title-active')
//             }, 200);
//         }
//     }
//     setTimeout(() => {
//         animating = false;
//     }, 300);
// });
// console.log(title1)
// selector2.click(function(){
//     if(!animating){
//         animating = true;
//         if(!selector2.hasClass('active')) {
//             switchCard();
//             selector2.addClass('active');
//             selector1.removeClass('active');
//             card2.html('Our professionals measures the exterior and/or interior of the home, building or structure to create a three-dimensional representation of it. The process involves using lasers to capture dimensions. This method is much more accurate than blueprints and plans. As such, we delivery to you the most accurate as-built floor plans, elevation drawings, reflected ceiling plans, and any other intricate structure that you need for your sophisticated project.');
//             title1.css.left = "30px"
//             setTimeout(() => {
//                 card1.html('');
//             }, 200);
//             title1.removeClass('title-active')
//             setTimeout(() => {
//                 title2.addClass('title-active')
//             }, 200);
//         }
//     }
//     setTimeout(() => {
//         animating = false;
//     }, 300);
    
// });

// const firstCard = document.querySelector('#card-1')
// const secondCard = document.querySelector('#card-2')

const card = document.querySelector('#card-new');

const cardsOptions = {
    rootMargin: "0px",
    threshold: 0.5
};

const cardsCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
            observer.unobserve(card);
        }
        
    });
};

const cardObserver = new IntersectionObserver(cardsCallback, cardsOptions);

cardObserver.observe(card);







// *********************************  ACCORDION SECTION  *******************************


const plusIcons = document.getElementsByClassName('accordion-icon');
const icons = [...plusIcons];

const content = document.getElementsByClassName('acc-content');
const contentDivs = [...content];
const accordionImgDiv = document.querySelector('#templating-img-div');

icons.forEach(icon =>{
    icon.addEventListener('click', function(){
        if(getComputedStyle(icon.children[0]).transform === "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)"){ 
            contentDivs.forEach(div => {
                if(div.classList.contains('content-active') || div.classList.contains('content-active-desktop')){
                    div.classList.remove('content-active');
                    div.classList.remove('content-active-desktop');
                }
            });
            icons.forEach(icon => {
                icon.children[0].style.transform = "rotate(90deg)"
            });
            
            icon.children[0].style.transform = "rotate(0deg)";
            icon.parentElement.nextElementSibling.style.height = ''
            if(window.screen.width >= 768){
                icon.parentElement.nextElementSibling.classList.add('content-active-desktop')
            } else {
                icon.parentElement.nextElementSibling.classList.add('content-active')
            }
            const title = icon.previousElementSibling.innerHTML;
            accordionImgDiv.style.backgroundImage = `url(images/templating-${title}.jpg)`;

            

        } else {
            icon.children[0].style.transform = "rotate(90deg)";
            if(window.screen.width >= 768){
                icon.parentElement.nextElementSibling.classList.remove('content-active-desktop')
            } else {
                icon.parentElement.nextElementSibling.classList.remove('content-active')
            }
            setTimeout(() => {
                icon.parentElement.nextElementSibling.style.borderBottom = ""
            }, 400);
        }
    });
})


// ***************************************  FOOTER  *********************************


const footerBtn = document.querySelector('#footer-social').children[0];

footerBtn.addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


// SCREEN SIZE 768px OR HIGHER

if(window.screen.width >= 768){

    contentDivs[0].classList.add('content-active-desktop')
    icons[0].children[0].style.transform = "rotate(0deg)";



    const benefitsGroup = document.getElementsByClassName('benefits-group')
    const groups = [...benefitsGroup];
    const imgLeft = document.getElementsByClassName('img-left')
    const imgRight = document.getElementsByClassName('img-right')
    const textLeft = document.getElementsByClassName('text-left')
    const textRight = document.getElementsByClassName('text-right')

    const benefitsOptions = {
        rootMargin: "0px",
        threshold: 0.5
    };


    const benefitsCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.children[0].style.transform = "translateX(0)"
                entry.target.children[1].style.transform = "translateX(0)"
                entry.target.children[0].style.opacity = "1"
                entry.target.children[1].style.opacity = "1"
                console.log(entry.target.children[0])
               benefitsObserver.unobserve(entry.target)
            }
            
        });
    };

    const benefitsObserver = new IntersectionObserver(benefitsCallback, benefitsOptions);

    groups.forEach(group => {
        benefitsObserver.observe(group);
    })

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
                navFiller.style.height = "80px"
                navWrap.style.display = "flex"
                smallNav.style.justifyContent = "flex-end"
            }, 200);
            navDiv.style.right = "100px"
            navDiv.style.top = "20px"
            navDiv.style.marginRight = "" 
            smallNav.style.height = ""
        }
    }

}

const currentYear = new Date().getFullYear();
const year = document.querySelector('#copyright').children[0];
year.innerHTML = `© ${currentYear}`
