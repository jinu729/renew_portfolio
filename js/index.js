/// <reference path="jquery.d.ts"/>/

// 사용할 메소드

// mouseover 영역에 마우스 포인터를 올렸을때 이벤트 발생 p.258~
// mouseout 영역에서 마수으 포인터가 벗어났을때 이벤트 발생
// hover 영역에 올렸을때 벗어났을때 각각 이벤트 발생

//work 화면 슬라이드
$(function(){
    
        $('#page4 .left_btn').click(function(){
            $('#page4 .work_list').last().prependTo('#page4 .work_slide');
            $('#page4 .work_slide').css({left:'0%'});
            $('#page4 .work_slide').stop().animate({right:'112.5%'},1500, function(){
            });
        });
    });        
$(function(){
    
        $('#page4 .right_btn').click(function(){
            $('#page4 .work_list').first().appendTo('#page4 .work_slide');
            $('#page4 .work_slide').css({left:'0%'});
            $('#page4 .work_slide').stop().animate({right:'33%'},1500, function(){
            });
        });
    });           

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
