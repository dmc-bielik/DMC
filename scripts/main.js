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

if (
  window.location.pathname.startsWith("/workforce-success") ||
  window.location.pathname.startsWith("/learning-success")
) {
  window.gsap.to(".sticky-hero img", {
    scrollTrigger: {
      trigger: ".sticky-hero",
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
        trigger: ".sticky-hero",
        start: "-100px top",
        end: "+=40px",
        scrub: true,
      },
      opacity: 1,
    }
  );
}

if (window.location.pathname.startsWith("/workforce-success")) {
  window.gsap.to(".ws-relationship__content--img-1", {
    scrollTrigger: {
      trigger: ".ws-relationship__content",
      start: "bottom bottom",
      end: "+=270px",
    },
    opacity: 1,
    left: 0,
    duration: 2,
    ease: "power2.out",
  });

  window.gsap.to(".ws-relationship__content--img-2", {
    scrollTrigger: {
      trigger: ".ws-relationship__content",
      start: "bottom bottom",
      end: "+=270px",
    },
    opacity: 1,
    right: 0,
    duration: 2,
    ease: "power2.out",
  });

  const strategiesScrollTrigger = {
    trigger: ".ws-strategies",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  };

  window.gsap.fromTo(
    ".ws-strategies__row--img-1",
    { y: -150 },
    {
      scrollTrigger: strategiesScrollTrigger,
      y: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ws-strategies__row--img-2",
    { y: -80 },
    {
      scrollTrigger: strategiesScrollTrigger,
      y: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ws-strategies__row--img-3",
    { y: 30 },
    {
      scrollTrigger: strategiesScrollTrigger,
      y: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ws-strategies__row--img-4",
    { y: 150 },
    {
      scrollTrigger: strategiesScrollTrigger,
      y: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ws-strategies__row--img-5",
    { y: 90 },
    {
      scrollTrigger: strategiesScrollTrigger,
      y: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ws-who__row img",
    { y: 40 },
    {
      scrollTrigger: {
        trigger: ".ws-who__row",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: -40,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ws-clients",
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".ws-clients",
        start: "top center",
      },
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    }
  );

  const engagementsScrollTrigger = {
    trigger: ".ws-engagements",
    start: "top center",
    end: "bottom top",
    scrub: true,
  };

  window.gsap.fromTo(
    ".ws-engagements__circles-1",
    { y: -30 },
    {
      scrollTrigger: engagementsScrollTrigger,
      y: 30,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ws-engagements__circles-2",
    { rotate: "0deg" },
    {
      scrollTrigger: engagementsScrollTrigger,
      rotate: "90deg",
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ws-engagements__circles-3",
    { y: 20 },
    {
      scrollTrigger: engagementsScrollTrigger,
      y: -40,
      duration: 2,
      ease: "linear",
    }
  );
}

if (window.location.pathname.startsWith("/learning-success")) {
  const lsStrategiesScrollTrigger = {
    trigger: ".ls-strategies",
    start: "top bottom",
    end: "top 20%",
    scrub: true,
  };

  window.gsap.fromTo(
    ".ls-strategies__blocks-2",
    { y: -50 },
    {
      scrollTrigger: lsStrategiesScrollTrigger,
      y: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ls-strategies__blocks-3",
    { y: 80 },
    {
      scrollTrigger: lsStrategiesScrollTrigger,
      y: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ls-strategies__blocks-4",
    { y: -120 },
    {
      scrollTrigger: lsStrategiesScrollTrigger,
      y: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ls-strategies__blocks-6",
    { x: 50 },
    {
      scrollTrigger: lsStrategiesScrollTrigger,
      x: 0,
      duration: 2,
      ease: "linear",
    }
  );

  ["#ls-k12-1", "#ls-k12-2"].forEach((trigger) => {
    window.gsap.fromTo(
      ".ls-k12__row--move-1",
      { y: -50 },
      {
        scrollTrigger: {
          trigger,
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
        y: 0,
        duration: 2,
        ease: "linear",
      }
    );

    window.gsap.fromTo(
      ".ls-k12__row--move-2",
      { y: -100 },
      {
        scrollTrigger: {
          trigger,
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
        y: 0,
        duration: 2,
        ease: "linear",
      }
    );

    window.gsap.fromTo(
      ".ls-k12__row--move-4 p",
      { y: 0 },
      {
        scrollTrigger: {
          trigger: `${trigger} .ls-k12__row--move-3`,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 100,
        duration: 2,
        ease: "linear",
      }
    );

    window.gsap.fromTo(
      ".ls-k12__row--move-5",
      { x: -50 },
      {
        scrollTrigger: {
          trigger,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        x: 0,
        duration: 2,
        ease: "linear",
      }
    );
  });

  ["#ls-k12-clients", "#ls-college-clients"].forEach((trigger) => {
    window.gsap.fromTo(
      trigger,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger,
          start: "top center",
        },
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }
    );
  });

  const lsEngagementsScrollTrigger = {
    trigger: ".ls-engagements",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  };

  window.gsap.fromTo(
    ".ls-engagements__visuals--1",
    { y: 150 },
    {
      scrollTrigger: lsEngagementsScrollTrigger,
      y: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ls-engagements__visuals--2",
    { y: -50 },
    {
      scrollTrigger: lsEngagementsScrollTrigger,
      y: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ls-engagements__visuals--3",
    { x: -150 },
    {
      scrollTrigger: lsEngagementsScrollTrigger,
      x: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ls-engagements__visuals--4",
    { x: -60 },
    {
      scrollTrigger: lsEngagementsScrollTrigger,
      x: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ls-engagements__visuals--5",
    { x: -25 },
    {
      scrollTrigger: lsEngagementsScrollTrigger,
      x: 25,
      duration: 2,
      ease: "linear",
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
    // autoplayHoverPause: true,
    // animateDelay: 2000,
    animateIn: "tns-fade-in",
    animateOut: "tns-fade-out",
    animateNormal: "tns-fade-out",
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
