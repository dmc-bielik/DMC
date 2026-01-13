/*
const scroller = document.querySelector('.special-scroller');

function isElementCenteredInViewport(el, tolerance = 200) {
  const rect = el.getBoundingClientRect();
  const viewportMid = window.innerHeight / 2;
  const elementMid = rect.top + rect.height / 2;

  // Check if the element's midpoint is close enough to viewport's midpoint
  return Math.abs(elementMid - viewportMid) <= tolerance;
}

document.addEventListener('wheel', function(e) {
  if (!isElementCenteredInViewport(scroller)) return; // Only when centered

  const atStart = scroller.scrollLeft === 0;
  const atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1;

  if (!(atStart && e.deltaY < 0) && !(atEnd && e.deltaY > 0)) {
    e.preventDefault();
    scroller.scrollLeft += e.deltaY;
  }
}, { passive: false });
*/

const scroller = document.querySelector('.special-scroller');

function isElementCenteredInViewport(el, tolerance = 200) {
  const rect = el.getBoundingClientRect();
  const viewportMid = window.innerHeight / 2;
  const elementMid = rect.top + rect.height / 2;
  return Math.abs(elementMid - viewportMid) <= tolerance;
}

function enableCustomScroll() {
  document.addEventListener('wheel', onWheelScroll, { passive: false });
}

function disableCustomScroll() {
  document.removeEventListener('wheel', onWheelScroll, { passive: false });
}

function onWheelScroll(e) {
  if (!isElementCenteredInViewport(scroller)) return;

  const atStart = scroller.scrollLeft === 0;
  const atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1;

  if (!(atStart && e.deltaY < 0) && !(atEnd && e.deltaY > 0)) {
    e.preventDefault();
    scroller.scrollLeft += e.deltaY;
  }
}

// Check screen size on load and resize
function handleScrollBehavior() {
  if (window.innerWidth >= 767) {
    enableCustomScroll();
    stopMobileAutoScroll();
  } else {
    disableCustomScroll();
    startMobileAutoScroll();
  }
}

//For mobile

document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.querySelector('.special-scroller');
  if (!scroller) return; // IMPORTANT: prevents site-wide breakage

  let mobileAutoScrollInterval = null;

  function isElementCenteredInViewport(el, tolerance = 200) {
    const rect = el.getBoundingClientRect();
    const viewportMid = window.innerHeight / 2;
    const elementMid = rect.top + rect.height / 2;
    return Math.abs(elementMid - viewportMid) <= tolerance;
  }

  function startMobileAutoScroll() {
    if (mobileAutoScrollInterval) return;

    mobileAutoScrollInterval = setInterval(() => {
      if (!isElementCenteredInViewport(scroller, 150)) return;

      const atEnd =
        scroller.scrollLeft + scroller.clientWidth >=
        scroller.scrollWidth - 1;

      if (atEnd) {
        stopMobileAutoScroll();
        return;
      }

      scroller.scrollLeft += 1.2;
    }, 16);
  }

  function stopMobileAutoScroll() {
    clearInterval(mobileAutoScrollInterval);
    mobileAutoScrollInterval = null;
  }

  function onWheelScroll(e) {
    if (!isElementCenteredInViewport(scroller)) return;

    const atStart = scroller.scrollLeft === 0;
    const atEnd =
      scroller.scrollLeft + scroller.clientWidth >=
      scroller.scrollWidth - 1;

    if (!(atStart && e.deltaY < 0) && !(atEnd && e.deltaY > 0)) {
      e.preventDefault();
      scroller.scrollLeft += e.deltaY;
    }
  }

  function enableCustomScroll() {
    document.addEventListener('wheel', onWheelScroll, { passive: false });
  }

  function disableCustomScroll() {
    document.removeEventListener('wheel', onWheelScroll);
  }

  function handleScrollBehavior() {
    if (window.innerWidth >= 767) {
      stopMobileAutoScroll();
      enableCustomScroll();
    } else {
      disableCustomScroll();
      startMobileAutoScroll();
    }
  }

  window.addEventListener('resize', handleScrollBehavior);
  handleScrollBehavior();

  
});

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
      y: 60,
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

if (window.location.pathname === "/") {
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
}


  const newhomeActionScrollTrigger = {
    trigger: ".newhome-action",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  };

  window.gsap.to(".newhome-action img", {
    y: -250,
    scrollTrigger: newhomeActionScrollTrigger,
  });


