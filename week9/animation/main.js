// Get the square
const squareElement = document.getElementById('square');
// Set the starting angle
let angle = 0;

// // Increase value of angle by 2 until it reaches 360 and resets to 0
// setInterval( () => {
//     angle = (angle + 2) % 360;
//     // rotate the square degrees equal to angle with 60 frames per second
//     squareElement.style.transform = `rotate(${angle}deg)`}, 1000/60);

// Optimized by using requestAnimationFrame
function rotate() {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

// Call function and assign to variable so it can be cancelled
const id = requestAnimationFrame(rotate);

// Cancel using id
//cancelAnimationFrame(id);