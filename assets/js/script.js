document.addEventListener('DOMContentLoaded', function () {
    const houseImage = document.getElementById('house-img');
  
    // Hover effect to turn image grayscale and darken
    houseImage.addEventListener('mouseenter', function () {
      houseImage.style.filter = 'grayscale(100%) brightness(0)';
    });
  
    houseImage.addEventListener('mouseleave', function () {
      houseImage.style.filter = 'none';
    });
  });