'use strict';

// main-hero link part
function redirectToApple() {
  location.href = "https://www.apple.com/kr/iphone-15-pro/";
}

// main-icon swiper part
document.addEventListener("DOMContentLoaded", function () {
  function initSwiper() {
      var screenWidth = window.innerWidth;
      if (screenWidth < 1300 && screenWidth > 0) {
          var mySwiper = new Swiper("#main-icon .swiper-container", {
              // Optional parameters
              pagination: true,
              paginationClickable : true,
              slidesPerView : 'auto',
              direction : "horizontal",
              // loop: true,
              freeMode: true,

              // If you need pagination
              pagination: {
                  el: ".swiper-pagination",
              },

              // Navigation arrows
              navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
              }
          });
      }
  }

  // 페이지 로드 시 swiper 초기화
  initSwiper();

  // 창 크기 변경 시 swiper 초기화
  window.addEventListener('resize', function() {
      initSwiper();
  });
});

// main-icon link part
var clickableIcons = document.getElementsByClassName('clickable-icon');

for (var i = 0; i < clickableIcons.length; i++) {
  clickableIcons[i].addEventListener('click', function() {
    var id = this.id;
    switch (id) {
      case 'iconLink1':
        location.href = 'https://www.apple.com/kr/shop/buy-mac';
        break;
      case 'iconLink2':
        location.href = 'https://www.apple.com/kr/shop/buy-iphone';
        break;
      case 'iconLink3':
        location.href = 'https://www.apple.com/kr/shop/buy-ipad';
        break;
      case 'iconLink4':
        location.href = 'https://www.apple.com/kr/shop/buy-watch';
        break;
      case 'iconLink5':
        location.href = 'https://www.apple.com/kr/airpods/';
        break;
      case 'iconLink6':
        location.href = 'https://www.apple.com/kr/shop/accessories/all/airtag';
        break;
      case 'iconLink7':
        location.href = 'https://www.apple.com/kr/apple-tv-4k/';
        break;
      case 'iconLink8':
        location.href = 'https://www.apple.com/kr/shop/accessories/all';
        break;
    }
  });
}


// Specialist Swiper part
var mySwiper;

function initSwiper() {
    if (window.innerWidth <= 600) {
        if (!mySwiper) {
            mySwiper = new Swiper('.sp-mb-cardWrap', {
                slidesPerView: 1,
                spaceBetween : 25,
                // 터치 관련 옵션 추가
                touchEventsTarget: 'container',
                touchRatio: 1,
                touchAngle: 45,
                grabCursor: true
            });
        }
    } else {
        if (mySwiper) {
            mySwiper.destroy();
            mySwiper = undefined;
        }
    }
}
window.addEventListener('load', function() {
    initSwiper();
});

window.addEventListener('resize', function() {
    initSwiper();
});

// 페이지 로드 시 및 창 크기 변경 시 스와이프 초기화 및 파괴 함수 호출
window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);


// specialist pop-up part
// 팝업 열기
function openPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

// 팝업 닫기
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}