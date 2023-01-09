/* GSAP */

window.gsap.registerPlugin(window.ScrollTrigger);

const appearOnScroll = [
  window.gsap.utils.toArray(".appear-on-scroll-1"),
  window.gsap.utils.toArray(".appear-on-scroll-2"),
  window.gsap.utils.toArray(".appear-on-scroll-3"),
  window.gsap.utils.toArray(".appear-on-scroll-4"),
  window.gsap.utils.toArray(".appear-on-scroll-5"),
  window.gsap.utils.toArray(".appear-on-scroll-6"),
  window.gsap.utils.toArray(".appear-on-scroll-7"),
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
  y: -250,
  scrollTrigger: homeActionScrollTrigger,
});

window.ScrollTrigger.create({
  trigger: ".team-expertise",
  start: "top 100px",
  end: "bottom 290px",
  pin: ".team-expertise__row-title",
});

if (window.location.pathname.startsWith("/workforce-success")) {
  window.gsap.to(".ws-hero img", {
    scrollTrigger: {
      trigger: ".ws-hero",
      start: "-148px top",
      end: "top top",
      scrub: true,
      pin: ".header",
      pinSpacing: false,
    },
    borderRadius: "13px",
    width: "1400px",
    left: `${(window.innerWidth - 1400) / 2}px`,
    right: `${(window.innerWidth - 1400) / 2}px`,
    top: "150px",
    maxHeight: "700px",
  });
  window.gsap.fromTo(
    ".header",
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".ws-hero",
        start: "-100px top",
        end: "+=40px",
        scrub: true,
      },
      opacity: 1,
    }
  );
}

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
    items: 3,
  });
}

const lsReviewsCards = document.querySelector(".ls-reviews__cards");

if (lsReviewsCards) {
  window.tns({
    ...marqueeSliderCommon,
    container: lsReviewsCards,
    speed: 2000,
    items: 4,
    autoplayTimeout: 4000,
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
    // nav: false,
    // navContainer: "",
    controls: false,
  });
}

/* Images fade animation */

const imagesFade = [
  "home-approach-background",
  "home-who-image",
  "ls-hero-image",
];

imagesFade.forEach((i) => {
  const images = document.querySelectorAll(`.${i}`);

  if (images) {
    let activeIndex = 0;

    window.setInterval(() => {
      activeIndex = activeIndex + 1 === images.length ? 0 : activeIndex + 1;

      Array.from(images).forEach((el, index) => {
        if (activeIndex === index) {
          el.classList.add("is-visible");
        } else {
          el.classList.remove("is-visible");
        }
      });
    }, 5000);
  }
});

/* MISC */

if (window.location.pathname.startsWith("/team")) {
  const bioParagraphs = document.querySelectorAll(".team-member__row--bio");

  Array.from(bioParagraphs || []).forEach((p) => {
    if (p.scrollHeight > p.offsetHeight) {
      const readMoreLink = document.createElement("a");

      readMoreLink.className = "body-paragraph team-member__row--bio-read-more";
      readMoreLink.href = "#!";
      readMoreLink.innerHTML = "read more";
      readMoreLink.onclick = (e) => {
        e.preventDefault();

        p.classList.add("is-expanded");
        p.parentElement.querySelector(
          ".team-member__row--bio-read-more"
        ).style.display = "none";
      };

      p.parentElement.appendChild(readMoreLink);
    } else {
      p.classList.add("is-expanded");
    }
  });
}
