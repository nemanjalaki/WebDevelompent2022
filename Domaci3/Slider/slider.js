let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let images = document.querySelectorAll('.image');
let mainImage = document.querySelector('.main');
const totalImages = images.length;
let newIndex = 0;

function displayImage(index){
    console.log(index);
    images[index].classList.add('main');
}

function nextSlide(){
    images.forEach((element, index) => {
        if (element.classList.contains('main') && index < (totalImages - 1)){
            console.log(index);
            images[index].classList.remove('main');
            newIndex = index + 1;
            console.log(newIndex);
        }
    });
    displayImage(newIndex);
}

function previousSlide(){
    images.forEach((element, index) => {
        if (element.classList.contains('main') && index > 0){
            console.log(index);
            images[index].classList.remove('main');
            newIndex = index - 1;
            console.log(newIndex);
        }
    });
    displayImage(newIndex);
}

next.addEventListener("click", nextSlide);
previous.addEventListener("click", previousSlide);



