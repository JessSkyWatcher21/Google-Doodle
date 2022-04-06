// GSAP included in `index.html`
console.log('OK');

gsap.fromTo(
  "#leftWing",
  {
    rotation: "20deg",
    y: 380,
  },
  {
    rotation: "-20deg",
    duration: 0.5,
    repeat: -1,
    yoyo: true,
  }
);

gsap.fromTo(
  "#rightWing",
  {
    rotation: "-20deg"
  },
  {
    rotation: "20deg",
    duration: 0.5,
    repeat: -1,
    yoyo: true
  }
);
gsap.fromTo(
  ".owl",
  {
    y: 380,
    x:-10,
  },
  {
    y: -35,
    duration: 7
  }
);
