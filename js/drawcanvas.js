const canvas = document.querySelector('.graffiti-canvas canvas');
const context = canvas.getContext('2d');
let currentColor = 'black'; // Default color

// Resize canvas on window resize
function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

// Call the resize function initially and whenever the window resizes
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Color picker
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (event) => {
    currentColor = event.target.value;
});

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

// Drawing
canvas.addEventListener('mousemove', (event) => {
    if (event.buttons === 1) { 
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        context.fillStyle = currentColor;
        context.fillRect(x, y, 2, 2);
    }
});