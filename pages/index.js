import { useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist//ScrollTrigger";
import useLocoScroll from "../hooks/useLocoScroll";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useLocoScroll();
  useEffect(() => {
    setTimeout(() => {
      const scrollContainer = document.querySelector(".scroll-container");
    const animNavLinks = () => {
      const navLinks = gsap.utils.toArray(".navbar a");
      navLinks.forEach((link) => {
        link.addEventListener("mouseleave", (e) => {
          link.classList.add("animate-out");
          setTimeout(() => {
            link.classList.remove("animate-out")
          }, 500)
        })
      })
    }
    animNavLinks();

    gsap.to(".navbar__link", {
      yPercenter: 20,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".navbar",
        start: "90%, 10%",
        scrub: 0.8,
        scroller: scrollContainer,
      }
    })

    gsap.from(".navbar__mobile", {
      opacity: 0,
      xPercenter: 40,
      duration: 1,
      scrollTrigger: {
        trigger: ".header",
        start: "5%, top",
        end: "15%",
        scrub: 1,
        scroller: scrollContainer
      }
    })

    //Header animations

    const animHeaderTild = () => {
      const header = document.querySelector(".header");
      header.addEventListener("mousemove", moveImage);

    }

    function moveImage(e) {
      const { offsetX, offsetY, target } = e;
      const { clientWidth, clientHeight } = target;

      const xPos = offsetX / clientWidth;
      const yPos = offsetY / clientHeight;

      const leftImages = gsap.utils.toArray(
        ".header__gallery--left .header__gallery-image"
      )

      const rightImages = gsap.utils.toArray(
        ".header__gallery--right .header__gallery-image"
      )

        const modifier = (index) => index * 2 + 0.6;
    
      leftImages.forEach((image, i) => {
        gsap.to(image, {
          duration: 1.2,
          x: xPos * 20 * modifier(i),
          y: yPos * 30 * modifier(i),
          rotationX: yPos * 10,
          rotationY: xPos * 40

        })
      })
      rightImages.forEach((image, i) => {
        gsap.to(image, {
          duration: 1.2,
          x: xPos * 20 * modifier(i),
          y: -yPos * 30 * modifier(i),
          rotationX: yPos * 10,
          rotationY: xPos * 40

        })
      })

      gsap.to(".header__decor-circle", {
        x: 100 * xPos,
        y: 120 * yPos,
        ease: "power4.Out"
      })
    }

   

    animHeaderTild();

    ScrollTrigger.refresh();
    }, 100)
    
    return () => {

    }
  }, [])
  return <div data-scroll-container>
    {/* Preloader */}
    {/* Navabar */}
    <Navbar />
      <div data-scroll-container className="scroll-container">
      
        <Header />
        <Header />
{/* Header */}
{/* Blog */}
{/* Portfolio */}
{/* Contact */}
    </div>
  </div>;
}
