$(document).ready(function() {

    // 성공사례 - 탭메뉴
    $('section.success-story  .tab-menu').click(function() {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        let idx = $(this).index();

        $(this).parent().parent().siblings('.tab-con').removeClass("view");
        $(this).parent().parent().siblings('.tab-con').eq(idx).addClass("view");



    });
});


// 성공사례 Swiper JS
new Swiper('.success-story .swiper.success-menu', {
    slidesPerView: "auto",
    spaceBetween: 14,
    grapCursor: true
        // grap, breakpoint 추가하기
});