/* GSAP */

window.gsap.registerPlugin(window.ScrollTrigger);

const appearOnScroll = window.gsap.utils.toArray(".appear-on-scroll");
const zoomImageOnScroll = window.gsap.utils.toArray(".zoom-image-on-scroll");

appearOnScroll.forEach((trigger, index) => {
  window.gsap.from(trigger, {
    delay: 0.1 * index,
    duration: 2,
    opacity: 0,
    y: 150,
    ease: "power2.out",
    scrollTrigger: {
      trigger,
      start: "top bottom",
    },
  });
});

zoomImageOnScroll.forEach((image, index) => {
  window.gsap.from(image, {
    delay: 0.1 * index,
    duration: 2,
    scale: 1.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
    },
  });
});

/* Sliders */

const marqueeSliderCommon = {
  autoplay: true,
  preventActionWhenRunning: true,
  autoplayTimeout: 0,
  autoplayButtonOutput: false,
  autoplayHoverPause: true,
  mouseDrag: true,
  loop: true,
  speed: 4000,
  nav: false,
  controls: false,
  navPosition: "bottom",
};

const homeTestimonialsSlider = document.querySelector(".home-testimonials");

if (homeTestimonialsSlider) {
  window.tns({
    ...marqueeSliderCommon,
    container: homeTestimonialsSlider,
    // items: 3,
    // slideBy: "page",
    // autoplay: false,
    // loop: false,
    // autoWidth: true,
    items: 3,
  });
}
