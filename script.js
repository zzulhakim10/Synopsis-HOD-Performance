// Function to change content based on language
function changeLanguage(lang) {
    // Hide all language content
    const contents = document.querySelectorAll('.lang-content');
    contents.forEach(content => content.style.display = 'none');

    // Show the selected language content
    const selectedContent = document.getElementById(lang);
    selectedContent.style.display = 'block';
}

// Function to trigger bubble effect around button
function triggerBubbleEffect(event) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Get button position and size
    const button = event.target;
    const buttonRect = button.getBoundingClientRect();

    // Set the bubble's position (centered on the button)
    const bubbleX = buttonRect.left + buttonRect.width / 2 - 75; // Start bubble position
    const bubbleY = buttonRect.top + buttonRect.height / 2 - 75; // Start bubble position

    bubble.style.left = `${bubbleX}px`;
    bubble.style.top = `${bubbleY}px`;

    // Append the bubble to the body
    document.body.appendChild(bubble);

    // Remove bubble after animation is complete
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Set the default language to English when page loads
window.onload = () => {
    changeLanguage('en');
};

// Add event listener to all language buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        changeLanguage(event.target.id); // Change language based on button clicked
        triggerBubbleEffect(event); // Trigger bubble effect
    });
});
