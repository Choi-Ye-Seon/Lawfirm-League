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