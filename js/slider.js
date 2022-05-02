document.addEventListener('DOMContentLoaded', () => {
  // инициализация слайдера
  new ItcSimpleSlider('.itcss--desktop', {
    loop: true,
    autoplay: true,
    interval: 5000,
    swipe: true,
    indicators: true,
  });

  new ItcSimpleSlider('.itcss--mobile', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
    indicators: true,
  });
});
