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

});