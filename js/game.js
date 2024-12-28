const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Load the sprite images
const characterSprite = new Image();
characterSprite.src = 'assets/img/disc/ch8/spamton_game.png';

const draggingSprite = new Image();
draggingSprite.src = 'assets/img/disc/ch8/spamton_game_drag.png';

const trashSprite = new Image();
trashSprite.src = 'assets/img/disc/ch8/city_trash.png';

const bananaSpritesheet = new Image();
bananaSpritesheet.src = 'assets/img/disc/ch8/banana_spritesheet.png';

// Variables for animation frames
const totalFrames = 8;
const frameWidth = 32;
const frameHeight = 34; 
let currentFrame = 0;
let frameSpeed = 10;
let frameCounter = 0;

let score = 0;

let character = {
  x: 100, 
  y: 100, 
  width: 80, 
  height: 80, 
  isDragging: false,
  offsetX: 0,
  offsetY: 0,
  gravity: 5
};

let trash = {
  x: 300,
  y: 380,
  width: 300,
  height: 300,
};

let bananas = [
  { x: 200, y: 200, width: 40, height: 40, collected: false },
  { x: 400, y: 150, width: 40, height: 40, collected: false },
  { x: 150, y: 300, width: 40, height: 40, collected: false }
];

// Event listeners
canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mouseup', onMouseUp);
canvas.addEventListener('mousemove', onMouseMove);

// Pick up sprite
function onMouseDown(e) {
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  // Check if mouse is over the sprite
  if (
    mouseX >= character.x &&
    mouseX <= character.x + character.width &&
    mouseY >= character.y &&
    mouseY <= character.y + character.height
  ) {
    character.isDragging = true;
    
    // Calculate offset to keep sprite attached to the mouse
    character.offsetX = mouseX - character.x;
    character.offsetY = mouseY - character.y;
  }
}

// Drop sprite
function onMouseUp() {
  character.isDragging = false;

  // Check if the sprite is dropped on the trash
  if (
    character.x + character.width >= trash.x &&
    character.x <= trash.x + trash.width &&
    character.y + character.height >= trash.y &&
    character.y <= trash.y + trash.height
  ) {
    character.isFalling = true;
  }
}

// Mouse Move
function onMouseMove(e) {
  if (character.isDragging) {
    // Update sprite position based on mouse position
    character.x = e.offsetX - character.offsetX;
    character.y = e.offsetY - character.offsetY;
  }
}

// Collision detection
function isCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

// Draw the sprite sheet frame (banana animation)
function drawBanana(x, y) {
  ctx.drawImage(
    bananaSpritesheet,
    currentFrame * frameWidth,         // X position of the frame to draw
    0,                                 // Y position of the frame to draw (all frames are in a single row)
    frameWidth,                        
    frameHeight,                       
    x,                                 // X position to draw the frame
    y,                                 // Y position to draw the frame
    frameWidth,                        
    frameHeight                        
  );
}

// Update frame for animation
function updateFrame() {
  frameCounter++;
  if (frameCounter >= frameSpeed) {
    frameCounter = 0;
    currentFrame = (currentFrame + 1) % totalFrames;  // Cycle through frames
  }
}

// Main drawing function
function drawSprite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  ctx.drawImage(trashSprite, trash.x, trash.y, trash.width, trash.height);

  // Apply gravity if sprite is falling
  if (character.isFalling) {
    character.y += character.gravity;

    // Stop the sprite when it's no longer visible
    if (character.y > canvas.height) {
      character.isFalling = false;
    }
  }

  const currentImage = character.isDragging ? draggingSprite : characterSprite;

  ctx.drawImage(currentImage, character.x, character.y, character.width, character.height);

  bananas.forEach((banana, index) => {
    if (!banana.collected) {
      // Draw the banana animation frame from the sprite sheet
      drawBanana(banana.x, banana.y);

      if (isCollision(character, banana)) {
        banana.collected = true;
        score++;
        console.log(`Score: ${score}`);
      }
    }
  });

  // Display the score
  ctx.font = '20px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText(`Score: ${score}`, 10, 30);

  updateFrame(); // Update the banana animation frame

  requestAnimationFrame(drawSprite); // Loop the animation
}

// Start drawing when all images are loaded
characterSprite.onload = () => {
    bananaSpritesheet.onload = () => {
    drawSprite();
  };
};
