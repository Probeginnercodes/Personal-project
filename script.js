const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circlechaptakaro() {
    // Define default scale value
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function(dets) {
        const xdiff = dets.clientX - xprev;
        const ydiff = dets.clientY - yprev;
        xprev = dets.clientX;
        yprev = dets.clientY;

        xscale = gsap.utils.clamp(0.8, 1.2, xscale + xdiff * 0.005);
        yscale = gsap.utils.clamp(0.8, 1.2, yscale + ydiff * 0.005);
        circlemousefollower(xscale, yscale, dets.clientX, dets.clientY);
    });
}

function firstpageanim() {
    const tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut,
    })
    .to(".boundingelem", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: -1.5,
        ease: Expo.easeInOut,
        stagger: 0.2
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: .2,
        delay: 1,
        ease: Expo.easeInOut,
    });
}

function circlemousefollower(xscale, yscale, clientX, clientY) {
    const miniCircle = document.querySelector('#mini-circle');
    miniCircle.style.transform = `translate(${clientX}px, ${clientY}px) scale(${xscale}, ${yscale})`;
}

document.querySelectorAll(".elem").forEach(function(elem){

    var rotate = 0; 
    var diffroot = 0;
    

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });
    
    elem.addEventListener("mousemove", function (dets){ 

      let diff = (dets.clientY - elem.getBoundingClientRect().top);
      diffroot =  rotate -dets.clientX; 
      rotate = dets.clientX + dets.clientY;
      gsap.to(elem.querySelector("img"),{
        opacity: 1, 
        ease: 1,
        top: diff,
        left: dets.clientX, 
        rotate:  gsap.utils.clamp(-20,20, diffroot),
      })
    });
});

circlechaptakaro();
firstpageanim();