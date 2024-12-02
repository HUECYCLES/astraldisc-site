const canvas = document.querySelector('.graffiti-canvas canvas');
const context = canvas.getContext('2d');

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

// Call the resize function initially and whenever the window resizes
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Drawing
canvas.addEventListener('mousemove', (event) => {
    if (event.buttons === 1) { 
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        context.fillStyle = 'black';
        context.fillRect(x, y, 2, 2);
    }
});