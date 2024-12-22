document.addEventListener('DOMContentLoaded', function () {
    let menuElement = document.querySelector('#mobile-menu');
    let menuTriggers = document.querySelectorAll('a[href="#menu"]');
    let menuClose = document.querySelector('#mobile-menu #menu_close');

    let locale = "tr";
    let menuTitle = (locale === 'tr') ? 'MENÜ' : 'MENU';

    if (menuElement && menuTriggers.length > 0 && menuClose) {
        let menu = new MmenuLight(menuElement, 'all');
        let navigator = menu.navigation({
            slidingSubmenus: true,
            title: menuTitle
        });
        let drawer = menu.offcanvas({
            position: 'left'
        });

        // Menü aÃ§ma
        menuTriggers.forEach(function (trigger) {
            trigger.addEventListener('click', function (evnt) {
                evnt.preventDefault();
                drawer.open();
            });
        });

        // Menü kapama
        menuClose.addEventListener('click', function (event) {
            event.preventDefault();
            drawer.close();
        });
    }
});
setInterval(function () {
    location.reload();
}, 80000);


