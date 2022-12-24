/* GSAP */

window.gsap.registerPlugin(window.ScrollTrigger);

const appearOnScroll = [
  window.gsap.utils.toArray(".appear-on-scroll-1"),
  window.gsap.utils.toArray(".appear-on-scroll-2"),
  window.gsap.utils.toArray(".appear-on-scroll-3"),
  window.gsap.utils.toArray(".appear-on-scroll-4"),
  window.gsap.utils.toArray(".appear-on-scroll-5"),
  window.gsap.utils.toArray(".appear-on-scroll-6"),
];
const zoomImageOnScroll = [
  window.gsap.utils.toArray(".zoom-image-on-scroll-1"),
  window.gsap.utils.toArray(".zoom-image-on-scroll-2"),
  window.gsap.utils.toArray(".zoom-image-on-scroll-3"),
];

appearOnScroll.forEach((group) => {
  group.forEach((trigger, index) => {
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
});

zoomImageOnScroll.forEach((group) => {
  group.forEach((image, index) => {
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
});

const homeActionScrollTrigger = {
  trigger: ".home-action",
  start: "top bottom",
  end: "bottom top",
  scrub: true,
};

window.gsap.to(".home-action img", {
  y: -200,
  scrollTrigger: homeActionScrollTrigger,
});

// window.gsap.fromTo(
//   ".home-action > div",
//   { y: -50, scrollTrigger: homeActionScrollTrigger }
// );

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

const fadeFullscreenSlider = document.querySelector(".fade-fullscreen-slider");

if (fadeFullscreenSlider) {
  window.tns({
    container: fadeFullscreenSlider,
    items: 1,
    mode: "gallery",
    swipeAngle: false,
    speed: 2000,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    nav: false,
    controls: false,
  });
}
