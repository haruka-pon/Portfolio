
var getTranslate;
var slideWidth;

var mySwiper = new Swiper('.swiper-container', {
  speed: 14000,
  allowTouchMove: true,
  slidesPerView: 'auto',
  loop: true,
  freeMode: true,
  freeModeMomentum: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  on: {
    touchEnd: () => {
        getTranslate = mySwiper.getTranslate(); // スライドの現在位置を取得
        slideWidth = document.querySelector('.swiper-slide-active').offsetWidth; //スライドの横幅を取得
        mySwiper.setTranslate(getTranslate - slideWidth); // translateを更新
        mySwiper.setTransition(14000); //transitonを更新
    },
  }
})