// TABS OUR SERVICES CONTAINER
const $tabItems = $(".tabs-title");
const $contentItems = $(".service-content");

$tabItems.on("click", (event) => {
    $(".active-tabs").removeClass("active-tabs");
    $(".active-services-content").removeClass("active-services-content");
    $(event.target).addClass("active-tabs");
    $contentItems.each((index, element) => {
        if (event.target.dataset.type === element.dataset.type){
               return $(element).addClass('active-services-content');
        }
    });
});

//CREATING OF DATABASE FOR PORTFOLIO BLOCK//
const graph = "graphic-design";
const web = "web-design";
const landing = "landing-pages";
const wordpress = "wordpress";
const portfolioHover = {
    graph: "<div class='portfolio-hover'> <div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class='portfolio-info'><p>awesome design</p><p>graphic design</p></div></div>",
    web: "<div class='portfolio-hover'> <div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class='portfolio-info'><p>creative design</p><p>web design</p></div></div>",
    land: "<div class='portfolio-hover'> <div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class='portfolio-info'><p>variety of patterns</p><p>landing pages</p></div></div>",
    word: "<div class='portfolio-hover'> <div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class='portfolio-info'><p>functional</p><p>wordpress</p></div></div>"
};

//INITIAL ADDING OF THE PORTFOLIO PICTURES//
for (let i = 1; i <= 3; i++) {
    $(".portfolio").append(`<div class='port-img ${graph}'><img src='images/portfolio/${graph}/${graph}${i}.jpg' alt='web'></div>`);
    $(".portfolio").append(`<div class='port-img ${web}'><img src='images/portfolio/${web}/${web}${i}.jpg' alt='web'></div>`);
    $(".portfolio").append(`<div class='port-img ${landing}'><img src='images/portfolio/${landing}/${landing}${i}.jpg' alt='web'></div>`);
    $(".portfolio").append(`<div class='port-img ${wordpress}'><img src='images/portfolio/${wordpress}/${wordpress}${i}.jpg' alt='web'></div>`);
}
getImgHover = () => {
    $(".graphic-design>img").before(portfolioHover.graph);
    $(".web-design>img").before(portfolioHover.web);
    $(".landing-pages>img").before(portfolioHover.land);
    $(".wordpress>img").before(portfolioHover.word);
};

//PORTFOLIO BLOCK 'FILTER' EVENT//
let loadBtnStatus = false;
let currentClass = false;
$(".portfolio-theme").click((event) => {
    $(".portfolio-theme").removeClass("portfolio-active");
    $(event.target).addClass("portfolio-active");
    currentClass = $(event.target).attr('data-filter');
    if (currentClass != "all") {
        $(`.${currentClass}`).fadeIn("fast");
        $(".port-img").not(`.${currentClass}`).css("display", "none");
    } else {
        $(".port-img").css("display", "block");
    }
});

//PORTFOLIO BLOCK 'LOAD MORE' EVENT//
$(".portfolio-load").click(() => {
    $(".portfolio-block>.load-wrapp").css("display", "block");
    setTimeout(() => {
        $(".portfolio-block>.load-wrapp").css("display", "none");
        if (!loadBtnStatus) {
            for (let j = 4; j <= 6; j++) {
                $(".portfolio").append(`<div class='port-img ${graph}'><img src='images/portfolio/${graph}/${graph}${j}.jpg' alt='web'></div>`);
                $(".portfolio").append(`<div class='port-img ${web}'><img src='images/portfolio/${web}/${web}${j}.jpg' alt='web'></div>`);
                $(".portfolio").append(`<div class='port-img ${landing}'><img src='images/portfolio/${landing}/${landing}${j}.jpg' alt='web'></div>`);
                $(".portfolio").append(`<div class='port-img ${wordpress}'><img src='images/portfolio/${wordpress}/${wordpress}${j}.jpg' alt='web'></div>`);
                loadBtnStatus = true;
            }
        } else {
            for (let k = 7; k <= 9; k++) {
                $(".portfolio").append(`<div class='port-img ${graph}'><img src='images/portfolio/${graph}/${graph}${k}.jpg' alt='web'></div>`);
                $(".portfolio").append(`<div class='port-img ${web}'><img src='images/portfolio/${web}/${web}${k}.jpg' alt='web'></div>`);
                $(".portfolio").append(`<div class='port-img ${landing}'><img src='images/portfolio/${landing}/${landing}${k}.jpg' alt='web'></div>`);
                $(".portfolio").append(`<div class='port-img ${wordpress}'><img src='images/portfolio/${wordpress}/${wordpress}${k}.jpg' alt='web'></div>`);
                $(".portfolio-load").hide();
            }
        }
        if (currentClass != "all" && currentClass != false) {
            $(`.${currentClass}`).css("display", "block");
            $(".port-img").not(`.${currentClass}`).css("display", "none");
        }
        getImgHover();
    }, 2000);
});
getImgHover();

//SLICK SLIDER//
$('.rev-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.rev-slider-nav',
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'linear'
});
$('.rev-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.rev-slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0',
    cssEase: 'linear'
});

//MASONRY//
$(".gallery-load").click(() => {

    $(".gallery-block>.load-wrapp").css("display", "block");
    setTimeout(() => {
        $(".gallery-block>.load-wrapp").css("display", "none");
        $(".gallery-load").remove();
        for (let i = 10; i < 17; i++) {
            $('.grid').append(`<div class="grid-item grid-hide"><div class="grid-hover"><a href="#"><i class="fas fa-search"></i></a><a href="#"><i class="fas fa-expand"></i></a></div><img src="images/gallery/gal${i}.png" alt=""></div>`)};
        $('.grid').masonry('reloadItems');
        $('.grid').masonry('layout');
        window.setTimeout(function () {
            $('.grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: 25,
                gutter: 10
            });
        }, 500);
    }, 2000);
});

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 25,
    gutter: 10
});

//ADDING SOMETHING OF YOUR OWN

$(document).scroll(function () {
    const $screenHeight = $(window).innerHeight();
    const $screenTop = $(window).scrollTop();
    if($screenTop > $screenHeight){
        if(!$('.scroll-top-btn').length) {
            const $scrollTopBtn = $('<div hidden class="scroll-top-btn"></div>');
            $('script:first').before($scrollTopBtn);
            $scrollTopBtn.fadeIn();
            $scrollTopBtn.click(() => {
                $('body, html').animate({
                    scrollTop: 0,
                },);
            });
        }
    } else {
        $('.scroll-top-btn').fadeOut(500, () => {
            $('.scroll-top-btn').remove();
        });
    }
});


$(document).ready(function(){

    $(".fa-search").click(function(){
        $(".input").toggleClass("active-input");
        $("input[type='text']").focus();
    });

});
