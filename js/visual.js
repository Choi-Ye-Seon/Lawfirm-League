// Visual Video
const video = document.getElementById('background-video');
const videoContainer = document.getElementById('videoContainer');

// 모바일 디바이스 판별
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// 모바일 저전력모드 함수선언
const userLowPowerMode = false;

function lowPowerMode() {
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            if (battery.level < 0.2 || battery.charging === false || userLowPowerMode) {
                videoContainer.classList.add('low-power-mode');
            } else {
                videoContainer.classList.remove('low-power-mode');
            }
        });
    }
}





// 비디오 자동재생을 위한 함수선언
async function attemptPlay() {
    try {
        await video.play();
    } catch (error) {
        console.error('자동재생실패:', error);
        lowPowerMode();
    }
}

function attemptPlayMobile() {
    attemptPlay();
}

function attemptPlayDesktop() {
    attemptPlay();
}

// 비디오 데이터 로드
video.addEventListener('loadeddata', async function() {
    try {
        await video.play();
    } catch (error) {
        console.error('자동재생실패:', error);
        lowPowerMode();
    }
});

video.addEventListener('play', videoPlay);
video.addEventListener('suspend', lowPowerMode);

// 비디오 자동재생

if (isMobileDevice()) {
    attemptPlayMobile();
} else {
    attemptPlayDesktop();
}