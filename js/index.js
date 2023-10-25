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
