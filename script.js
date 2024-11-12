// Function to change language based on button click
function changeLanguage(language) {
    // Hide all language sections first
    const languages = document.querySelectorAll('.lang-content');
    languages.forEach((lang) => {
        lang.style.display = 'none';
    });

    // Show the selected language section
    const selectedLanguage = document.getElementById(language);
    if (selectedLanguage) {
        selectedLanguage.style.display = 'block';
    }
}

// Default to English when the page loads
window.onload = () => {
    changeLanguage('en');
};
