function switcher() {
    if (document.querySelectorAll('.window__switcher') && document.querySelectorAll('.window') && document.querySelectorAll('.switcher__btn') && document.querySelector('.window')) {
        const switcher = document.querySelector('.window__switcher'),
              forms = document.querySelectorAll('.window__form'),
              switcherBtns = document.querySelectorAll('.switcher__btn'),
              window = document.querySelector('.window');

        function switchFormMod() {
            forms.forEach((form) => {
                form.classList.toggle('window__form_active');
            })
            switcherBtns.forEach((btn) => {
                btn.classList.toggle('switcher__btn_active');
            })
            window.classList.toggle('window_mod')
        }

        switcher.addEventListener('click', (event) => {
            switchFormMod();
        })
    } else {
        console.log(`switcher.js failed`)
    }
}

module.exports = switcher;