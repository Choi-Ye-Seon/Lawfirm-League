$(document).ready(function() {
    // 성공사례 탭메뉴
    $('.success .tab-menu').click(function() {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        let idx = $(this).index();

        $(this).parent().parent().siblings(".tab-con").removeClass("view");
        $(this).parent().parent().siblings(".tab-con").eq(idx).addClass("view");
    });

    // 리그포스트 탭메뉴
    $('.post .post-menu .tab-menu').click(function() {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        let idxNum = $(this).index();
        $(this).parent().parent().parent().siblings(".tab-con").removeClass("view");
        $(this).parent().parent().parent().siblings(".tab-con").eq(idxNum).addClass("view");
    });
});


// 성공사례 Swiper JS
new Swiper('.success .swiper.success-menu', {
    slidesPerView: "auto",
    spaceBetween: 14,
    grapCursor: true
        // grap, breakpoint 추가하기
});


new Swiper('.success .tab-con .swiper', {
    slidesPerView: 1,
    // slidesPerGroup: 3,
    spaceBetween: 12,
    navigation: {
        nextEl: '.success .swiper-button-next',
        prevEl: '.success .swiper-button-prev',
    },
    breakpoints: {
        460: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }

});

// 리그포스트 Swiper JS
new Swiper('.post .swiper.post-menu', {
    slidesPerView: "auto",
    spaceBetween: 14,
    grapCursor: true,
    // 태블릿, 모바일 기기에서는 가로정렬, grab
    breakpoints: {
        980: {
            direction: "vertical",
            spaceBetween: 24,

        }
    }
});

new Swiper('.post .tab-con .swiper', {
    slidesPerView: "auto",
    spaceBetween: 12,
    pagination: {
        el: ".post .swiper-pagination",
    },
    navigation: {
        nextEl: '.post .swiper-button-next',
        prevEl: '.post .swiper-button-prev',
    },
    breakpoints: {
        460: {
            spaceBetween: 16,

        },
        720: {
            spaceBetween: 20,
        }
    }
});


// 상담신청 - 개인정보수집동의 약관 팝업
const popupBtn = document.querySelector('.consulation #popup');
const bglayerEl = document.querySelector('.consulation #bglayer');
const closeBtn = document.querySelector(' .popup-header button.close');
const overlayerEl = bglayerEl.querySelector('#overlayer');

popupBtn.addEventListener('click', function() {
    if (!bglayerEl.classList.contains('show')) {
        bglayerEl.classList.add('show');
        document.documentElement.classList.add('fixed');
    }
});

closeBtn.addEventListener('click', function() {
    bglayerEl.classList.remove('show')
    document.documentElement.classList.remove('fixed');

});

overlayerEl.addEventListener('click', function(event) {
    event.stopPropagation()
});
bglayerEl.addEventListener('click', function() {
    bglayerEl.classList.remove('show')
    document.documentElement.classList.remove('fixed');

});