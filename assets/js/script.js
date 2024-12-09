// Get the image and area elements
const houseImage = document.getElementById('house-img');
const houseArea = document.getElementById('house-area');

// Set the initial state of the image to black (grayscale and darkened)
houseImage.style.filter = 'grayscale(100%) brightness(0)';

// Add hover event listeners for the area
houseArea.addEventListener('mouseenter', () => {
  // Revert to the original color when hovering over the area
  houseImage.style.filter = 'grayscale(0%) brightness(100%)';
});

houseArea.addEventListener('mouseleave', () => {
  // Set the image back to black when leaving the hover area
  houseImage.style.filter = 'grayscale(100%) brightness(0)';
});
