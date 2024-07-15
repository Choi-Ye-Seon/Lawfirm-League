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