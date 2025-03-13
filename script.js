document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement('div');
      heart.classList.add('floating-heart');
      heart.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
      heart.style.animationDuration = `${Math.random() * 5 + 5}s`;  // Random duration for floating
      document.body.appendChild(heart);
    }
  });
  