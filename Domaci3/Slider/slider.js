let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let closePicture = document.querySelector(".closebtn");
let images = document.querySelectorAll('.image');
let imageContainer = document.querySelector('.container');
let mainImage = document.querySelector('.main');
const totalImages = images.length;
let newIndex = 0;
let mouseInside = false;


function displayImage(index){
    images[index].classList.add('main');
}

function nextSlide(){
    images.forEach((element, index) => {
        if (element.classList.contains('main') && index < (totalImages - 1)){
            images[index].classList.remove('main');
            newIndex = index + 1;
        }
    });
    displayImage(newIndex);
}

function previousSlide(){
    images.forEach((element, index) => {
        if (element.classList.contains('main') && index > 0){
            images[index].classList.remove('main');
            newIndex = index - 1;
        }
    });
    displayImage(newIndex);
}

next.addEventListener("click", nextSlide);
previous.addEventListener("click", previousSlide);
closePicture.addEventListener("click", function(){
    images.forEach((element) => {
        element.classList.remove('main');
    });
}); 


imageContainer.addEventListener('mouseover', function(e) {
    mouseInside = true;
});

imageContainer.addEventListener('mouseout', function(e) {
    mouseInside = false;
});

document.addEventListener('keydown', function(e){
    if (mouseInside === true){
        if(e.key == 'ArrowRight') {
            nextSlide();
        }
        else if(e.key == 'ArrowLeft') {
            previousSlide();
        }
    }
});

