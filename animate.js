const t1 = gsap.timeline({
  defaults: { duration: 0.5, ease: "power1.out" },
});

t1.from("#navbar", { y: -100, opacity: 0 })
  .from(
    "#main",
    {
      x: 100,
      opacity: 0,
    },
    "<.5"
  )
  .from("#bunch-o-cards", {
    y: 100,
    opacity: 0,
  })
  .from(".card", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
  });
