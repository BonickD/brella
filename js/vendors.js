;
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};

function ibg() {
  let ibg = document.querySelectorAll('._ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
;
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
;
document.querySelector('.icon-menu').addEventListener('click', () => {
  document.querySelector('.icon-menu').classList.toggle('_active');
  document.querySelector('.header__menu').classList.toggle('_active');
  document.querySelector('body').classList.toggle('_lock');
});
let a = 0;

window.onload = function () {
  const loginButton = document.querySelector('.header__lgn');
  if (loginButton) {
    const formBody = document.querySelector('.header__form');
    loginButton.addEventListener('click', () => {
      loginButton.classList.toggle('_active');
      formBody.classList.toggle('_active');
      a += 1;
    });

    document.addEventListener('click', documentAction);

    function documentAction(e) {
      const targetElement = e.target;
      if (!targetElement.closest('.header__login') && loginButton.classList.contains('_active')) {
        loginButton.classList.remove('_active');
        formBody.classList.remove('_active');
      }
    }
  }
  if (document.documentElement.clientWidth <= 767.98 && isMobile.any()) {
    const spoler = document.querySelectorAll('[data-spoler]');
    const spolers = document.querySelectorAll('[data-spolers]');
    document.addEventListener('click', documentTarget);
    let heightSpoler = [];
    for (let i = 0; i < spoler.length; i++) {
      heightSpoler[i] = spolers[i].clientHeight;
      spolers[i].style.height = '0';
    }

    function documentTarget(e) {
      const targetClick = e.target;

      for (let i = 0; i < spoler.length; i++) {
        if (targetClick === spoler[i]) {
          spoler[i].classList.toggle('_active');
          spolers[i].classList.toggle('_active');
          if (spolers[i].classList.contains('_active')) {
            spolers[i].style.height = heightSpoler[i] + 'px';
          } else spolers[i].style.height = '0';
        }
      }
    }
  }
  //=======================================================================================================================================================>
  const phone = document.querySelector('.video__img');
  window.addEventListener('scroll', () => {
    let corPhoneY = phone.getBoundingClientRect().top;
    if (corPhoneY < 150) {
      phone.classList.add('_active');
    }
  });
};
;
;
new Swiper('.slider__swiper', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1362: {
      slidesPerView: 5,
    },
    836: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
  },
});
;
