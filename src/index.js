import './style/main.scss';


const map = document.querySelector('.country_map')
const closeBtn = document.querySelector('.close_btn')
const slider = document.querySelector('.wrapper')



function showSlider() {
    slider.classList.add('show')
    carousel()
}
function hideSlider() {
    slider.classList.remove('show')
}
map.addEventListener('click', showSlider)
closeBtn.addEventListener('click', hideSlider)





function hideBtn(btn) {
    console.log(btn)

}


function carousel() {

    let cardOnSlider = 3;
    const windowSize = window.innerWidth;
    if (windowSize < 600) {
        cardOnSlider = 1;
    }
    const carousel = document.querySelector("[data-target='carousel']");
    const card = carousel.querySelector("[data-target='card']");
    const leftButton = document.querySelector("[data-action='slideLeft']");
    const rightButton = document.querySelector("[data-action='slideRight']");
    const cardCount = carousel.querySelectorAll("[data-target='card']").length;

    const carouselWidth = carousel.offsetWidth;
    console.log(carouselWidth)

    
    const c = carousel.currentStyle || window.getComputedStyle(carousel)
    const t = Number(c.transform.match());
    
      
    
    let offset = 0;
    const maxX = -((cardCount / cardOnSlider) * carouselWidth) + carouselWidth;
 
    
  
    rightButton.addEventListener("click", function () {
        if (offset > (maxX)) {
            if (offset === (maxX * -1)) {
                let s = carousel.scrollWidth + (offset * 2)
                offset -= s
                console.log(offset)
                carousel.style.transform = `translateX(${offset}px)`;

            } else {
                offset -= carouselWidth;
                console.log(offset)
                carousel.style.transform = `translateX(${offset}px)`;
            }
        }
    })

    leftButton.addEventListener("click", function () {
        if (offset !== 0) {
            if (offset > (carouselWidth * -1)) {
                
                carousel.style.transform = `translateX(${0}px)`
            } else {
                console.log(offset)
                offset += carouselWidth;
                carousel.style.transform = `translateX(${offset}px)`;
            }
        }
    })
}

