const LANGUAGES = [ "pt-br", "eng" ];

main();

function main() {
    let lang = window.location.search.substr(1);
    lang = lang.split("=")[1];

    if (lang == "eng") applyLanguage("eng");
    else applyLanguage("pt-br");
}

function applyLanguage(targetLang) {
    LANGUAGES.forEach(lang => {
        if (lang == targetLang) return;

        let elements = document.querySelectorAll(`.${lang}`);
        elements.forEach(element => {
            element.classList.add("visually-hidden");
        });
    });
}