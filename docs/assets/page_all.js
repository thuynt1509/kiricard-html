/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

$(document).ready(function () {
  reloadSlide();
  $(".full").click(function () {
    $("#lst-menu").removeClass("active");
    $(".full").toggleClass("active");
  });
  $("#icon-menu-bar").click(function () {
    $("#lst-menu").toggleClass("active");
    $(".full").toggleClass("active");
  });
  var Swipes = new Swiper(".swiper-banner", {
    observer: true,
    observeParents: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });
  var swiper = new Swiper("#swipper1", {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });
  var swiper2 = new Swiper("#swipper2", {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });
  var swiper3 = new Swiper("#swiper3", {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1023: {
        slidesPerView: 4
      }
    }
  });
  var swiper4 = new Swiper("#swiper4", {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1023: {
        slidesPerView: 4
      }
    }
  });
  var swiper5 = new Swiper("#swiper5", {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 800,
      disableOnInteraction: false
    },
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1023: {
        slidesPerView: 4
      }
    }
  });
  var swiper6 = new Swiper("#swiper6", {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1023: {
        slidesPerView: 3
      }
    }
  });
  var swiper7 = new Swiper("#swiper7", {
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1400: {
        slidesPerView: 2
      }
    }
  });
  var btn = $("#btn-top");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "300");
  });
}); // scroll fixHeader

var bodyTag = document.getElementById("body-tag"); // Định nghĩa hàm xử lý sự kiện cuộn

function handleScroll() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Nếu vị trí cuộn lớn hơn hoặc bằng 300px, thêm class "fixHeader"

  if (scrollPosition >= 300) {
    bodyTag.classList.add("fixHeader");
  } else {
    // Nếu vị trí cuộn nhỏ hơn 300px, loại bỏ class "fixHeader"
    bodyTag.classList.remove("fixHeader");
  }
} // Thêm sự kiện cuộn


window.addEventListener("scroll", handleScroll);

function reloadSlide() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs"); //var totalslides = 10;

  var syncedSecondary = true;
  bigimage.trigger("destroy.owl.carousel");
  thumbs.trigger("destroy.owl.carousel");
  bigimage.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    video: true,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>']
  }).on("changed.owl.carousel", syncPosition);
  thumbs.on("initialized.owl.carousel", function () {
    thumbs.find(".owl-item").eq(0).addClass("current");
  }).owlCarousel({
    items: 5,
    dots: true,
    nav: true,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100,
    margin: 10
  }).on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;
    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }

    if (current > count) {
      current = 0;
    } //to this


    thumbs.find(".owl-item").removeClass("current").eq(current).addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs.find(".owl-item.active").first().index();
    var end = thumbs.find(".owl-item.active").last().index(); // if (current > end) {
    //     thumbs.data("owl.carousel").to(current, 100, true);
    // }
    // if (current < start) {
    //     thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    // }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
}

/***/ }),

/***/ "./src/product-detail.scss":
/*!*********************************!*\
  !*** ./src/product-detail.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/payment.scss":
/*!**************************!*\
  !*** ./src/payment.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/header.scss":
/*!*************************!*\
  !*** ./src/header.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/footer.scss":
/*!*************************!*\
  !*** ./src/footer.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/menu-list.scss":
/*!****************************!*\
  !*** ./src/menu-list.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/home.scss":
/*!***********************!*\
  !*** ./src/home.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/docs/assets/page_all": 0,
/******/ 			"docs/assets/style": 0,
/******/ 			"docs/assets/home": 0,
/******/ 			"docs/assets/menu-list": 0,
/******/ 			"docs/assets/footer": 0,
/******/ 			"docs/assets/header": 0,
/******/ 			"docs/assets/payment": 0,
/******/ 			"docs/assets/product-detail": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktailwind_html_boilerplate"] = self["webpackChunktailwind_html_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["docs/assets/style","docs/assets/home","docs/assets/menu-list","docs/assets/footer","docs/assets/header","docs/assets/payment","docs/assets/product-detail"], () => (__webpack_require__("./src/app.js")))
/******/ 	__webpack_require__.O(undefined, ["docs/assets/style","docs/assets/home","docs/assets/menu-list","docs/assets/footer","docs/assets/header","docs/assets/payment","docs/assets/product-detail"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_require__.O(undefined, ["docs/assets/style","docs/assets/home","docs/assets/menu-list","docs/assets/footer","docs/assets/header","docs/assets/payment","docs/assets/product-detail"], () => (__webpack_require__("./src/header.scss")))
/******/ 	__webpack_require__.O(undefined, ["docs/assets/style","docs/assets/home","docs/assets/menu-list","docs/assets/footer","docs/assets/header","docs/assets/payment","docs/assets/product-detail"], () => (__webpack_require__("./src/footer.scss")))
/******/ 	__webpack_require__.O(undefined, ["docs/assets/style","docs/assets/home","docs/assets/menu-list","docs/assets/footer","docs/assets/header","docs/assets/payment","docs/assets/product-detail"], () => (__webpack_require__("./src/menu-list.scss")))
/******/ 	__webpack_require__.O(undefined, ["docs/assets/style","docs/assets/home","docs/assets/menu-list","docs/assets/footer","docs/assets/header","docs/assets/payment","docs/assets/product-detail"], () => (__webpack_require__("./src/home.scss")))
/******/ 	__webpack_require__.O(undefined, ["docs/assets/style","docs/assets/home","docs/assets/menu-list","docs/assets/footer","docs/assets/header","docs/assets/payment","docs/assets/product-detail"], () => (__webpack_require__("./src/product-detail.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["docs/assets/style","docs/assets/home","docs/assets/menu-list","docs/assets/footer","docs/assets/header","docs/assets/payment","docs/assets/product-detail"], () => (__webpack_require__("./src/payment.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;