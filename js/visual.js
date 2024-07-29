// video-script.js

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    const videoContainer = document.getElementById('videoContainer');

    function lowPowerMode() {
        videoContainer.classList.add('low-power-mode');
    }

    function videoPlay() {
        videoContainer.classList.remove('low-power-mode');
    }

    // 비디오 요소 로드 확인 및 재생 시도
    async function attemptPlay() {
        try {
            await video.play();
        } catch (error) {
            console.error('자동 재생 실패:', error);
            lowPowerMode();
        }
    }

    // 비디오 요소가 로드될 때 자동 재생 시도
    video.addEventListener('loadeddata', async() => {
        try {
            await video.play();
        } catch (error) {
            console.error('자동 재생 실패:', error);
            lowPowerMode();
        }
    });

    // 비디오가 재생될 때 저전력모드 클래스 제거
    video.addEventListener('play', videoPlay);

    // 저전력모드 감시
    attemptPlay();

    // 비디오 요소 로드 확인 및 재생 시도
    video.load();
});