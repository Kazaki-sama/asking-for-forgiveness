const button = document.querySelector('.hide');

button.addEventListener('mouseenter', () => {
    // Get the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Generate random positions
    const randomX = Math.floor(Math.random() * (viewportWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - button.offsetHeight));

    // Apply the new position
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

const buttn = document.getElementById('rainButton');
const rainContainer = document.getElementById('rainContainer');

// Array of cat images (you can add more URLs here)
const catImages = [
    'pexels-chevonrossouw-2558605.jpg',   // Random cat image
    'pexels-didsss-1276553.jpg',
    'pexels-francesco-ungaro-96938.jpg',
    'pexels-lina-1741205.jpg',
    'pexels-pixabay-104827.jpg',
    'pexels-vatius-127028.jpg',
    'pexels-wojciech-kumpicki-1084687-2071873.jpg'
];

// Function to create a single falling cat image
function createFallingImage() {
    const img = document.createElement('img');
    img.src = catImages[Math.floor(Math.random() * catImages.length)]; // Random cat image
    img.classList.add('falling-image');
    img.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    img.style.animation = `fall ${Math.random() * 3 + 2}s linear`; // Random fall speed
    rainContainer.appendChild(img);

    // Remove the image after it falls out of view
    img.addEventListener('animationend', () => {
        img.remove();
    });
}

// Function to create multiple falling images
function startImageRain() {
    setInterval(createFallingImage, 300); // Create an image every 300ms
}

// Add click event to the button to start image rain
buttn.addEventListener('click', () => {
    startImageRain();
});
