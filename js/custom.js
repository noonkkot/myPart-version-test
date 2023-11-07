  'use strict';

  // main-icon swiper part
  document.addEventListener("DOMContentLoaded", function () {
    var screenWidth = window.innerWidth;
    if (screenWidth < 1200, screenWidth > 0) {
      var mySwiper = new Swiper("#main-icon .swiper-container", {
        // Optional parameters
        pagination: true,
        paginationClickable : true,
        slidesPerView : 'auto',
        // spaceBetween="30",
        // centeredSlides : true,
        direction : "horizontal",
        loop: true,
        freeMode: true,
        // autoHeight: 'true',

        // If you need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }

        // And if we need scrollbar
        // scrollbar: {
        //   el: ".swiper-scrollbar",
        // },
      });
    }
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
        // 나머지 div들도 동일하게 추가
      }
    });
  }






  
  // Specialist Swiper 초기화 함수
  function initSwiper() {
    var screenWidth = window.innerWidth;
    var swiperContainer = document.querySelector('.swiper-container');

    // 599px 이하에서 스와이프 초기화
    if (screenWidth < 600 && !swiperContainer.classList.contains('swiper')) {
      swiperContainer.classList.add('swiper');
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        // centeredSlides: true,
        // freeMode : false,
        spaceBetween : 25,

        // 터치 관련 옵션 추가
        touchEventsTarget: 'container',
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
        // 스와이프에 대한 추가 옵션
      });
    }

    // 600px 이상에서 스와이프 파괴
    if (screenWidth >= 600 && swiperContainer.classList.contains('swiper')) {
      swiperContainer.classList.remove('swiper');
      swiper.destroy();
    }
  }

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