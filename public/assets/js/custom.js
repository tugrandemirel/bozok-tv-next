$(document).ready(function () {
    var menuElement = $('#mobile-menu');
    var menuTriggers = $('#menu');
    var menuClose = $('#mobile-menu #menu_close');

    var locale = "tr";
    var menuTitle = (locale === 'tr') ? 'MENÜ' : 'MENU';

    if (menuElement.length > 0 && menuTriggers.length > 0 && menuClose.length > 0) {
        var menu = new MmenuLight(menuElement[0], 'all');
        var navigator = menu.navigation({
            slidingSubmenus: true,
            title: menuTitle
        });
        var drawer = menu.offcanvas({
            position: 'left'
        });

        // Menü açma
        menuTriggers.each(function () {
            $(this).on('click', function (event) {
                event.preventDefault();
                drawer.open();
            });
        });

        // Menü kapama
        menuClose.on('click', function (event) {
            event.preventDefault();
            drawer.close();
        });
    }
});
