function setLanguage(languageCode) {
    const languages = {
        en: "Welcome! Please select your language:",
        ms: "Selamat datang! Sila pilih bahasa anda:",
        zh: "欢迎! 请选择您的语言：",
        ne: "स्वागत छ! कृपया आफ्नो भाषा चयन गर्नुहोस्:",
        my: "ပျော်ရကြ! သင်၏ဘာသာစကားကိုရွေးပါ:",
        vi: "Chào mừng! Vui lòng chọn ngôn ngữ của bạn:",
        id: "Selamat datang! Silakan pilih bahasa Anda:"
    };

    // Update the text based on language selection
    document.getElementById("welcome-text").textContent = languages[languageCode];

    // Hide language selection and show content
    document.getElementById("welcome-container").style.display = 'none';
    document.getElementById("content-container").style.display = 'block';
}
