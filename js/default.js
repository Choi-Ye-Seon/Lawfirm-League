//jQuery
// Header - GNB 슬라이드
$(document).ready(function() {

    $('header .inner > ul.gnb li.main-menu').hover(function() {
        $('ul.lnb', this).stop().slideDown('fast');
    }, function() {
        $('ul.lnb', this).stop().slideUp('fast');

    });

    $('header .clone-menu ul.gnb li.main-menu').click(function(event) {
        event.stopPropagation();
        const submenu = $(this).find("ul.lnb");
        const isOpen = submenu.is(":visible");

        $('.clone-menu ul.gnb li.main-menu').removeClass('show').find('ul.lnb').slideUp('fast');

        if (!isOpen) {
            $(this).addClass('show');
            submenu.slideDown('fast');
        }
    });

    $('header .clone-menu ul.gnb ul.lnb').click(function(event) {
        event.stopPropagation();
    });

});
// // Header - GNB 슬라이드
// // jQuery


// Element (Header, Top Button)
const headerEl = document.querySelector('header');
const offLogoEl = headerEl.querySelector('.scroll-off');
const onLogoEl = headerEl.querySelector('.scroll-on');
const gnbEls = headerEl.querySelectorAll('.gnb >li >a');
const menuBtnEl = headerEl.querySelector('.btn--menu');
const menuBarEls = menuBtnEl.querySelectorAll('span');

const topBtnEl = document.querySelector('#to-top');

let prevScrollpos = window.scrollY;
console.log(`처음 prevScrollpols의 값 : ${prevScrollpos}`)

// Header ScrollOn 함수 선언
function scrollOn() {
    gsap.to(headerEl, .2, {
        backgroundColor: "#fff"
    });
    gsap.to(offLogoEl, .2, {
        opacity: 0
    });
    gsap.to(onLogoEl, .2, {
        opacity: 1
    });
    gnbEls.forEach(function(gnbEl) {
        gsap.to(gnbEl, .2, {
            color: "#272727"
        });
    });
    menuBarEls.forEach(function(menuBar) {
        gsap.to(menuBar, .2, {
            backgroundColor: "#272727"
        });
    });
}
// Header ScrollOff 함수 선언
function scrollOff() {
    gsap.to(headerEl, .2, {
        backgroundColor: "transparent"
    });
    gsap.to(onLogoEl, .2, {
        opacity: 0
    });
    gsap.to(offLogoEl, .2, {
        opacity: 1
    });
    gnbEls.forEach(function(gnbEl) {
        gsap.to(gnbEl, .2, {
            color: "#f5f5f5"
        });
    });
    menuBarEls.forEach(function(menuBar) {
        gsap.to(menuBar, .2, {
            backgroundColor: "#f5f5f5"
        });
    });
}

function handleMouseEnter() {
    if (!headerEl.classList.contains('menuing')) { //scrollOn 함수실행을 Enter에 저장
        scrollOn();
    }
}

function handleMouseLeave() {
    if (!headerEl.classList.contains('menuing')) { //scrollOff 함수실행을 Leave에 저장
        scrollOff();
    }
}


// 뷰포트 시작 0 일때 및 Default - ScrollOn/Off 함수 실행
if (window.scrollY > 100) {
    scrollOn(); //기본값
} else {
    scrollOff(); //기본값 : scrollY = 0
    headerEl.addEventListener('mouseenter', handleMouseEnter);
    headerEl.addEventListener('mouseleave', handleMouseLeave);
}


// Header, Top Button Scroll 함수 선언
function handleScroll() {
    let currentScrollpos = window.scrollY;
    console.log(`스크롤했을 때 currentScroll의 값 : ${currentScrollpos}`)

    // 1. 스크롤 100px 이상 일때, Header ScrollOn/Off 함수 선언
    if (currentScrollpos > 100) {
        scrollOn(); //기본값
        headerEl.removeEventListener('mouseenter', handleMouseEnter);
        headerEl.removeEventListener('mouseleave', handleMouseLeave);
    } else {
        if (!headerEl.classList.contains('menuing')) {
            scrollOff(); //기본값 : scrollY = 0
        }
        headerEl.addEventListener('mouseenter', handleMouseEnter);
        headerEl.addEventListener('mouseleave', handleMouseLeave);
    }


    // 2. Top Button Scroll 함수 선언
    if (prevScrollpos > currentScrollpos) {
        // Top Button 보이기
        gsap.to(topBtnEl, .2, {
            x: 0
        });
    } else {
        // Top Button 숨기기
        gsap.to(topBtnEl, .2, {
            x: 100
        });
    }

    prevScrollpos = currentScrollpos //스크롤 위치 업데이트
    console.log(`스크롤을 한 후 prevScrollpos의 값 : ${prevScrollpos}`);
}


// Header, Top Button Scroll 함수 실행
window.addEventListener('scroll', _.throttle(handleScroll, 300));



// Top Button 스크롤 위치 함수 실행
topBtnEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0
    })
});




// 모바일/태블릿 버전 - Header >  Scroll 등 함수 실행
menuBtnEl.addEventListener('click', function() {
    if (headerEl.classList.contains('menuing')) {
        headerEl.classList.remove('menuing');
        document.documentElement.classList.remove('fixed');
        topBtnEl.style.opacity = 1;
    } else {
        headerEl.classList.add('menuing');
        document.documentElement.classList.add('fixed');
        scrollOn();
        topBtnEl.style.opacity = 0;
    }
});



// 반응형 시, menuing 클래스 제거
window.addEventListener('resize', function() {
    if (this.window.innerWidth <= 980) {
        headerEl.classList.remove('menuing');
        document.documentElement.classList.remove('fixed');
        scrollOff();
    }
});


// ScrollMagic
const spyEls = document.querySelectorAll('section .scroll-spy')

spyEls.forEach(function(spyEl) {
    const scene = new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .85
        })
        .on('enter', function() {
            spyEl.classList.add('show');
        })
        .on('leave', function() {
            spyEl.classList.remove('show');
        })
        .addTo(new ScrollMagic.Controller());
});

// Copyright
const yearEl = document.querySelector('footer .year');
yearEl.textContent = new Date().getFullYear();


function notice() {
    alert("현재 준비 중 입니다. 정식 버전을 기대해 주세요!")
}