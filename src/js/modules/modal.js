function modal() {
    if (document.querySelector('.modal')) {
        const modalBtn = document.querySelectorAll('button[data-modal]'),
              modal = document.querySelectorAll('.modal[data-modal]'),
              overlay = document.querySelector('.overlay'),
              cancel = document.querySelector('.cancel_modal');

        function hideModal() {
            modal.forEach((item) => {
                item.classList.remove('modal_active');
            });
            overlay.classList.remove('overlay_active');
        }

        function showModal() {
            for (let i = 0; i < modal.length; i++ ) {
                modalBtn[i].addEventListener('click', (event) => {
                    if (modalBtn[i].dataset.modal == modal[i].dataset.modal) {
                        modal[i].classList.add('modal_active');
                        overlay.classList.add('overlay_active');
                    }
                })
            }
        }

        cancel.addEventListener('click', (event) => {
            hideModal();
        })
        overlay.addEventListener('click', (event) => {
            hideModal();
        })

        console.log(cancel);

        showModal();
    } else {
        console.log(`modal.js failed`)
    }
}

module.exports = modal;