if (window.location.pathname.startsWith("/team")) {
  window.ScrollTrigger.create({
    trigger: ".team-expertise",
    start: "top 100px",
    end: "bottom 400px",
    pin: ".team-expertise__row-title",
  });
}

const getContainerWidth = () => {
  if (window.innerWidth < 1460)
    return window.innerWidth - window.innerWidth * 0.06;

  return 1400;
};

if (
  window.location.pathname.startsWith("/workforce-success") ||
  window.location.pathname.startsWith("/learning-success")
) {
  if (window.innerWidth > 767) {
    window.gsap.to(".sticky-hero img", {
      scrollTrigger: {
        trigger: ".sticky-hero",
        start: "-142px top",
        end: "top top",
        scrub: true,
        pin: ".header",
        pinSpacing: false,
      },
      borderRadius: "13px",
      width: `${getContainerWidth()}px`,
      left: `${(window.innerWidth - getContainerWidth()) / 2}px`,
      right: `${(window.innerWidth - getContainerWidth()) / 2}px`,
      top: "150px",
      maxHeight: window.innerWidth > 767 ? "700px" : "400px",
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
}

if (window.location.pathname.startsWith("/workforce-success")) {
  const wsRelationshipScrollTrigger = {
    trigger: ".ws-relationship__content",
    start: "top bottom",
    end: "top 100px",
    scrub: 0.5,
  };

  window.gsap.fromTo(
    ".ws-relationship__content--img-1",
    { left: -300 },
    {
      scrollTrigger: wsRelationshipScrollTrigger,
      left: 0,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.fromTo(
    ".ws-relationship__content--img-2",
    { right: -300 },
    {
      scrollTrigger: wsRelationshipScrollTrigger,
      right: 0,
      duration: 2,
      ease: "linear",
    }
  );

  const strategiesScrollTrigger = {
    trigger: ".ws-strategies",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
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
        scrub: 1,
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
    scrub: 1,
  };

  window.gsap.fromTo(
    ".ws-engagements__circles-1",
    { y: -40 },
    {
      scrollTrigger: engagementsScrollTrigger,
      y: 40,
      duration: 2,
      ease: "linear",
    }
  );

  window.gsap.to(".ws-engagements__circles-2", {
    rotate: "360deg",
    repeat: -1,
    duration: 8,
    ease: "linear",
  });

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
      { x: 50 },
      {
        scrollTrigger: {
          trigger,
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
        x: 0,
        duration: 2,
        ease: "linear",
      }
    );

    if (window.innerWidth > 767) {
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
    }

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
}

if (window.location.pathname.startsWith("/keynote-speaker")) {
  window.gsap.fromTo(
    ".ks-presentations__cards--block-1, .ks-presentations__cards--block-2, .ks-presentations__cards--block-5",
    { y: -50 },
    {
      y: 0,
      ease: "linear",
      scrollTrigger: {
        trigger: ".ks-presentations",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }
  );

  window.gsap.fromTo(
    ".ks-presentations__cards--block-3, .ks-presentations__cards--block-4, .ks-presentations__cards--block-6",
    { x: 0 },
    {
      x: 20,
      ease: "linear",
      scrollTrigger: {
        trigger: ".ks-presentations",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      },
    }
  );

  const presentationTl = window.gsap.timeline({
    scrollTrigger: {
      trigger: ".ks-presentation",
      start: "top 100%+=150px",
      end: "top top",
      scrub: 0.1,
    },
    defaults: { ease: "linear" },
  });

  presentationTl
    .to(".ks-presentation__circle--red", { y: -300, scale: 0.2 })
    .to(".ks-presentation__circle--red", {
      y: 0,
      scale: 0.4,
      duration: 2,
    })
    .to(".ks-presentation__circle--red", {
      y: -30,
      scale: 0.9,
      duration: 0.3,
    })
    .to(".ks-presentation__circle--red", { scale: 1, duration: 1 });

  if (window.innerWidth > 767) {
    window.gsap.fromTo(
      ".ks-presentation__circle--blue",
      { y: -10 },
      {
        y: 30,
        scrollTrigger: {
          trigger: ".ks-presentation",
          start: "top center",
          end: "bottom top",
          scrub: 0.2,
        },
      }
    );
  }
}

if (window.location.pathname.startsWith("/story")) {
  window.gsap.to(".story-hero img", {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 1,
  });

  window.gsap.to(".story-hero h1", {
    y: 0,
    opacity: 1,
    duration: 1,
  });

  if (window.innerWidth > 767) {
    const timelineEl = document.querySelector(".story-story__timeline");

    window.addEventListener("load", () => {
      window.gsap.to(".story-story__timeline", {
        x: -(timelineEl.scrollWidth - timelineEl.offsetWidth),
        ease: "linear",
        scrollTrigger: {
          trigger: ".story-story__timeline",
          start: "top top",
          end: "+=10000",
          scrub: 0.1,
          pin: true,
        },
      });
    });

    /* Array.from(timelineEl.children).forEach((el) => {
      window.gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: "left right",
            end: "left center",
            // horizontal: true,
            // markers: true,
          },
        }
      );
    }); */

    /* const storyTl = window.gsap.timeline({
      scrollTrigger: {
        trigger: ".story-story__timeline",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.1,
      },
      defaults: { ease: "linear", opacity: 1, y: 0 },
    });

    storyTl
      .to(".story-story__row--img-1", {})
      .to(".story-story__row--img-2", {})
      .to(".story-story__row--img-3", {})
      .to(".story-story__row--img-4", {})
      .to(".story-story__row--img-5", {})
      .to(".story-story__row--img-6", {})
      .to(".story-story__row--img-7", { delay: 1 })
      .to(".story-story__row--img-8", {})
      .to(".story-story__row--img-8", {})
      .to(".story-story__row--img-9", {})
      .to(".story-story__row--img-10", {})
      .to(".story-story__row--img-11", {})
      .to(".story-story__row--img-12", {})
      .to(".story-story__row--img-13", { delay: 1 })
      .to(".story-story__row--img-14", {})
      .to(".story-story__row--img-15", {})
      .to(".story-story__row--img-16", {})
      .to(".story-story__row--img-17", {})
      .to(".story-story__row--img-18", {})
      .to(".story-story__row--img-19", {})
      .to(".story-story__row--img-20", {})
      .to(".story-story__row--img-21", {})
      .to(".story-story__row--img-22", {})
      .to(".story-story__row--img-23", {})
      .to(".story-story__row--img-24", {})
      .to(".story-story__row--img-25", {})
      .to(".story-story__row--img-26", {})
      .to(".story-story__row--img-27", {})
      .to(".story-story__row--img-28", {})
      .to(".story-story__row--img-29", {})
      .to(".story-story__row--img-30", {})
      .to(".story-story__row--img-31", {})
      .to(".story-story__row--img-32", {})
      .to(".story-story__row--img-33", {})
      .to(".story-story__row--img-34", {})
      .to(".story-story__row--img-35", {})
      .to(".story-story__row--img-36", {})
      .to(".story-story__row--img-37", {})
      .to(".story-story__row--img-38", {})
      .to(".story-story__row--img-39", {}); */
  } else {
    const storyImages = window.gsap.utils.toArray(".story-story__row--img");

    storyImages.forEach((trigger) => {
      window.gsap.fromTo(
        trigger,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "linear",
          scrollTrigger: {
            trigger,
            start: "top 70%",
            end: "+=300px",
            scrub: true,
          },
        }
      );
    });
  }
}

if (window.location.pathname.startsWith("/community-transformation")) {
  window.gsap.to(".ct-community__row-1 img", {
    scale: 1.1,
    scrollTrigger: {
      trigger: ".ct-community__row-1",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    ease: "linear",
  });

  window.gsap.to(".ct-community__row-2 img", {
    scale: 1.1,
    scrollTrigger: {
      trigger: ".ct-community__row-2",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    ease: "linear",
  });

  window.gsap.to(".ct-community__strategies--block-1", {
    x: -70,
    scrollTrigger: {
      trigger: ".ct-community__row-3",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    ease: "linear",
  });

  window.gsap.to(".ct-community__strategies--block-2", {
    y: 100,
    scrollTrigger: {
      trigger: ".ct-community__row-3",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    ease: "linear",
  });

  window.gsap.from(".ct-work img", {
    y: window.innerWidth > 767 ? -70 : 140,
    scrollTrigger: {
      trigger: ".ct-work",
      start: "top bottom",
      end: "bottom center",
      scrub: 1,
    },
    ease: "linear",
  });
}

/* Sliders */

const marqueeSliderCommon = {
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayHoverPause: true,
  // mouseDrag: true,
  loop: true,
  speed: 1000,
  nav: false,
  controls: false,
  navPosition: "bottom",
};

/*
const homeTestimonialsSlider = new window.Swiper(".home-testimonials__slider", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  slidesPerView: 2,
  speed: 1000,
  breakpoints: {
    767: {
      slidesPerView: 3,
    },
    979: {
      slidesPerView: 4,
    },
  },
});
*/

const lsReviewsSlider = new window.Swiper(".ls-reviews__slider", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  slidesPerView: 2,
  speed: 1000,
  breakpoints: {
    767: {
      slidesPerView: 3,
    },
    979: {
      slidesPerView: 4,
    },
  },
});

window.addEventListener("click", (e) => {
  const { target } = e;

  if (target.classList.contains("home-testimonials__item--read-more")) {
    const itemContent = target.parentElement.children[0];

    if (itemContent.classList.contains("expanded")) {
      itemContent.classList.remove("expanded");
      target.innerHTML = "read more";
    } else {
      itemContent.classList.add("expanded");
      target.innerHTML = "collapse";
    }

    homeTestimonialsSlider.updateSize();
  }

  if (target.classList.contains("ws-reviews__cards--read-more")) {
    const itemContent = target.parentElement.children[0];

    if (itemContent.classList.contains("expanded")) {
      itemContent.classList.remove("expanded");
      target.innerHTML = "read more";
    } else {
      itemContent.classList.add("expanded");
      target.innerHTML = "collapse";
    }

    lsReviewsSlider.updateSize();
  }
});

new window.Swiper(".move-up-swiper", {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
});

/* Images fade animation */

const imagesFade = ["ws-hero-background", "ls-hero-image", "ks-hero__img--img"];

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
    if (p.scrollHeight > p.offsetHeight + 1) {
      const readMoreLink = document.createElement("a");

      readMoreLink.className = "body-paragraph team-member__row--bio-read-more";
      readMoreLink.href = "#!";
      readMoreLink.innerHTML = "read more";
      readMoreLink.onclick = (e) => {
        e.preventDefault();

        p.classList.toggle("is-expanded");
        p.parentElement.querySelector(
          ".team-member__row--bio-read-more"
        ).innerHTML =
          p.parentElement.querySelector(".team-member__row--bio-read-more")
            .innerHTML === "read more"
            ? "collapse"
            : "read more";
      };

      p.parentElement.appendChild(readMoreLink);
    } else {
      p.classList.add("is-expanded");
    }
  });
}

/* Podcast */

const podcastListRow = document.querySelector(".podcast-list__row");

if (podcastListRow) {
  let videoPlayers = [];

  const startYouTubePlayer = (podcastListItem) => {
    const videoIframe = podcastListItem.querySelector(".podcast-list__youtube");
    const playButton = podcastListItem.querySelector(
      ".podcast-list__content--play"
    );
    const playButtonIcon = playButton.children[0];
    const youtubeURL = new URL(podcastListItem.dataset.youtube);
    const videoId = youtubeURL.searchParams.get("v");

    videoPlayers.push(
      new YT.Player(videoIframe, {
        height: "390",
        width: "640",
        videoId,
        playerVars: {
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
          onStateChange: (state) => {
            switch (state.data) {
              case -1: // Unstarted
                break;

              case 0: // Ended
              case 2: // Paused
                playButtonIcon.src = "/assets/images/podcast/play-circle.svg";
                break;

              case 1: // Playing
                playButtonIcon.src = "/assets/images/podcast/pause-circle.svg";
                break;

              case 3: // Buffering
                break;

              case 5: // Video cued
                break;

              default:
                break;
            }
          },
        },
      })
    );
  };

  const totalPodcasts = podcastListRow.children.length;

  Array.from(podcastListRow.children).forEach((p, index) => {
    const reversedIndex = totalPodcasts - index;

    p.querySelector(".podcast-list__content--ep").innerHTML = `EP${
      reversedIndex < 10 ? `0${reversedIndex}` : reversedIndex
    }`;

    const excerpt = p.querySelector(".podcast-list__content--excerpt");
    const excerptContent = excerpt.querySelector("p");

    if (excerptContent.scrollHeight > excerptContent.offsetHeight + 1) {
      const readMoreLink = document.createElement("a");

      readMoreLink.className =
        "body-paragraph podcast-list__content--excerpt-read-more";
      readMoreLink.href = "#!";
      readMoreLink.innerHTML = "read more";
      readMoreLink.onclick = (e) => {
        e.preventDefault();

        excerpt.classList.toggle("is-expanded");
        excerpt.querySelector(
          ".podcast-list__content--excerpt-read-more"
        ).innerHTML =
          excerpt.querySelector(".podcast-list__content--excerpt-read-more")
            .innerHTML === "read more"
            ? "collapse"
            : "read more";
      };

      excerpt.appendChild(readMoreLink);
    } else {
      excerpt.classList.add("is-expanded");
    }

    p.querySelector(".podcast-list__content--play").addEventListener(
      "click",
      (e) => {
        const youtubeURL = new URL(p.dataset.youtube);

        const videoId = youtubeURL.searchParams.get("v");

        videoPlayers.forEach((player) => {
          const videoUrl = player.getVideoUrl();

          if (new URL(videoUrl).searchParams.get("v") === videoId) {
            if (player.getPlayerState() === 1) player.pauseVideo();
            if (player.getPlayerState() === 2) player.playVideo();
          } else {
            player.pauseVideo();
          }
        });

        if (
          !videoPlayers.some(
            (player) =>
              new URL(player.getVideoUrl()).searchParams.get("v") === videoId
          )
        )
          startYouTubePlayer(p);
      }
    );
  });

  document.querySelectorAll(".podcast-list__content--expand").forEach((el) => {
    el.addEventListener("click", (e) => {
      const toggleButton = e.target.closest(".podcast-list__content--expand");

      const toggleButtonImg = toggleButton.children[0];

      const listItem = e.target.closest(".podcast-list__item");

      if (listItem.classList.contains("expanded")) {
        listItem.classList.remove("expanded");
        toggleButtonImg.style.transform = null;
        listItem.style.height = null;
        listItem.style.top = null;
        listItem.children[0].style.width = null;
      } else {
        listItem.style.height = `${listItem.offsetHeight}px`;
        listItem.style.top = `${listItem.offsetTop}px`;
        listItem.children[0].style.width = `${listItem.offsetWidth - 60}px`;
        listItem.classList.add("expanded");
        toggleButtonImg.style.transform = "rotate(180deg)";

        if (
          !videoPlayers.some(
            (player) =>
              new URL(player.getVideoUrl()).searchParams.get("v") ===
              new URL(listItem.dataset.youtube).searchParams.get("v")
          )
        )
          startYouTubePlayer(listItem);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.newhome-clients__images');
  if (!container) {
    console.error('No container found');
    return;
  }

  // small interval to test
  setInterval(() => {
    container.scrollLeft += 2;
  }, 1); // ~60fps
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.homethree-clients__images');
  if (!container) {
    console.error('No container found');
    return;
  }

  // small interval to test
  setInterval(() => {
    container.scrollLeft += 2;
  }, 1); // ~60fps
});

//impact page carousel

document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  const viewport = carousel.querySelector('.carousel-viewport');

  let originalCards = Array.from(track.children);
  let index = 0;
  let visibleCards = 1;
  let gap = parseInt(getComputedStyle(track).gap) || 0;

  function setup() {
    // Reset track
    track.innerHTML = '';
    originalCards.forEach(card => track.appendChild(card));

    const cardWidth = originalCards[0].offsetWidth;
    const viewportWidth = viewport.offsetWidth;

    visibleCards = Math.round(viewportWidth / cardWidth);
    visibleCards = Math.max(1, visibleCards); // safety

    // Clone edges
    originalCards
      .slice(-visibleCards)
      .forEach(card => track.insertBefore(card.cloneNode(true), track.firstChild));

    originalCards
      .slice(0, visibleCards)
      .forEach(card => track.appendChild(card.cloneNode(true)));

    index = visibleCards;
    move(false);
  }

  function move(animate = true) {
    const cardWidth = track.children[0].offsetWidth;
    track.style.transition = animate ? 'transform 0.4s ease' : 'none';
    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
  }

  nextBtn.addEventListener('click', () => {
    index++;
    move();

    if (index >= track.children.length - visibleCards) {
      setTimeout(() => {
        index = visibleCards;
        move(false);
      }, 400);
    }
  });

  prevBtn.addEventListener('click', () => {
    index--;
    move();

    if (index <= 0) {
      setTimeout(() => {
        index = track.children.length - visibleCards * 2;
        move(false);
      }, 400);
    }
  });

  window.addEventListener('resize', setup);

  setup();
});



