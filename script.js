// Function to change content based on language
function changeLanguage(lang) {
    // Hide all language content
    const contents = document.querySelectorAll('.lang-content');
    contents.forEach(content => content.style.display = 'none');

    // Show the selected language content
    const selectedContent = document.getElementById(lang);
    selectedContent.style.display = 'block';

    // Trigger bubble effect
    triggerBubbleEffect();
}

// Function to trigger bubble effect on button click
function triggerBubbleEffect() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);

    // Remove bubble after animation
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Set the default language to English when page loads
window.onload = () => {
    changeLanguage('en');
};
