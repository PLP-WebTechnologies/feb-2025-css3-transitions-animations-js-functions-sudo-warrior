document.addEventListener('DOMContentLoaded', () => {
    const animateButton = document.getElementById('animateButton');
    const animatedBox = document.getElementById('animatedBox');
    const toggleAnimation = document.getElementById('toggleAnimation');

    // Load user preference from localStorage
    const isAnimationEnabled = localStorage.getItem('animationEnabled') === 'true';
    toggleAnimation.checked = isAnimationEnabled;

    // Apply animation class based on user preference
    if (isAnimationEnabled) {
        animatedBox.classList.add('animate');
    }

    // Event listener for button click
    animateButton.addEventListener('click', () => {
        if (toggleAnimation.checked) {
            animatedBox.classList.toggle('animate');
        }
    });

    // Event listener for checkbox change
    toggleAnimation.addEventListener('change', () => {
        const isChecked = toggleAnimation.checked;
        localStorage.setItem('animationEnabled', isChecked);
        if (isChecked) {
            animatedBox.classList.add('animate');
        } else {
            animatedBox.classList.remove('animate');
        }
    });
});
