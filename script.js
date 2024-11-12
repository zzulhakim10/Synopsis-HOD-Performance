function changeLanguage(language) {
    // Hide all language sections
    const langContents = document.querySelectorAll('.lang-content');
    langContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected language section
    const selectedLang = document.getElementById(language);
    if (selectedLang) {
        selectedLang.style.display = 'block';
    }
}
