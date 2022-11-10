// -----------------------------------------------------------------------------
// WHEN DOCUMENT IS READY
// -----------------------------------------------------------------------------
$(document).ready(function(){

    // -----------------------------------------------------------------------------
    // HOMEPAGE SLIDER
    // -----------------------------------------------------------------------------
    var homepageSlider = $('.homepage-slider');
    homepageSlider.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinte: true,
        pauseOnHover: true,
        draggable: false,
        fade: false
    });
    homepageSlider.slickAnimation();

    // -----------------------------------------------------------------------------
    // DESKTOP NAVIGATION MENU
    // -----------------------------------------------------------------------------
    var desktopNavigationMenu = $('.desktop-navigation-bar');
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
            $('body').addClass('scrolled');
            desktopNavigationMenu.addClass("show");
        } else{
            $('body').removeClass('scrolled');
            desktopNavigationMenu.removeClass("show");
        }
    });

    // -----------------------------------------------------------------------------
    // MOBILE NAVIGATION MENU
    // -----------------------------------------------------------------------------
    var hamburgerMenuBtn = $('.hamburger-menu-btn');
    var mobileNavigationMenu = $('.mobile-navigation-menu');
    var mobileNavOverlay = mobileNavigationMenu.find('.mobile-nav-overlay');
    var mobileNavCloseBtn = mobileNavigationMenu.find('.mobile-nav-close-btn');
    var mobileNavdropdownMenu = mobileNavigationMenu.find('li.dropdown');
    hamburgerMenuBtn.on('click', function(){
        mobileNavigationMenu.addClass('show');
    });
    mobileNavCloseBtn.on('click', function(){
        mobileNavigationMenu.removeClass('show');
    });
    mobileNavdropdownMenu.on('click', function(){
        $(this).toggleClass('show');
    });
    mobileNavOverlay.on('click', function(){
        mobileNavigationMenu.removeClass('show');
    });

    // -----------------------------------------------------------------------------
    // HOMEPAGE INTRODUCTION VIDEO
    // -----------------------------------------------------------------------------
    const introductionVideo = new Plyr(document.getElementById('introduction-video'));
    $(document).on('opened', '.introduction-video', function(){
        introductionVideo.play();
    });
    $(document).on('closing', '.introduction-video', function(){
        introductionVideo.pause();
    });

    // -----------------------------------------------------------------------------
    // SCROLL TO TOP
    // -----------------------------------------------------------------------------
    var scrollToTop = $('.scroll-to-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 700) {
            scrollToTop.addClass("show");
        } else{
            scrollToTop.removeClass("show");
        }
    });
    scrollToTop.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

});