function scrollTrigger(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
scrollTrigger();

function cursorEffect(){
    var page1Content=document.querySelector("#page1-content");
    var cursor=document.querySelector("#cursor");
    
    page1Content.addEventListener("mousemove",function(dets)    {
        // cursor.style.left=dets.x+"px";
        // cursor.style.top=dets.y+"px";
    
        gsap.to("#cursor",{
            x:dets.x,
            y:dets.y,
        })
    
    })
    
    
    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1,
        })
    })
    
    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0,
        })
    })
}
cursorEffect();


gsap.from("#page2content .left, #page2content .right, #page2content p", {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: "power3.out",
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 80%",
        toggleActions: "restart none none reset", // restarts the animation on scrolling up
    }
});


function cursorEffectForPage4() {
    var page4 = document.querySelector("#page4");
    var cursor2 = document.querySelector("#cursor2");

    page4.addEventListener("mousemove", function (event) {
        var boundingRect = page4.getBoundingClientRect();
        var mouseX = event.clientX - boundingRect.left;
        var mouseY = event.clientY - boundingRect.top;

        gsap.to(cursor2, {
            x: mouseX,
            y: mouseY,
        });
    });

    page4.addEventListener("mouseenter", function () {
        gsap.to(cursor2, {
            scale: 1,
            opacity: 1,
        });
    });

    page4.addEventListener("mouseleave", function () {
        gsap.to(cursor2, {
            scale: 0,
            opacity: 0,
        });
    });
}

cursorEffectForPage4();


function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode:true,
        grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
      });
}
swiper();


var tl=gsap.timeline()
tl.from("#loader h3",{
    x:40,
    duration:1,
    opacity:0,
    stagger:0.1,
})

tl.to("#loader h3",{
    x:-40,
    duration:0.5,
    opacity:0,
    stagger:0.1,
})

tl.to("#loader",{
    opacity:0,
    
})
tl.to("#loader",{
    display:"none",
    
})

tl.from("#page1-content h1 span ",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.1,
    delay:-0.5,

})


// var page4=document.querySelector("#page4 video");
//     var cursor2=document.querySelector("#cursor2");
    
//     page4.addEventListener("mousemove",function(dets)    {
//         // cursor.style.left=dets.x+"px";
//         // cursor.style.top=dets.y+"px";
    
//         gsap.to("#cursor2",{
//             x:dets.x,
//             y:dets.y,
//         })
    
//     })
    
    
//     page4.addEventListener("mouseenter",function(){
//         gsap.to(cursor2,{
//             scale:1,
//             opacity:1,
//         })
//     })
    
//     page4.addEventListener("mouseleave",function(){
//         gsap.to(cursor2,{
//             scale:0,
//             opacity:0,
//         })
//     })


    // Keep the existing cursorEffect function for cursor1

