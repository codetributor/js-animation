import { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { ScrollTrigger } from "gsap/dist//ScrollTrigger";

function useLocoScroll() {
  useEffect(() => {
    let locoScroll = null;

    (async () => {
      try {
        const LocomovtiveScroll = (await import("locomotive-scroll")).default;
        const scrollContainer = document.querySelector(".scroll-container");

        const locoScroll = new LocomovtiveScroll({
          el: scrollContainer,
          smooth: true,
          multiplier: 1,
          getSpeed: true,
          getDirection: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true
          }
        });
        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollContainer,  {
          scrollTop(value) {
            return arguments.length ? locoScroll.srcollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
            }
          }
        })
        const lsUpdate = () => {
          if(locoScroll) {
            locoScroll.update();
          }
        }
        ScrollTrigger.addEventListener("refresh", lsUpdate);
        ScrollTrigger.refresh();
      } catch(e) {
        console.log(e.message)
      }
    })();

    return () => {
      locoScroll?.destroy();
      ScrollTrigger.removeEventListener("refresh");
    }
}, [])
}

export default useLocoScroll;
