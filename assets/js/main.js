$(document).ready(function () {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    if ($('header').length || $('.sidebar-left').length) {
        let h = $('header');
        let sl = $('.sidebar-left');
        let hh = h.height()
        sl.css('top', 'calc(' + hh + 'px + 20px)') // calc(hh + 20px);
    }

    Fancybox.defaults.infinite = 0;

    Fancybox.bind("[data-fancybox]", {
        infinite: false,
        preload: 0,
        dragToClose: false,
        autoplay: false
    });

    if ($('a[href^="#"]').length) {
        $('a[href^="#"]').bind('click.smoothscroll', function (e) {
            e.preventDefault();

            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - ($('header').height())
            });
        });
    }


});