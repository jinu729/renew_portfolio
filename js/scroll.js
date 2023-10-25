/// <reference path="jquery.d.ts"/>/

//페이지 스크롤
$('.page').on('mousewheel',function(e, d){
    // console.log(e);
    // d -> 휠 내릴때 -1. 휠 올릴때 1
    if( d < 0){
        var next = $(this).next().offset().top;
        $('html, body').stop().animate({
            "scrollTop":next
        },1000);
        
    }else if(d > 0){
        var prev = $(this).prev().offset().top;
        $('html, body').stop().animate({
            "scrollTop":prev
        },1000);
    }
});




// 하단바 마우스 진입시 모션
$('.main_footer').on('mouseenter focus',function(){
    $('.dock').css({bottom:'-150%'});
    $('.dock').stop().animate({bottom:'0'},1250,function(){        
    });
});
$('.main_footer').on('mouseleave focus',function(){
    $('.dock').css({bottom:'0%'});
    $('.dock').stop().animate({bottom:'-150%'},1250,function(){        
    });
});

// skill 화면 
// -> 스크롤링 시 자동 진행
var scr = $(window).scrollTop();
$(window).scroll(function(){
    var scr = $(this).scrollTop();
    // console.log(scr);
    if(scr >= 2600){
        $('.wrap .box .st1').addClass('add');
    }else{
        $('.wrap .box .st1').removeClass('add');
    }
    if(scr >= 2600){
        $('.wrap .box .st2').addClass('add2');
    }else{
        $('.wrap .box .st2').removeClass('add2');
    }
    if(scr >= 2600){
        $('.wrap .box .st3').addClass('add3');
    }else{
        $('.wrap .box .st3').removeClass('add3');
    }
});


// $('.dock_icon').on('mouseover',function(e,d){
//     // console.log(e)
//     if(d < 0){
//         var up = $(this).next().offset().top;
//         $('.main_footer').stop().animate({
//             "top":2000
//         },1000)
//     }else if(d > 0){
//         var down = $(this).prev().offset().top;
//         $('.main_footer').stop().animate({
//             "top":-2000
//         },1000);
//     }
// });
// $(window).on('scroll',function(e){

//     var scr = Math.floor($(window).scrollTop());
//     var ht = $('.page').eq(0).height();
//     // var ht = $('.page:lt(5)').height();
//     // var ht1 = $('.page').eq(1).height();
//     console.log(ht);
//     if(scr >=0 && scr < ht){
//         $('.gnb_menu, .gnb_wrap ul li').find('a').css({
//             'textDecoration' : 'none'
//         });
//         $('.gnb_menu, .gnb_wrap ul li').eq(1).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(2).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(3).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(4).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(5).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(0).find('a').css({
//             'textDecoration' : 'none',
//             'font-size' : '16px'
//         });
//     }else if(scr >= ht && scr < ht*2){
//         $('.gnb_menu, .gnb_wrap ul li').find('a').css({
//             'textDecoration' : 'none'
//         });
//         $('.gnb_menu, .gnb_wrap ul li').eq(0).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(2).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(3).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(4).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(5).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(1).find('a').css({
//             'textDecoration' : 'none',
//             'font-size' : '30px',
//             'font-weight' : '700'
//         });
//     }
// })

// $(window).on('scroll',function(e){

//     var scr = Math.floor($(window).scrollTop());
//     var ht1 = $('.page').eq(1).height();
//     console.log(ht1);
//     if(scr >=ht1 && scr < ht1*2){
//         $('.gnb_menu, .gnb_wrap ul li').find('a').css({
//             'textDecoration' : 'none'
//         });
//         $('.gnb_menu, .gnb_wrap ul li').eq(1).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(2).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(3).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(4).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(5).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(0).find('a').css({
//             'textDecoration' : 'none',
//             'font-size' : '16px'
//         });
//     }else if(scr >= ht1*2 && scr < ht1*3){
//         $('.gnb_menu, .gnb_wrap ul li').find('a').css({
//             'textDecoration' : 'none'
//         });
//         $('.gnb_menu, .gnb_wrap ul li').eq(0).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(1).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(3).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(4).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(5).find('a').css('font-size','16px')
//         $('.gnb_menu, .gnb_wrap ul li').eq(2).find('a').css({
//             'textDecoration' : 'none',
//             'font-size' : '30px',
//             'font-weight' : '700'
//         });
//     }
// })


