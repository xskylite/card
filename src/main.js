import "./styles/main.css";
import "swiper/swiper-bundle.css";
import imgs from "./img/1.png";

document.querySelector("#app").innerHTML = `
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
        <img src="${imgs}" alt="Client Feedback">
    </div>
    <div class="swiper-slide">
        <img src="${imgs}" alt="Client Feedback">
    </div>
    <div class="swiper-slide">
        <img src="${imgs}" alt="Client Feedback">
    </div>
        <div class="swiper-slide">
        <img src="${imgs}" alt="Client Feedback">
    </div>
        <div class="swiper-slide">
        <img src="${imgs}" alt="Client Feedback">
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>


`;

import Swiper from "swiper";
import { Navigation, EffectCards, Autoplay } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, EffectCards, Autoplay],
  effect: "cards",
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  spaceBetween: -20,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  cardsEffect: {
    perSlideOffset: 12,
    rotate: false,
    slideShadows: false,
  },
});
