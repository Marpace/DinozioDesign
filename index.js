const card1 = $('#card-1')
const card2 = $('#card-2')
const title1 = $('#title-1')
const title2 = $('#title-2')

const titles = [title1, title2]
const cards = [card1, card2];

const switchCard = function(){
  cards.forEach(card => {

    if(card.hasClass('front')){
        card.animate({
            top: "40px",
            opacity: 0
        }, 200, function(){
            card.css('top', '');
            card.addClass('back');
        });
        card.delay(300).animate({
            opacity: 1
        });

        setTimeout(function(){
            card.addClass('back');
            card.removeClass('front');
        }, 300);
    } else if (card.hasClass('back')){
        setTimeout(function(){
            card.addClass('front');
            card.removeClass('back');
        }, 200);
    }
  });
};

const selector1 = $('#selector-1')
const selector2 = $('#selector-2')

const selectors = [selector1, selector2];

let animating = false;

selector1.click(function(){
    if(!animating){
        animating = true;
        if(!selector1.hasClass('active')) {
            switchCard();
            selector1.addClass('active');
            selector2.removeClass('active');
            card1.html('full service survey company with over a decade experience in design and CAD. We measure any and all standing structures and produce accurate drawings of existing conditions. Our customers use our services to template their work, and to get a baseline of the existing structure in order to do their design and construction work with ease of mind and certainty.');
            setTimeout(() => {
                card2.html('');
            }, 200);
            title2.removeClass('title-active')
            title1.addClass('title-active')
        }
    }
    setTimeout(() => {
        animating = false;
    }, 300);
});
console.log(title1)
selector2.click(function(){
    if(!animating){
        animating = true;
        if(!selector2.hasClass('active')) {
            switchCard();
            selector2.addClass('active');
            selector1.removeClass('active');
            card2.html('Our professionals measures the exterior and/or interior of the home, building or structure to create a three-dimensional representation of it. The process involves using lasers to capture dimensions. This method is much more accurate than blueprints and plans. As such, we delivery to you the most accurate as-built floor plans, elevation drawings, reflected ceiling plans, and any other intricate structure that you need for your sophisticated project.');
            title1.css.left = "30px"
            setTimeout(() => {
                card1.html('');
            }, 200);
            title1.removeClass('title-active')
            title2.addClass('title-active')
        }
    }
    setTimeout(() => {
        animating = false;
    }, 300);
    
});


const toggler = document.querySelector('#navbar-toggler');
const div1 = document.querySelector('#toggler-div-1');
const div2 = document.querySelector('#toggler-div-2');
const div3 = document.querySelector('#toggler-div-3');
const smallNav = document.querySelector('#small-nav');

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

const firstCard = document.querySelector('#card-1')
const secondCard = document.querySelector('#card-2')

const cardsOptions = {
    rootMargin: "0px",
    threshold: 0.8
};

const cardsCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            firstCard.style.opacity = "1"
            secondCard.style.opacity = "1"
            console.log('intersected')
            observer.unobserve(cardsTarget);
        }
        
    });
};

const cardsTarget = document.querySelector('#cards-wrap');

const observer = new IntersectionObserver(cardsCallback, cardsOptions);

observer.observe(cardsTarget);
