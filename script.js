// Function to change content based on language
function changeLanguage(lang) {
    // Hide all language content
    const contents = document.querySelectorAll('.lang-content');
    contents.forEach(content => content.style.display = 'none');

    // Show the selected language content if it exists
    const selectedContent = document.getElementById(lang);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    } else {
        // If the selected language content does not exist, fall back to English
        console.warn(`No content available for language: ${lang}. Falling back to English.`);
        changeLanguage('en');
    }

    // Save the selected language to localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Trigger bubble effect
    triggerBubbleEffect();
}

// Function to trigger bubble effect on button click
function triggerBubbleEffect() {
    // Check if a bubble already exists, and remove it before adding a new one
    const existingBubble = document.querySelector('.bubble');
    if (existingBubble) {
        existingBubble.remove();
    }

    // Create a new bubble and append it to the body
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);

    // Remove the bubble after animation ends
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Set the default language to English when page loads (or use saved language from localStorage)
window.onload = () => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        // If a language is saved, apply it
        changeLanguage(savedLanguage);
    } else {
        // If no preference is saved, default to English
        changeLanguage('en');
    }
};
