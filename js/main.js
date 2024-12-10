/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/js/components/_header.js":
/*!**************************************!*\
  !*** ./src/js/components/_header.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.querySelector('.header__burger').addEventListener('click', () => {
  document.querySelector('.mobile__menu').classList.toggle('active');
});

/***/ }),

/***/ "./src/js/components/_hero.js":
/*!************************************!*\
  !*** ./src/js/components/_hero.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const mainSwiper = new Swiper('.main-swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.hero__swiper-button-next',
    prevEl: '.hero__swiper-button-prev'
  }

  // Responsive breakpoints
  // breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //         slidesPerView: 2,
  //         spaceBetween: 20
  //     },
  //     // when window width is >= 480px
  //     480: {
  //         slidesPerView: 3,
  //         spaceBetween: 30
  //     },
  //     // when window width is >= 640px
  //     640: {
  //         slidesPerView: 4,
  //         spaceBetween: 40
  //     }
  // }
});
const thumbSwiper = new Swiper('.thumb-swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  initialSlide: 1

  // Responsive breakpoints
  // breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //         slidesPerView: 2,
  //         spaceBetween: 20
  //     },
  //     // when window width is >= 480px
  //     480: {
  //         slidesPerView: 3,
  //         spaceBetween: 30
  //     },
  //     // when window width is >= 640px
  //     640: {
  //         slidesPerView: 4,
  //         spaceBetween: 40
  //     }
  // }
});

// Синхронизация с учетом смещения на один
mainSwiper.on('slideChange', () => {
  const mainIndex = mainSwiper.activeIndex;
  thumbSwiper.slideTo(mainIndex + 1); // Перемещаем thumb-swiper на слайд +1
});
thumbSwiper.on('click', swiper => {
  const clickedIndex = swiper.clickedIndex;
  if (clickedIndex !== undefined) {
    mainSwiper.slideTo(clickedIndex - 1); // Перемещаем main-swiper с учетом -1
  }
});

/***/ }),

/***/ "./src/js/components/_partners.js":
/*!****************************************!*\
  !*** ./src/js/components/_partners.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const partnersSwiper = new Swiper('.partners__swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 5,
  spaceBetween: 50,
  // Navigation arrows
  navigation: {
    nextEl: '.partners__swiper-button-next',
    prevEl: '.partners__swiper-button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1030: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1670: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});

/***/ }),

/***/ "./src/js/components/_production.js":
/*!******************************************!*\
  !*** ./src/js/components/_production.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const thumbSwiper = new Swiper('.production-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: '.production__swiper-button-next',
    prevEl: '.production__swiper-button-prev'
  }
});

/***/ }),

/***/ "./src/js/components/_products.js":
/*!****************************************!*\
  !*** ./src/js/components/_products.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
let tabs = document.querySelectorAll('.products__tab-item');
document.querySelectorAll('.products__item').forEach(elem => {
  elem.style.display = 'grid';
});
tabs.forEach(elem => {
  elem.addEventListener('click', () => {
    let activeTab = document.querySelector('.products__tab-item.active');
    activeTab.classList.remove('active');
    elem.classList.add('active');
    document.querySelectorAll('.products__item').forEach(elem => {
      elem.style.display = 'none';
    });
    document.querySelectorAll(`.${elem.id}`).forEach(elem => {
      elem.style.display = 'grid';
    });
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_header.js */ "./src/js/components/_header.js");
/* harmony import */ var _components_hero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_hero.js */ "./src/js/components/_hero.js");
/* harmony import */ var _components_partners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_partners.js */ "./src/js/components/_partners.js");
/* harmony import */ var _components_products_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_products.js */ "./src/js/components/_products.js");
/* harmony import */ var _components_production_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_production.js */ "./src/js/components/_production.js");






})();

/******/ })()
;
//# sourceMappingURL=main.js.map