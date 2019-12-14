$(document).ready(function () {
    svg4everybody({});


    $('.about-comment__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        appendDots: ".about-comment__slider-dots"
    });



    // --------start-----------blog-page panel

    $('.panel-heading').click(function () {
        $(this).toggleClass('panel-expand').next().slideToggle();
        $('.panel-heading').not(this).removeClass('panel-expand').next().slideUp();
    });


    // --------end-----------blog-page panel





});

$('.menu').on('click', function (e) {
    e.preventDefault();
    $('.menu__link').toggleClass('menu-active')
    $('.header-nav__list').toggleClass('menu-active')
})


(function($) {
    $(function() {
    
    $('ul.tabs__caption').on('click', 'li.tabs__item:not(.active)', function() {

        $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
    });
})(jQuery);


// ----------------------------------------------- blog-tabs----start


let postsTab;
let postsContent;

window.onload=function(){
    postsContent = document.getElementsByClassName('posts__content');
    postsTab = document.getElementsByClassName('posts__tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i=a; i<postsContent.length; i++) {
        postsContent[i].classList.remove('show');
        postsContent[i].classList.add('hide');
        postsTab[i].classList.remove('active-border');
    }
}

document.getElementById('posts__tabs').onclick = function(event) {
    let target=event.target;
    if (target.className=='posts__tab') {
        for (let i=0; i<postsTab.length; i++) {
            if(target == postsTab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (postsContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        postsTab[b].classList.add('active-border');
        postsContent[b].classList.remove('hide');
        postsContent[b].classList.add('show');
    }
}


// ----------------------------------------------- blog-tabs----end