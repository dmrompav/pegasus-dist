"use strict";

window.onload = function () {
  // !preloader =======================================================
  document.querySelector('#preloader').style.opacity = "0";
  document.querySelector('#wrapper').style.opacity = "1"; // !images =======================================================

  var articleImg = document.querySelectorAll('.article__photo');

  function ThisIsWebP() {
    var img = new Image();
    img.src = "../img/img1.webp";

    img.onload = function () {
      return true;
    };

    img.onerror = function () {
      return false;
    };
  }

  if (ThisIsWebP) {
    for (var i = 0; i <= articleImg.length - 1; i++) {
      articleImg[i].style.backgroundImage = 'url(img/img' + i + '.webp)';
      document.body.style.backgroundImage = 'url(img/bg.webp)';
    }
  } else {
    for (var _i = 0; _i <= articleImg.length - 1; _i++) {
      articleImg[_i].style.backgroundImage = 'url(img/img' + _i + '.jpg)';
      document.body.style.backgroundImage = 'url(img/bg.jpg)';
    }
  } // !menu ===========================================


  document.querySelector('.nav-line').addEventListener('click', MenuClick, false);
  var isMenuOpen = 0;

  function MenuClick() {
    if (isMenuOpen == 0) {
      document.querySelector('.nav-line__nav').style.top = '40px';
      isMenuOpen = 1;
    } else if (isMenuOpen == 1) {
      document.querySelector('.nav-line__nav').style.top = '-500px';
      isMenuOpen = 0;
    }
  }
};