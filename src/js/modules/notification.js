function notification() {
    let notificationPresets = {
        noAuthorization: {
            name: 'authorization',
            imgSrc: '../img/notifications/red-cross',
            text: 'Требуется Авторизация!'
        },
        noNetwork: {
            name: 'network',
            imgSrc: '../img/notifications/red-cross',
            text: 'Отсутствует соединение с интернетом!'
        },
        correctAuthorization: {
            name: 'authorization',
            imgSrc: '../img/notifications/green-check',
            text: 'Авторизация успешна!'
        }
    }
    
    function createNotification(notificationPreset) {
        let notificationImg = `<source srcset=${notificationPreset.imgSrc + '.webp'}><img src='${notificationPreset.imgSrc + '.png'}'>`;
        let notification = `<div class='notification'><picture>${notificationImg}</picture><p>${notificationPreset.text}</p></div>`;
        document.body.insertAdjacentHTML('beforeend', notification);
        setTimeout(() => document.querySelector('.notification').classList.add('notification_active'), 5000);
        setTimeout(() => document.querySelector('.notification').remove(), 6000);
    }


    function authorizationCheck() {
        const input = document.getElementById('main-input');
        if (document.contains(input)) {
            input.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    createNotification(notificationPresets.noAuthorization);
                }
            })
        }
    }

    authorizationCheck();
}

module.exports = notification;


