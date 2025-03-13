// Create glowing flowers and add them to the page
const flowerContainer = document.querySelector('.flowers');

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    // Add a unique delay to each flower animation
    flower.style.setProperty('--i', Math.random() * 5); // Random delay for variety
    flowerContainer.appendChild(flower);
}

// Create 20 flowers to appear and animate
for (let i = 0; i < 20; i++) {
    createFlower();
}

// Control when the text appears
const glowingText = document.querySelector('.glowing-text-container');

window.onload = () => {
    setTimeout(() => {
        glowingText.style.opacity = 1; // Reveal the text after 2 seconds
    }, 2000);

    // Start the animations for each text
    setTimeout(() => {
        document.querySelector('.glowing-text').style.animationPlayState = 'running';
    }, 3000); // First text animation starts after 3 seconds

    setTimeout(() => {
        document.querySelector('.glowing-text h2').style.animationPlayState = 'running';
    }, 8000); // Second text animation starts after 8 seconds

    setTimeout(() => {
        document.querySelector('.final-message').style.animationPlayState = 'running';
    }, 12000); // Final message after 12 seconds
};
