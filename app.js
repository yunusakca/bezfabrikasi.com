const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const slider = document.querySelector('#slider')

var count = 1;
changeImage(count)

function changeImage(count){
    if (count == 1) {
        slider.className = '';
        slider.classList.toggle('slider-image-1')
    } else if (count == 2) {
        slider.className = '';
        slider.classList.toggle('slider-image-2')
    } else if (count == 3) {
        slider.className = '';
        slider.classList.toggle('slider-image-3')
    } else if (count == 4) {
        slider.className = '';
        slider.classList.toggle('slider-image-4')
    } else if (count == 5) {
        slider.className = '';
        slider.classList.toggle('slider-image-5')
    } else if (count == 6) {
        slider.className = '';
        slider.classList.toggle('slider-image-6')
    } else if (count == 7) {
        slider.className = '';
        slider.classList.toggle('slider-image-7')
    } else if (count == 8) {
        slider.className = '';
        slider.classList.toggle('slider-image-8')
    } else if (count == 9) {
        slider.className = '';
        slider.classList.toggle('slider-image-9')
    } else if (count == 10) {
        slider.className = '';
        slider.classList.toggle('slider-image-10')
    } else if (count == 11) {
        slider.className = '';
        slider.classList.toggle('slider-image-11')
    } else if (count == 12) {
        slider.className = '';
        slider.classList.toggle('slider-image-12')
    } else if (count == 13) {
        slider.className = '';
        slider.classList.toggle('slider-image-13')
    } else if (count == 14) {
        slider.className = '';
        slider.classList.toggle('slider-image-14')
    } else if (count == 15) {
        slider.className = '';
        slider.classList.toggle('slider-image-15')
    } else if (count == 16) {
        slider.className = '';
        slider.classList.toggle('slider-image-16')
    } else if (count == 17) {
        slider.className = '';
        slider.classList.toggle('slider-image-17')
    } else if (count == 18) {
        slider.className = '';
        slider.classList.toggle('slider-image-18')
    } else if (count == 19) {
        slider.className = '';
        slider.classList.toggle('slider-image-19')
    } else if (count == 20) {
        slider.className = '';
        slider.classList.toggle('slider-image-20')
    } 
}
prevBtn.addEventListener('click', function(){
    count = count-1;
    if (count < 21 && count > 0) {
        changeImage(count)
    } else {
        return count = 6
    }
    
});

nextBtn.addEventListener('click', function(){
    count = count+1;
    if (count < 21 && count > 0) {
        changeImage(count)
    } else {
        return count = 0
    }
});