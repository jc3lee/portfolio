const INTERACTIVE_TEXT_ARR = ["fast", "responsive", "interactive", "original", "performant", "modern", "accessible"]
let interactiveCurrentIndex = 0
const interactiveTextP = document.querySelector(".interactiveText")

const getInTouchIcons = document.querySelectorAll(".getInTouchIcon")

gsap.registerPlugin(ScrollTrigger)

gsap.set("#scrollToTopBtn", { autoAlpha: 0 })

gsap.set("#tmpTab", { opacity: 0, xPercent: -100 })
gsap.set("#tmpNav", { opacity: 0, y: 100 })
gsap.set("#tmpNavHead", { opacity: 0, y: 30 })
gsap.set("#tmpNavLine1", { opacity: 0, x: -30 })
gsap.set("#tmpNavLine2", { opacity: 0, x: -30 })
gsap.set("#tmpNavLine3", { opacity: 0, x: -30 })
gsap.set("#tmpNavLine4", { opacity: 0, x: -30 })
gsap.set("#tmpMainImgBg", { opacity: 0 })
gsap.set("#tmpMainImg", { opacity: 0, scale: 3 })
gsap.set("#tmpMainHeader", { opacity: 0, y: 15 })
gsap.set("#tmpMainLine1", { opacity: 0, y: 15 })
gsap.set("#tmpMainLine2", { opacity: 0, y: 15 })
gsap.set("#tmpSide", { opacity: 0, y: -100 })
gsap.set("#tmpSideAva", { opacity: 0, scale: 0 })
gsap.set("#tmpSideLine1", { opacity: 0, x: 30 })
gsap.set("#tmpSideLine2", { opacity: 0, x: 30 })
gsap.set("#tmpSideLine3", { opacity: 0, x: 30 })
gsap.set("#tmpSideBtnOut", { opacity: 0, scaleX: 0 })
gsap.set("#tmpSideBtnIn", { opacity: 0, scaleX: 0 })
gsap.set("#parallaxImg1", { opacity: 1 })

gsap.set(".animRespMobile", {
  rotation: 15,
  x: "4rem",
})

gsap.to("#scrollToTopBtn", {
  scrollTrigger: {
    trigger: "#skillsDiv",
    start: "50px top",
    start: "-50px bottom",
    toggleActions: "restart none resume reverse",
  },
  autoAlpha: 1,
})

gsap.set(".parallaxMe1", {
  yPercent: 90,
})
gsap.to(".parallaxMe1", {
  scrollTrigger: {
    trigger: ".parallaxMe1",
    start: "1rem bottom",
    scrub: true,
  },
  yPercent: 60,
})

gsap.set(".parallaxMe2", {
  yPercent: 60,
})
gsap.to(".parallaxMe2", {
  scrollTrigger: {
    trigger: ".parallaxMe2",
    start: "top center",
    scrub: true,
  },
  yPercent: 30,
})

gsap.to(".animTmp", {
  scrollTrigger: {
    trigger: ".animTmp",
    start: "center bottom",
  },
  onStart: runAnimTmp,
})

gsap.to(".animRespMobile", {
  scrollTrigger: {
    trigger: ".animRespMobile",
    toggleActions: "restart none none reverse",
    start: "65% bottom",
    // markers: true,
  },
  rotation: 5,
  x: "-1rem",
  duration: 1,
  ease: "power2",
})

const projects = document.querySelectorAll(".project")

projects.forEach(project => {
  gsap.fromTo(project, {
    y: 100,
    opacity: 0,
  }, {
    scrollTrigger: {
      trigger: project,
      toggleActions: "restart none none reverse",
    },
    y: 0,
    opacity: 1,
  })
})

function runAnimTmp() {
  const tl = gsap.timeline()
  tl
    .to("#tmpTab", { opacity: 1, xPercent: 0, duration: 0.2 })
    .to("#tmpNav", { opacity: 1, y: 0, duration: 0.4 })
    .to("#tmpNavHead", { opacity: 1, y: 0, duration: 0.3 })
    .to("#tmpNavLine1", { opacity: 1, x: 0, duration: 0.3, delay: -0.2 })
    .to("#tmpNavLine2", { opacity: 1, x: 0, duration: 0.3, delay: -0.15 })
    .to("#tmpNavLine3", { opacity: 1, x: 0, duration: 0.3, delay: -0.15 })
    .to("#tmpNavLine4", { opacity: 1, x: 0, duration: 0.3, delay: -0.15 })
    .to("#tmpMainImgBg", { opacity: 1, scale: 1, duration: 0.3, delay: 0 })
    .to("#tmpMainImg", { opacity: 1, scale: 0.2, duration: 0.5, delay: -0.1 })
    .to("#tmpMainHeader", { opacity: 1, y: 0, duration: 0.3, delay: -0.1 })
    .to("#tmpMainLine1", { opacity: 1, y: 0, duration: 0.3, delay: -0.2 })
    .to("#tmpMainLine2", { opacity: 1, y: 0, duration: 0.3, delay: -0.2 })
    .to("#tmpSide", { opacity: 1, y: 0, duration: 0.3, delay: -0.1 })
    .to("#tmpSideAva", { opacity: 1, scale: 1, duration: 0.3, delay: 0 })
    .to("#tmpSideLine1", { opacity: 1, x: 0, duration: 0.3, delay: -0.15 })
    .to("#tmpSideLine2", { opacity: 1, x: 0, duration: 0.3, delay: -0.15 })
    .to("#tmpSideLine3", { opacity: 1, x: 0, duration: 0.3, delay: -0.15 })
    .to("#tmpSideBtnOut", { opacity: 1, scaleX: 1, duration: 0.4, delay: 0 })
    .to("#tmpSideBtnIn", { opacity: 1, scaleX: 1, duration: 0.4, delay: -0.3 })


}

getInTouchIcons.forEach(getInTouchIcon => {
  gsap.fromTo(getInTouchIcon, {
    scale: 0,
  }, {
    scrollTrigger: {
      trigger: getInTouchIcon,
      start: "bottom bottom",
      toggleActions: "restart none none reverse",
    },
    scale: 1,
  })
})

const tlText = gsap.timeline()

tlText.fromTo(".bandInteractive", { xPercent: 100 }, {
  xPercent: 0,
  duration: 0.7,
  ease: "linear",
  delay: 0.7,
  onComplete: changeInteractiveText,
}).fromTo(".bandInteractive", { xPercent: 0 }, {
  xPercent: -100,
  duration: 0.7,
  ease: "linear",
  delay: 0.1,
  onComplete: playInteractive,
})

function changeInteractiveText() {
  interactiveCurrentIndex++
  if (interactiveCurrentIndex === INTERACTIVE_TEXT_ARR.length) interactiveCurrentIndex = 0
  interactiveTextP.innerText = INTERACTIVE_TEXT_ARR[interactiveCurrentIndex]
}

function playInteractive() {
  tlText.seek(0)
  tlText.play()
}