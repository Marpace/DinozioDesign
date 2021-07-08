
// ****************************  ACCORDION  *******************************



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


// *********************************  SCROLLABLE DIV  ****************************

const scrollDiv = document.querySelector('#scrollable-div');
const scrollImg = document.querySelector('#scrollable-div-img');
const innerImg = document.querySelector('#scroll-img')

const scrollText = document.getElementsByClassName('scroll-item');
const scrollItems = [...scrollText];


const border1 = document.querySelector('#line-1');
const border2 = document.querySelector('#line-2');
const border3 = document.querySelector('#line-3');
const border4 = document.querySelector('#line-4');

const options = {
    root: scrollDiv,
    rootMargin: "0px",
    threshold: 0.8
};

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){



            // border1.style.width = "100px"
            // border1.style.height = "2px"
            // border2.style.width = "2px"
            // border2.style.height = "100px"
            // border3.style.width = "100px"
            // border3.style.height = "2px"
            // border4.style.width = "2px"
            // border4.style.height = "100px"
         

            scrollImg.children[0].innerHTML = entry.target.attributes.id.value

        }
        
    });
};

const observer = new IntersectionObserver(callback, options);

scrollItems.forEach( item => {

    observer.observe(item);

});



