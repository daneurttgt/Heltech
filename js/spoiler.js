$(document).ready(function() {
    $('.screen12-spoiler__title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    })
    $('.main__catalog__btn').click(function(event) {
        $(this).next().slideToggle(300);
    })
    $('.job-ctalog--spoiler').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    })
});