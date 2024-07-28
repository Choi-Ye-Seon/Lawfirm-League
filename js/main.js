// Visual Video
const video = document.getElementById('background-video')
const videoContainer = document.getElementById('videoContainer')

// 모바일 저전력모드 함수선언
function lowPowerMode() {
    videoContainer.classList.add('low-power-mode');
}

function videoPlay() {
    videoContainer.classList.remove('low-power-mode');
}

// 모바일 저전력모드 함수실행
// video 일시 중지 시, low-power-mode 클래스 추가
video.addEventListener('suspend', lowPowerMode);
// video 재생 시, low-power-mode 클래스 제거
video.addEventListener('play', videoPlay);

// 저전력모드 감시
video.play().catch(error => {
    lowPowerMode();
});


$(document).ready(function() {


    // 리그포스트 탭메뉴
    $('.post .post-menu .tab-menu').click(function() {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        let idxNum = $(this).index();
        $(this).parent().parent().siblings(".tab-con").removeClass("view");
        $(this).parent().parent().siblings(".tab-con").eq(idxNum).addClass("view");
    });
});


// 성공사례 Swiper JS
new Swiper('.success  .swiper', {
    slidesPerView: 1,
    // slidesPerGroup: 3,
    spaceBetween: 12,
    pagination: {
        el: ".success .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        460: {
            slidesPerView: 2,
            spaceBetween: 16
        },

        980: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }

});

// 리그포스트 Swiper JS
new Swiper('.post .swiper.post-menu', {
    slidesPerView: "auto",
    spaceBetween: 40,
    grapCursor: true,
    breakpoints: {
        980: {
            spaceBetween: 40,
        }
    }
});

new Swiper('.post .tab-con .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".post .swiper-pagination",
        clickable: true
    },

    breakpoints: {
        460: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        980: {
            slidesPerView: 4,
            spaceBetween: 20
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


// 클라이언트 Swiper JS
new Swiper('.clients .swiper', {
    slidesPerView: 3,
    spaceBetween: 55,
    navigation: {
        nextEl: '.clients .swiper-button-next',
        prevEl: '.clients .swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    loop: true,
    breakpoints: {

        420: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        840: {
            slidesPerView: 5,
            spaceBetween: 10,

        }
    }

});