"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".offer__slide"),
    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    slidesField = document.querySelector(".offer__slider-inner"),
    width = getComputedStyle(slidesWrapper).width,
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    current = document.querySelector("#current"),
    total = document.querySelector("#total"),
    slider = document.querySelector(".offer__slider");

  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s ease";
  slidesWrapper.style.overflow = "hidden";
  slides.forEach((slide) => {
    slide.style.width = width;
  });

  /*****************************************************/
  /*                   Dots                            */
  /*****************************************************/

  slider.style.position = "absolute";
  let indicator = document.createElement("ol"),
    dots = [];
  indicator.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 80%;
    top: 103%;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 0%;
    margin-left: 0%;
    list-style: none;
    width: 300px;
  `;

  slider.append(indicator);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 8px;
      height: 8px;
      margin-right: 10px;
      margin-left: 10px;
      cursor: pointer;
      background-color: white;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border: 2px solid #ed4c22;
      transition: opacity .6s ease;
    `;
    if (i == 0) {
      dot.style.color = "#9d8665";
    }
    indicator.append(dot);
    dots.push(dot);
  }

  /*****************************************************/
  /*                   Dots                            */
  /*****************************************************/

  next.addEventListener("click", () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    /*********** dots ***********/
    dots.forEach((dot) => (dot.style.opacity = "1"));
    dots[slideIndex - 1].style.opacity = ".7";
    /*********** dots ************/
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    /*********** dots ***********/
    dots.forEach((dot) => (dot.style.opacity = "1"));
    dots[slideIndex - 1].style.opacity = ".7";
    /*********** dots ************/
  });

  /*********** dots ***********/
  dots.forEach((dot) => (dot.style.opacity = "1"));
  dots[slideIndex - 1].style.opacity = ".7";

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;

      offset = +width.slice(0, width.length - 2) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach((dot) => (dot.style.opacity = "1"));
      dots[slideIndex - 1].style.opacity = ".7";
    });
  });
  /*********** dots ***********/
});

$(function () {
  var shrinkHeader = 300;
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $(".header").addClass("shrink");
    } else {
      $(".header").removeClass("shrink");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset;
  }
});

/** clients slider **/

window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".client__slide"),
    slidesWrapper = document.querySelector(".clients__slider-wrapper"),
    slidesField = document.querySelector(".client__slider-inner"),
    width = getComputedStyle(slidesWrapper).width,
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    current = document.querySelector("#current"),
    total = document.querySelector("#total"),
    slider = document.querySelector(".clients__slider");

  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";

  slidesField.style.transition = "0.5s ease";
  slidesWrapper.style.overflow = "hidden";
  slides.forEach((slide) => {
    slide.style.width = width;
  });

  /*****************************************************/
  /*                   Dots                            */
  /*****************************************************/

  slider.style.position = "absolute";
  let indicator = document.createElement("ol"),
    dots = [];
  indicator.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 83%;
    top: 0%;
    z-index: 15;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 0%;
    margin-left: 0%;
    list-style: none;
    width: 70px;
    

  `;

  slider.append(indicator);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 14px;
      height: 14px;
      margin-right: 10px;
      margin-left: 10px;
      cursor: pointer;
      background-color: red;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `;
    if (i == 0) {
      dot.style.color = "#9d8665";
    }
    indicator.append(dot);
    dots.push(dot);
  }

  /*****************************************************/
  /*                   Dots                            */
  /*****************************************************/

  next.addEventListener("click", () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    /*********** dots ***********/
    dots.forEach((dot) => (dot.style.opacity = "1"));
    dots[slideIndex - 1].style.opacity = ".7";
    /*********** dots ************/
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    /*********** dots ***********/
    dots.forEach((dot) => (dot.style.opacity = "1"));
    dots[slideIndex - 1].style.opacity = ".7";
    /*********** dots ************/
  });

  /*********** dots ***********/
  dots.forEach((dot) => (dot.style.opacity = "1"));
  dots[slideIndex - 1].style.opacity = ".7";

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;

      offset = +width.slice(0, width.length - 2) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach((dot) => (dot.style.opacity = "1"));
      dots[slideIndex - 1].style.opacity = ".7";
    });
  });
  /*********** dots ***********/
});

/** clients slider **/

/**star rating**/

$(document).ready(function () {
  $("#rateMe1").mdbRate();
});

/**star rating**/

/**dropdown menu**/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**dropdown menu**/
