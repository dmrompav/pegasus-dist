"use strict";

window.onload = function () {
  // !preloader =======================================================
  document.querySelector('#preloader').style.opacity = "0";
  document.querySelector('#wrapper').style.opacity = "1"; // !images =======================================================

  var articleImg = document.querySelectorAll('.article__photo');
  articleImg[0].style.backgroundImage = 'url(img/imga.png)';
  articleImg[1].style.backgroundImage = 'url(img/imgb.png)';
  articleImg[2].style.backgroundImage = 'url(img/imgc.png)';
  articleImg[3].style.backgroundImage = 'url(img/imgd.png)';
  articleImg[4].style.backgroundImage = 'url(img/imge.png)';
  articleImg[5].style.backgroundImage = 'url(img/imgf.png)';
};