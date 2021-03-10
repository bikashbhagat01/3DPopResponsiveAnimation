// Animation Constants
// Boundary
const card = document.querySelector('.card'); // Selected card class
const container = document.querySelector('.container'); //Selected container class

// Elements
const title = document.querySelector('.info .title'); 
const sneaker = document.querySelector('.sneaker img'); 
const purchase = document.querySelector('.purchase'); 
const description = document.querySelector('.info h3'); 
const sizes = document.querySelector('.sizes');
const circle = document.querySelector('.circle');



// Animation Event

container.addEventListener('mousemove', (e) => {
    let x = ((window.innerWidth/2) - e.pageX)/ 25;  // Current Cursor X location computation with mid-point
    let y = ((window.innerHeight/2) - e.pageY)/ 25; // Current Cursor y location computation with mid-point

    card.style.transition = 'all 0.1s ease';
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`; // Rotate card, based on degreees from x and y values

});

// Animation Entry 
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';

    // Elements Layering
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(300px) translateY(60px) rotateZ(45deg)';
    purchase.style.transform = 'translateZ(120px)';
    description.style.transform = 'translateZ(90px)';
    sizes.style.transform = 'translateZ(80px)';
    circle.style.transform = 'scale3d(1.5,1.5,1) translateZ(80px)';
})

// Animation Exit
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 3s ease'; // transition-property transition-duration transition-timing-function transition-delay
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    circle.style.transform = 'scale3d(1,1,1)';
});

