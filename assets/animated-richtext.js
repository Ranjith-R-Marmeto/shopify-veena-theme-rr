document.addEventListener('DOMContentLoaded', function() {
    function animateText() {
      const textContainer = document.querySelector('.animated-text');
      const spans = textContainer.querySelectorAll('span');
  
      // Reset all spans
      spans.forEach(span => span.classList.remove('out'));
  
      // Animate in
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.style.animation = 'letterIn 0.5s forwards';
        }, index * 100);
      });
  
      // Set timeout to animate out after the last letter animates in
      setTimeout(() => {
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.style.animation = 'letterOut 0.5s forwards';
          }, index * 100);
        });
      }, spans.length * 100 + 1000); // Wait for all letters to animate in plus a pause
  
      // Schedule the next animation cycle
      setTimeout(animateText, spans.length * 100 + 1000 + spans.length * 100 + 2000); // Wait for all animations plus pause between cycles
    }
  
    animateText(); // Start the animation loop
  });
  