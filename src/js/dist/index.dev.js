"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('.container');

  if (document.querySelector('.section-breadcrumbs__wrap')) {
    var swiperBreadcrumbs = new Swiper('.section-breadcrumbs__wrap .container', {
      loop: false,
      slidesPerView: 4,
      createElements: true,
      slideClass: 'section-breadcrumbs__item',
      navigation: {
        nextEl: '.section-breadcrumbs__next',
        prevEl: '.section-breadcrumbs__prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1.1
        },
        650: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      }
    });
  }

  if (document.querySelector('.section-banner__swiper-img') && document.querySelector('.section-banner__swiper-content')) {
    var swiperImg = new Swiper('.section-banner__swiper-img', {
      loop: true,
      navigation: {
        nextEl: '.section-banner__swiper-img .swiper-button-next',
        prevEl: '.section-banner__swiper-img .swiper-button-prev'
      }
    });
    var swiperContent = new Swiper('.section-banner__swiper-content', {
      loop: true,
      spaceBetween: 80
    });
    swiperImg.controller.control = swiperContent;
    swiperContent.controller.control = swiperImg;
  }

  ;

  if (document.querySelector('.section-leader__swiper')) {
    var swiperLeader = new Swiper('.section-leader__swiper', {
      loop: true,
      autoHeight: true,
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        650: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      },
      navigation: {
        nextEl: '.section-leader__btn-next',
        prevEl: '.section-leader__btn-prev'
      }
    });
  }

  if (document.querySelector('.section-similar__swiper')) {
    var swiperSimilarSlides = document.querySelectorAll('.section-similar__swiper .swiper-slide');
    var swiperSimilarBtns = document.querySelector('.section-similar__btns');
    var swiperSimilar = new Swiper('.section-similar__swiper', {
      loop: false,
      slidesPerView: 4,
      autoHeight: true,
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        650: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      },
      navigation: {
        nextEl: '.section-similar__btn-next',
        prevEl: '.section-similar__btn-prev'
      }
    });

    if (swiperSimilarSlides.length <= 4) {
      swiperSimilarBtns.style.display = 'none';
    }
  }

  if (document.querySelector('.section-view__swiper')) {
    var swiperViewSlides = document.querySelectorAll('.section-view__swiper .swiper-slide');
    var swiperViewBtns = document.querySelector('.section-view__btns');
    var swiperView = new Swiper('.section-view__swiper', {
      loop: false,
      slidesPerView: 4,
      autoHeight: true,
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        650: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      },
      navigation: {
        nextEl: '.section-view__btn-next',
        prevEl: '.section-view__btn-prev'
      }
    });

    if (swiperViewSlides.length <= 4) {
      swiperViewBtns.style.display = 'none';
    }
  }

  if (document.querySelector('.section-other__swiper')) {
    var swiperOtherSlides = document.querySelectorAll('.section-other__swiper .swiper-slide');
    var swiperOtherBtns = document.querySelector('.section-other__btns');
    var swiperOther = new Swiper('.section-other__swiper', {
      loop: false,
      slidesPerView: 4,
      autoHeight: true,
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        650: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 4
        }
      },
      navigation: {
        nextEl: '.section-other__btn-next',
        prevEl: '.section-other__btn-prev'
      }
    });

    if (swiperOtherSlides.length <= 4) {
      swiperOtherBtns.style.display = 'none';
    }
  }

  if (document.querySelector('.page-article .other__swiper')) {
    var _swiperOtherSlides = document.querySelectorAll('.other__swiper .swiper-slide');

    var _swiperOtherBtns = document.querySelector('.other__btns');

    var _swiperOther = new Swiper('.other__swiper', {
      loop: false,
      slidesPerView: 4,
      autoHeight: true,
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        650: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 4
        }
      },
      navigation: {
        nextEl: '.other__btn-next',
        prevEl: '.other__btn-prev'
      }
    });

    if (_swiperOtherSlides.length <= 4) {
      _swiperOtherBtns.style.display = 'none';
    }
  }

  if (document.querySelector('.page-news .other__swiper')) {
    var _swiperOtherSlides2 = document.querySelectorAll('.other__swiper .swiper-slide');

    var _swiperOtherBtns2 = document.querySelector('.other__btns');

    var _swiperOther2 = new Swiper('.other__swiper', {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 1,
      autoHeight: true,
      breakpoints: {
        320: {
          slidesPerView: 1.2
        },
        650: {
          slidesPerView: 1
        }
      },
      navigation: {
        nextEl: '.other__btn-next',
        prevEl: '.other__btn-prev'
      }
    });

    if (_swiperOtherSlides2.length <= 1) {
      _swiperOtherBtns2.style.display = 'none';
    }
  }

  if (document.querySelector('.section-content__view-wrap .swiper') && document.querySelector('.section-content__view-preview .swiper')) {
    var swiperViewImg = new Swiper('.section-content__view-wrap .swiper', {
      loop: false,
      slidesPerView: 1,
      thumbs: {
        swiper: {
          el: '.section-content__view-preview .swiper',
          slidesPerView: 5
        }
      }
    });
    var swiperViewPreviewImg = new Swiper('.section-content__view-preview .swiper', {
      loop: false,
      slidesPerView: 5
    });
    swiperViewImg.controller.control = swiperViewPreviewImg;
    swiperViewPreviewImg.controller.control = swiperViewImg;
  }

  var arrayMr = document.querySelectorAll('.js-margin-right');
  var arrayMl = document.querySelectorAll('.js-margin-left');

  var marginRight = function marginRight(array) {
    var containerMr = window.getComputedStyle(container, null).getPropertyValue("margin-right");
    var containerMl = window.getComputedStyle(container, null).getPropertyValue("margin-left");
    array.forEach(function (el) {
      el.style.paddingLeft = parseInt(containerMl, 10) + 48 + 'px';
      el.style.marginRight = parseInt(containerMr, 10) + 48 + 'px';

      if (parseInt(containerMl, 10) + 48 <= 48) {
        el.style.paddingLeft = '48px';
        el.style.marginRight = '48px';
      }

      if (window.innerWidth <= 650) {
        el.style.paddingLeft = '24px';
        el.style.marginRight = '24px';
      }
    });
  };

  var marginLeft = function marginLeft(array) {
    var containerMr = window.getComputedStyle(container, null).getPropertyValue("margin-right");
    var containerMl = window.getComputedStyle(container, null).getPropertyValue("margin-left");
    array.forEach(function (el) {
      el.style.paddingRight = parseInt(containerMr, 10) + 48 + 'px';
      el.style.marginLeft = parseInt(containerMl, 10) + 48 + 'px';

      if (parseInt(containerMr, 10) + 48 <= 48) {
        el.style.paddingLeft = '48px';
        el.style.marginRight = '48px';
      }

      if (window.innerWidth <= 650) {
        el.style.paddingLeft = '24px';
        el.style.marginRight = '24px';
      }
    });
  };

  marginRight(arrayMr);
  marginLeft(arrayMl);
  window.addEventListener('resize', function () {
    marginRight(arrayMr);
    marginLeft(arrayMl);
  });
  var containerPopularItems = document.querySelectorAll('.container-popular');
  var btnPopular = document.querySelector('#js-popular-btn-show');

  if (btnPopular) {
    btnPopular.addEventListener('click', function () {
      containerPopularItems.forEach(function (elem, index) {
        if (index > 0) {
          var i = containerPopularItems[index];

          if (getComputedStyle(i).display == 'none') {
            i.style.display = 'flex';
            btnPopular.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z"/></svg><span>Скрыть</span>';
          } else {
            i.style.display = 'none';
            btnPopular.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1L7 7L1 7C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H7L7 15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7L9 7V1Z"/></svg><span>Показать ещё</span>';
          }
        }
      });
    });
  }

  var btnInfo = document.querySelector('#js-info-btn-show');
  var btnInfoAll = document.querySelectorAll('#js-info-btn-show');

  if (btnInfo) {
    btnInfoAll.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var infoOptionsBlock = btn.closest('.section-content__info-options');
        var infoOptionsList = infoOptionsBlock.querySelector('ul');

        if (infoOptionsList.classList.contains('open')) {
          infoOptionsList.classList.remove('open');
          btn.innerHTML = '<span>Показать все</span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1L7 7L1 7C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H7L7 15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7L9 7V1Z"/></svg>';
        } else {
          infoOptionsList.classList.add('open');
          btn.innerHTML = '<span>Скрыть</span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z"/></svg>';
        }
      });
    });
  }

  var body = document.querySelector('.body');
  var headerButton = document.querySelector('.header__catalog');
  var headerButtonName = document.querySelector('.header__catalog-name');
  var headerCatalogMenu = document.querySelector('.catalog-menu');
  headerButton.addEventListener('click', function () {
    headerButton.classList.toggle('active');
    headerCatalogMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');

    if (headerButton.classList.contains('active')) {
      headerButtonName.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L6.58579 8L2.29289 12.2929C1.90237 12.6834 1.90237 13.3166 2.29289 13.7071C2.68342 14.0976 3.31658 14.0976 3.70711 13.7071L8 9.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L9.41421 8L13.7071 3.70711C14.0976 3.31658 14.0976 2.68342 13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289L8 6.58579L3.70711 2.29289Z"/></svg>' + 'Каталог';
    } else {
      headerButtonName.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 2.44772 0.447715 2 1 2L15 2C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4L1 4C0.447715 4 0 3.55228 0 3ZM0 8C0 7.44772 0.447715 7 1 7L15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9L1 9C0.447715 9 0 8.55228 0 8ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14L9 14C9.55229 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12L1 12Z"/></svg>' + 'Каталог';
    }
  });
  var headerButtonMobile = document.querySelector('.header__menu-btn');
  var headerMenuMobile = document.querySelector('.menu-mobile');
  var headerCatalogMenuMobile = document.querySelector('.header__catalog-mobile');
  headerButtonMobile.addEventListener('click', function () {
    headerButtonMobile.classList.toggle('active');
    headerMenuMobile.classList.toggle('active');
    body.classList.toggle('no-scroll');

    if (headerButtonMobile.classList.contains('active')) {
      headerButtonMobile.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L6.58579 8L2.29289 12.2929C1.90237 12.6834 1.90237 13.3166 2.29289 13.7071C2.68342 14.0976 3.31658 14.0976 3.70711 13.7071L8 9.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L9.41421 8L13.7071 3.70711C14.0976 3.31658 14.0976 2.68342 13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289L8 6.58579L3.70711 2.29289Z"/></svg>';
    } else {
      headerButtonMobile.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 2.44772 0.447715 2 1 2L15 2C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4L1 4C0.447715 4 0 3.55228 0 3ZM0 8C0 7.44772 0.447715 7 1 7L15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9L1 9C0.447715 9 0 8.55228 0 8ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14L9 14C9.55229 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12L1 12Z"/></svg>';
      body.classList.remove('no-scroll');
      menuMobileListsSecond.forEach(function (ul) {
        ul.classList.remove('active');
      });
    }

    if (headerCatalogMenu.classList.contains('active')) {
      headerCatalogMenu.classList.remove('active');
      body.classList.remove('no-scroll');
      menuCatalogListsInside.forEach(function (ul) {
        ul.classList.remove('active');
      });
    }
  });
  headerCatalogMenuMobile.addEventListener('click', function () {
    headerButton.classList.toggle('active');
    headerCatalogMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
  }); // Menu Return

  var headerMenuBtnsReturn = document.querySelectorAll('.header__menu-return');
  headerMenuBtnsReturn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.closest('.active').classList.remove('active');
    });
  });
  var header = document.querySelector('.header');
  var headerTop = document.querySelector('.header__top');
  var headerBottom = document.querySelector('.header__bottom');
  var main = document.querySelector('.main');
  var headerHeight = header.offsetHeight;
  var mainIndent = document.createElement('span');
  mainIndent.style.display = 'block';
  mainIndent.style.backgroundColor = '#434a73';
  main.prepend(mainIndent);

  var indentTopMain = function indentTopMain() {
    mainIndent.style.height = header.offsetHeight + 'px';
  };

  indentTopMain();
  headerCatalogMenu.style.height = 'calc(100% - ' + "".concat(headerHeight) + 'px)';
  headerMenuMobile.style.height = 'calc(100% - ' + "".concat(headerHeight) + 'px)';
  window.addEventListener('resize', function () {
    indentTopMain();
    headerCatalogMenu.style.height = 'calc(100% - ' + "".concat(headerHeight) + 'px)';
    headerMenuMobile.style.height = 'calc(100% - ' + "".concat(headerHeight) + 'px)';
  });

  if (window.scrollY > 1) {
    header.classList.add('header__fixed');
    var _headerHeight = header.offsetHeight;
    var headerTopHeight = headerTop.offsetHeight;
    headerCatalogMenu.style.height = 'calc(100% - ' + "".concat(_headerHeight - headerTopHeight) + 'px)';
    headerMenuMobile.style.height = 'calc(100% - ' + "".concat(_headerHeight) + 'px)';
  }

  window.addEventListener('scroll', function () {
    var scrollDistance = window.scrollY;
    var headerHeight = header.offsetHeight;
    var headerTopHeight = headerTop.offsetHeight;
    var headerBottomHeight = headerBottom.offsetHeight;

    if (scrollDistance >= 1 && window.innerWidth <= 650) {
      header.classList.add('header__fixed');
      headerMenuMobile.style.height = 'calc(100% - ' + "".concat(headerHeight) + 'px)';
    } else {
      header.classList.remove('header__fixed');
      headerMenuMobile.style.height = "".concat(headerTopHeight + headerBottomHeight) + 'px)';
    }

    if (scrollDistance >= 1) {
      header.classList.add('header__fixed');
      headerCatalogMenu.style.height = 'calc(100% - ' + "".concat(headerBottomHeight) + 'px)';
      headerMenuMobile.style.height = 'calc(100% - ' + "".concat(headerBottomHeight) + 'px)';
    } else {
      header.classList.remove('header__fixed');
      headerCatalogMenu.style.height = 'calc(100% - ' + "".concat(headerTopHeight + headerBottomHeight) + 'px)';
      headerMenuMobile.style.height = 'calc(100% - ' + "".concat(headerTopHeight + headerBottomHeight) + 'px)';
    }
  }); // Tooltip Widget

  var mainCardsName = document.querySelectorAll('.section-leader__swiper-name');
  var productSimilarCardsName = document.querySelectorAll('.section-similar__swiper-name');
  var productViewCardsName = document.querySelectorAll('.section-view__swiper-name');
  var catalogListCardsName = document.querySelectorAll('.catalog-list .catalog__item-name a');
  var catalogImgCardsName = document.querySelectorAll('.catalog-list-img .catalog__item-name a');
  var catalogGridCardsName = document.querySelectorAll('.catalog-grid .catalog__item-name a');

  var funcTooltipWidget = function funcTooltipWidget(array, number) {
    array.forEach(function (elem) {
      if (elem.innerHTML.length >= number && !elem.querySelector('img')) {
        elem.classList.add('js-long-text');
        elem.setAttribute('title', elem.innerHTML);
      }

      ;
    });
  };

  funcTooltipWidget(mainCardsName, 50);
  funcTooltipWidget(productSimilarCardsName, 50);
  funcTooltipWidget(productViewCardsName, 50);

  if (document.querySelector('.catalog-list .catalog__item-name a')) {
    funcTooltipWidget(catalogListCardsName, 34);
  }

  if (document.querySelector('.catalog-list-img .catalog__item-name a')) {
    funcTooltipWidget(catalogImgCardsName, 56);
  }

  if (document.querySelector('.catalog-grid .catalog__item-name a')) {
    funcTooltipWidget(catalogGridCardsName, 56);
  }

  var catalogList = document.querySelector('.catalog__list');
  var catalogFilterBtns = document.querySelectorAll('.catalog__filter-btns button');
  var catalogFilterBtnList = document.querySelector('#js-filter-list');
  var catalogFilterBtnListImg = document.querySelector('#js-filter-list-img');
  var catalogFilterBtnGrid = document.querySelector('#js-filter-grid');

  var funcClickCatalogListBtn = function funcClickCatalogListBtn(btn, list) {
    btn.addEventListener('click', function () {
      catalogFilterBtns.forEach(function (el) {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      catalogList.className = '';
      catalogList.className = 'catalog__list ' + list;
      btn.classList.add('active');
      localStorage.setItem('btn', btn.id);
      localStorage.setItem('list', list);

      if (document.querySelector('.catalog-list .catalog__item-name a')) {
        funcTooltipWidget(catalogListCardsName, 34);
      }

      if (document.querySelector('.catalog-list-img .catalog__item-name a')) {
        funcTooltipWidget(catalogImgCardsName, 56);
      }

      if (document.querySelector('.catalog-grid .catalog__item-name a')) {
        funcTooltipWidget(catalogGridCardsName, 56);
      }
    });
  };

  if (catalogList) {
    funcClickCatalogListBtn(catalogFilterBtnList, 'catalog-list');
    funcClickCatalogListBtn(catalogFilterBtnListImg, 'catalog-list-img');
    funcClickCatalogListBtn(catalogFilterBtnGrid, 'catalog-grid');
  }

  ;
  window.addEventListener('DOMContentLoaded', function () {
    if (catalogList) {
      if (catalogFilterBtnList && catalogFilterBtnList.classList.contains('active')) {
        catalogList.className = 'catalog__list ' + 'catalog-list';
      } else if (catalogFilterBtnListImg && catalogFilterBtnListImg.classList.contains('active')) {
        catalogList.className = 'catalog__list ' + 'catalog-list-img';
      } else if (catalogFilterBtnGrid && catalogFilterBtnGrid.classList.contains('active')) {
        catalogList.className = 'catalog__list ' + 'catalog-grid';
      }

      ;
    }

    ;
  });

  if (catalogList) {
    var checkStorage = function checkStorage() {
      catalogList.className = 'catalog__list';
      var a = 0;

      for (var i = 0; i < catalogFilterBtns.length; i++) {
        var btnActive = localStorage.getItem('btn');
        var listActive = localStorage.getItem('list');
        catalogFilterBtns[i].classList.remove('active');

        if (catalogFilterBtns[i].id === btnActive) {
          catalogFilterBtns[i].classList.add('active');
          catalogList.classList.add(listActive);
          a = 1;
        }
      }

      if (a === 0) {
        catalogFilterBtnGrid.classList.add('active');
        catalogList.classList.add('catalog-grid');
      }
    };

    checkStorage();
  } // Filter Catalog


  var catalogFilterBtn = document.querySelector('.catalog__filter-btn');
  var catalogFilterContainer = document.querySelector('.section-content__filter');
  var catalogFilterBtnClose = document.querySelector('.catalog__filter-close');

  if (catalogFilterBtn) {
    catalogFilterBtn.addEventListener('click', function () {
      catalogFilterContainer.classList.add('active');
    });

    if (catalogFilterBtnClose) {
      catalogFilterBtnClose.addEventListener('click', function () {
        catalogFilterContainer.classList.remove('active');
      });
    }
  } // Menu Catalog Hover


  var menuCatalogBtnsListFirst = document.querySelectorAll('.catalog-menu__first li a');
  var menuCatalogListsInside = document.querySelectorAll('.catalog-menu__list-inside ul');
  menuCatalogBtnsListFirst.forEach(function (a) {
    a.addEventListener('mouseover', function () {
      menuCatalogListsInside.forEach(function (ul) {
        ul.classList.remove('active');
      });
      var menuCatalogListInside = document.querySelector("[data-inside_menu='".concat(a.dataset.first_menu, "']"));
      menuCatalogListInside.classList.add('active');
    });
    a.addEventListener('click', function (i) {
      if (window.innerWidth <= 1024) {
        i.preventDefault();
        menuCatalogListsInside.forEach(function (ul) {
          ul.classList.remove('active');
        });
        var menuCatalogListInside = document.querySelector("[data-inside_menu='".concat(a.dataset.first_menu, "']"));
        menuCatalogListInside.classList.add('active');
      }
    });
  }); // Menu Mobile Click

  var menuMobileBtnsListFirst = document.querySelectorAll('.menu-mobile__first li button');
  var menuMobileListsSecond = document.querySelectorAll('.menu-mobile__second ul');
  menuMobileBtnsListFirst.forEach(function (o) {
    o.addEventListener('click', function () {
      if (o == headerCatalogMenuMobile) {} else {
        menuMobileListsSecond.forEach(function (ul) {
          ul.classList.remove('active');
        });
        var menuMobileListSecond = document.querySelector("[data-mobile-second_menu='".concat(o.dataset.mobile_first_menu, "']"));
        menuMobileListSecond.classList.add('active');
      }
    });
  }); // Page Buyers

  var allBuyersItemsInfo = document.querySelectorAll('.section-content__info-item');
  var buyersItemTab = document.querySelector('.section-content__tabs ul li');
  var allBuyersItemsTabs = document.querySelectorAll('.section-content__tabs ul li');
  var allBuyersHeaderItemsTabs = document.querySelectorAll('.header__nav-list a');
  var allBuyersFooterItemsTabs = document.querySelectorAll('.footer__colum-item.footer__colum-item--buyer');
  var allBuyersMobileMenuItems = document.querySelectorAll('.menu-mobile__second li a');

  var transitBlocksInfo = function transitBlocksInfo(array) {
    var sectionContent = document.querySelector('.page-buyers .section-content');
    array.forEach(function (el, index) {
      el.addEventListener('click', function () {
        event.preventDefault();
        allBuyersItemsTabs.forEach(function (el) {
          el.classList.remove('active');
        });
        allBuyersItemsInfo.forEach(function (el) {
          el.classList.remove('active');
        });
        allBuyersItemsTabs[index].classList.add('active');
        allBuyersItemsInfo[index].classList.add('active');
        allBuyersHeaderItemsTabs[index].classList.add('active');
        allBuyersFooterItemsTabs[index].classList.add('active');
        document.location.href = allBuyersItemsTabs[index].querySelector('a').href;

        if (sectionContent) {
          window.scrollTo(0, sectionContent.offsetTop - 96);
        }

        if (array === allBuyersMobileMenuItems) {
          headerMenuMobile.classList.remove('active');
          headerButtonMobile.classList.remove('active');
          headerButtonMobile.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 2.44772 0.447715 2 1 2L15 2C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4L1 4C0.447715 4 0 3.55228 0 3ZM0 8C0 7.44772 0.447715 7 1 7L15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9L1 9C0.447715 9 0 8.55228 0 8ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14L9 14C9.55229 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12L1 12Z"/></svg>';
          body.classList.remove('no-scroll');
          menuMobileListsSecond.forEach(function (ul) {
            ul.classList.remove('active');
          });
        }
      });
    });
  };

  var funcClickNavByers = function funcClickNavByers() {
    var tabsListLink = ['#payment', '#guarantee', '#questions', '#catalog'];
    tabsListLink.forEach(function (elem) {
      if (document.location.hash === elem) {
        allBuyersItemsTabs.forEach(function (el) {
          el.classList.remove('active');
        });
        allBuyersItemsInfo.forEach(function (el) {
          el.classList.remove('active');
        });
        var elemNoHash = elem.replace(/#/g, '');
        var link = document.querySelector("a[href='".concat(elem, "']"));
        var linkBlock = link.closest('li');
        var linkHref = document.getElementById("".concat(elemNoHash));
        link.classList.add('active');
        linkBlock.classList.add('active');
        linkHref.classList.add('active');
      }
    });
    var sectionContent = document.querySelector('.page-buyers .section-content');

    if (sectionContent) {
      if (!sectionContent) {
        return;
      }

      var offsetTop = sectionContent.getBoundingClientRect().top;
      var top = offsetTop > 0 ? window.scrollY + offsetTop - 96 : offsetTop;
      window.scroll({
        top: top,
        behavior: 'smooth'
      });
    }
  };

  window.addEventListener('load', function () {
    funcClickNavByers();
  });

  if (buyersItemTab) {
    transitBlocksInfo(allBuyersItemsTabs);
    transitBlocksInfo(allBuyersHeaderItemsTabs);
    transitBlocksInfo(allBuyersFooterItemsTabs);
    transitBlocksInfo(allBuyersMobileMenuItems);
  }

  var allAccordionItems = document.querySelectorAll('.section-content__info-accordion li');

  var accordionTransit = function accordionTransit(array) {
    array.forEach(function (el, index) {
      el.addEventListener('click', function () {
        if (array[index].classList.contains('active')) {
          array.forEach(function (el) {
            el.classList.remove('active');
          });
        } else {
          array.forEach(function (el) {
            el.classList.remove('active');
          });
          array[index].classList.add('active');
        }

        ;
      });
    });
  };

  accordionTransit(allAccordionItems); // Page Manufacturer

  if (document.querySelector('.page-manufacturer .section-content__products')) {
    var manufacturerContentProducts = document.querySelector('.page-manufacturer .section-content__products');
    var manufacturerContentWrap = manufacturerContentProducts.closest('.section-content__wrap');
    var manufacturerContentCertificate = manufacturerContentWrap.querySelector('.section-content__certificate');

    if (!manufacturerContentCertificate) {
      manufacturerContentWrap.classList.add('js-column-1');
    }
  } // Page Cart-Product


  var addProductBasketOpen = document.querySelectorAll('.add-product-basket-open');
  var addProductBasket = document.querySelector('#add-product-basket');
  var addProductOrderOpen = document.querySelectorAll('.add-product-order-open');
  var addProductOrder = document.querySelector('#add-product-order');

  if (document.querySelector('.add-product-basket-open') || document.querySelector('.add-product-order-open')) {
    var imgPopup = document.querySelector('#popup-img');
    var namePopup = document.querySelector('#popup-name');
    var companyPopup = document.querySelector('#popup-company');
    var pricePopup = document.querySelector('#popup-price');
    var amountPopup = document.querySelector('#popup-amount');
    var sumPopup = document.querySelector('#popup-sum');
    var amountPlus = document.querySelectorAll('.amount-plus');
    var amountMinus = document.querySelectorAll('.amount-minus');
    amountPlus.forEach(function (el) {
      el.addEventListener('click', function () {
        var elWrap = el.closest('div');
        var elAmount = elWrap.querySelector('.amount');
        elAmount.innerHTML = Number(elAmount.innerHTML) + 1;
        elAmount.dataset.amount = elAmount.innerHTML;
      });
    });
    amountMinus.forEach(function (el) {
      el.addEventListener('click', function () {
        var elWrap = el.closest('div');
        var elAmount = elWrap.querySelector('.amount');

        if (Number(elAmount.innerHTML) > 0) {
          elAmount.innerHTML = Number(elAmount.innerHTML) - 1;
          elAmount.dataset.amount = elAmount.innerHTML;
        }
      });
    });
    addProductBasketOpen.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var img = wrapData.querySelector('img');
        var name = wrapData.querySelector("[data-name]");
        var company = wrapData.querySelector("[data-company");
        var amount = wrapData.querySelector("[data-amount]");
        var price = wrapData.querySelector("[data-price");
        var wrapData = btn.closest('.add-product-basket-wrap');
        imgPopup.display = 'none';

        if (img) {
          imgPopup.src = img.src;
        }

        namePopup.innerHTML = name.dataset.name;
        companyPopup.innerHTML = company.dataset.company;
        pricePopup.innerHTML = price.dataset.price;
        pricePopup.innerHTML = pricePopup.innerHTML.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ₽';
        amountPopup.innerHTML = 1;
        sumPopup.innerHTML = price.dataset.price.replace(/\s/g, '') * 1;

        if (amount !== null) {
          amountPopup.innerHTML = amount.dataset.amount;
          sumPopup.innerHTML = price.dataset.price.replace(/\s/g, '') * amount.dataset.amount;
        }

        sumPopup.innerHTML = sumPopup.innerHTML.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ₽';

        if (price.innerHTML === 'Цена по запросу') {
          pricePopup.innerHTML = 'по запросу';
          sumPopup.innerHTML = '-';
        }
      });
    });
  }

  if (document.querySelector('.add-product-order-open')) {
    var _imgPopup = addProductOrder.querySelector('#popup-img');

    var titlePopup = addProductOrder.querySelector('h5');
    var textPopup = addProductOrder.querySelector('.form__adaptive-text');
    var btnTextPopup = addProductOrder.querySelector('.form__btn span');

    var _namePopup = addProductOrder.querySelector('#popup-name');

    var _companyPopup = addProductOrder.querySelector('#popup-company');

    var _pricePopup = addProductOrder.querySelector('#popup-price');

    var _amountPopup = addProductOrder.querySelector('#popup-amount');

    var _sumPopup = addProductOrder.querySelector('#popup-sum');

    addProductOrderOpen.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var wrapData = btn.closest('.add-product-basket-wrap');
        var price = wrapData.querySelector("[data-price");
        var img = wrapData.querySelector('img');
        var name = wrapData.querySelector("[data-name]");
        var company = wrapData.querySelector("[data-company");
        var amount = wrapData.querySelector("[data-amount]");

        if (btn.classList.contains('js-button-order')) {
          titlePopup.innerHTML = 'Заказ';
          textPopup.innerHTML = 'Оставьте заявку и наш менеджер свяжется с вами в ближайшее время для уточнения деталей заказа';
          btnTextPopup.innerHTML = 'Оставить заказ';
        } else if (btn.classList.contains('js-button-request')) {
          titlePopup.innerHTML = 'Заявка';
          textPopup.innerHTML = 'Оставьте заявку и наш менеджер свяжется с вами в ближайшее время для уточнения деталей';
          btnTextPopup.innerHTML = 'Оставить заявку';
        }

        _imgPopup.display = 'none';

        if (img) {
          _imgPopup.src = img.src;
        }

        _namePopup.innerHTML = name.dataset.name;
        _companyPopup.innerHTML = company.dataset.company;
        _pricePopup.innerHTML = price.dataset.price;
        _pricePopup.innerHTML = _pricePopup.innerHTML.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ₽';
        _amountPopup.innerHTML = 1;
        _sumPopup.innerHTML = price.dataset.price.replace(/\s/g, '') * 1;

        if (amount !== null) {
          _amountPopup.innerHTML = amount.dataset.amount;
          _sumPopup.innerHTML = price.dataset.price.replace(/\s/g, '') * amount.dataset.amount;
        }

        _sumPopup.innerHTML = _sumPopup.innerHTML.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ₽';

        if (price.innerHTML === 'Цена по запросу') {
          _pricePopup.innerHTML = 'по запросу';
          _sumPopup.innerHTML = '-';
        }
      });
    });
  } // Form


  var bgOpacity = document.createElement('span');
  header.appendChild(bgOpacity);
  bgOpacity.classList.add('bg-opacity');
  var formTelOpen = document.querySelectorAll('.form-tel-open');
  var formFastOrderOpen = document.querySelectorAll('.form-fast-order-open');
  var formAddBasketOpen = document.querySelectorAll('.form-add-basket-open');

  var openForm = function openForm(form) {
    var formWrap = form.parentNode;
    var formBtnClose = formWrap.querySelector('#form-close');
    bgOpacity.style.display = 'block';
    formWrap.classList.add('active');
    body.classList.add('no-scroll');
    document.addEventListener('click', function (e) {
      if (e.target == formBtnClose || formBtnClose.contains(e.target)) {
        bgOpacity.style.display = 'none';
        formWrap.classList.remove('active');
        body.classList.remove('no-scroll');
      }
    });
    var popupClose = document.querySelector('#popup-close');

    if (popupClose) {
      popupClose.addEventListener('click', function () {
        bgOpacity.style.display = 'none';
        formWrap.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    }
  };

  formTelOpen.forEach(function (el) {
    el.addEventListener('click', function () {
      openForm(formTel);
    });
  });
  formFastOrderOpen.forEach(function (el) {
    el.addEventListener('click', function () {
      openForm(formFastOrder);
    });
  });
  addProductBasketOpen.forEach(function (el) {
    el.addEventListener('click', function () {
      openForm(addProductBasket);
    });
  });
  addProductOrderOpen.forEach(function (el) {
    el.addEventListener('click', function () {
      openForm(addProductOrder);
    });
  });
  var allInput = document.querySelectorAll('input');
  var allTextarea = document.querySelectorAll('textarea');
  var allInputs = [].concat(_toConsumableArray(allInput), _toConsumableArray(allTextarea));
  allInputs.forEach(function (input) {
    var inputWrap = input.closest('div');

    input.oninput = function () {
      if (inputWrap.classList.contains('invalid')) {
        inputWrap.classList.remove('invalid');
      }
    };
  });

  var isValidationField = function isValidationField(field) {
    var isRequeired = field.checkValidity();
    var errorMessage = '';

    if (!isRequeired) {
      return errorMessage = 'Заполните это поле';
    }

    field.setCustomValidity('');
    return errorMessage;
  }; // const isValidationFileField = (field) => {
  //     const isRequeired = field.checkValidity();
  //     let errorMessage = '';
  //     var fileTypes = [
  //         'image/jpeg',
  //         'image/pjpeg',
  //         'image/png'
  //     ]
  //     function validFileType(file) {
  //         if(!file.files.length) {
  //             return true;
  //         }
  //         for(var i = 0; i < fileTypes.length; i++) {
  //             const fileType = file.files[0].type;
  //             if(fileType === fileTypes[i]) {
  //                 return true;
  //             }
  //         }
  //         return false;
  //     }
  //     if (!isRequeired) {
  //         return errorMessage = 'Заполните это поле';
  //     } else if(!validFileType(field)) {
  //         return errorMessage = 'Неверный тип файла';
  //     }
  //     return errorMessage;
  // }


  var isVladitionEmailField = function isVladitionEmailField(field) {
    var errorMessage = '';
    var emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/i;
    var ieEmailValue = emailPattern.test(field.value);
    var isRequeired = field.checkValidity();

    if (!isRequeired) {
      return errorMessage = 'Заполните это поле';
    } else if (!ieEmailValue) {
      return errorMessage = 'Введите корректный адрес эл. почты';
    }

    return errorMessage;
  };

  var isValidationNameField = function isValidationNameField(field) {
    var isRequeired = field.checkValidity();
    var namePattern = /^[^1-9]+[^0-9]*$/;
    var testNameValue = namePattern.test(field.value);
    var errorMessage = '';

    if (!isRequeired) {
      return errorMessage = 'Заполните это поле';
    } else if (!testNameValue) {
      return errorMessage = 'Некорректный формат данных';
    }

    field.setCustomValidity('');
    return errorMessage;
  };

  var isValidationPhone = function isValidationPhone(field) {
    var isRequeired = field.checkValidity();
    var phonePattern = /^[1-9\+\-\,\(\s)]+[0-9\+\-\,\(\s]*$/;
    var errorMessage = '';
    var testPhoneValue = phonePattern.test(field.value);

    if (!isRequeired) {
      return errorMessage = 'Заполните это поле';
    } else if (!testPhoneValue) {
      return errorMessage = 'Некорректный формат данных';
    }

    return errorMessage;
  };

  var checkFieldFormValidation = function checkFieldFormValidation(field) {
    var isValidateField = true;
    var errorMessage = '';

    if (field.name === 'email') {
      isValidateField = !Boolean(isVladitionEmailField(field));
      errorMessage = isValidateField ? '' : isVladitionEmailField(field);
    } else if (field.name === 'phone') {
      isValidateField = !Boolean(isValidationPhone(field));
      errorMessage = isValidateField ? '' : isValidationPhone(field);
    } else if (field.name === 'name') {
      isValidateField = !Boolean(isValidationNameField(field));
      errorMessage = isValidateField ? '' : isValidationNameField(field);
    } else if (field.name === 'message') {
      isValidateField = !Boolean(isValidationField(field));
      errorMessage = isValidateField ? '' : isValidationField(field);
    }

    if (!isValidateField) {
      var parent = field.parentNode;
      parent.classList.add('invalid');
      parent.querySelector('.form__error').innerHTML = errorMessage;
    } else {
      var thereisClass = field.parentNode.classList.contains('invalid');

      if (thereisClass) {
        field.parentNode.classList.remove('invalid');
        field.nextSibling.innerHTML = '';
      }
    }

    return isValidateField;
  };

  var serializeForm = function serializeForm(formNode) {
    return new FormData(formNode);
  };

  var sendData = function sendData(url, data) {
    return $.ajax({
      url: url,
      type: 'POST',
      data: data,
      contentType: false,
      processData: false,
      error: function error(jqXHR, exception) {
        if (jqXHR.status === 404) {} else if (jqXHR.status === 0) {}
      }
    });
  };

  var checkValidityForm = function checkValidityForm(form) {
    var fieldsForm = Array.from(form.elements);
    var isValidation = true;
    fieldsForm.forEach(function (field) {
      if (!checkFieldFormValidation(field)) {
        isValidation = false;
      }
    });
    return isValidation;
  };

  var formContacts = document.querySelector('#form-contacts');
  var formTel = document.querySelector('#form-tel');
  var formFastOrder = document.querySelector('#form-fast-order');
  var formAddBasket = document.querySelector('#form-add-basket');
  var formAddProductOrder = document.querySelector('#form-add-product-order');

  if (formContacts) {
    formContacts.addEventListener('submit', function (event) {
      event.preventDefault();
      var confirmation = checkValidityForm(formContacts);

      if (confirmation) {
        var dataForm = serializeForm(formContacts);
        var formContactsResult = formContacts.nextElementSibling;
        var formContactsResultBtn = formContactsResult.querySelector('button');
        var formContactsResultImg = formContactsResult.querySelector('img');
        var formContactsResultTitle = formContactsResult.querySelector('h5');
        var formContactsResultText = formContactsResult.querySelector('p');
        var formContactsInputs = formContacts.querySelectorAll('input');
        var formContactsTextarea = formContacts.querySelectorAll('textarea');
        var formContactsFields = [].concat(_toConsumableArray(formContactsInputs), _toConsumableArray(formContactsTextarea));
        formContactsResult.style.display = 'block';
        formContacts.style.display = 'none';
        formContactsResultBtn.addEventListener('click', function () {
          formContactsResult.style.display = 'none';
          formContacts.style.display = 'block';

          if (formContactsResultBtn.innerHTML == '<span>Готово</span>') {
            formContactsFields.forEach(function (el) {
              el.value = '';
            });
          }
        }); // Запрос

        var urlRequest = formContacts.getAttribute('action');
        var results = sendData(urlRequest, dataForm);
        results.fail(function (response) {
          formContactsResultImg.src = '/local/templates/main/img/icons/i-alert.svg';
          formContactsResultImg.style.backgroundColor = '#fb5a4f';
          formContactsResultTitle.innerHTML = 'Ошибка';
          formContactsResultText.innerHTML = 'При отправке письма возникал ошибка.<br>Попробуйте отправить еще раз или перезвоните нам.';
          formContactsResultBtn.innerHTML = '<span>Ещё раз</span>';
        });
        results.done(function (response) {
          formContactsResultImg.src = '/local/templates/main/img/icons/i-check.svg';
          formContactsResultImg.style.backgroundColor = '#5cc237';
          formContactsResultTitle.innerHTML = 'Cообщение отправлено';
          formContactsResultText.innerHTML = 'Наш менеджер свяжется с вами в ближайшее время';
          formContactsResultBtn.innerHTML = '<span>Готово</span>';
        });
      }
    });
  }

  if (formTel) {
    formTel.addEventListener('submit', function (event) {
      event.preventDefault();
      var confirmation = checkValidityForm(formTel);

      if (confirmation) {
        var dataForm = serializeForm(formTel);
        dataForm.append('key1', 'value1');
        var formTelResult = formTel.nextElementSibling;
        var formTelResultBtn = formTelResult.querySelector('button');
        var formTelResultImg = formTelResult.querySelector('img');
        var formTelResultTitle = formTelResult.querySelector('h5');
        var formTelResultText = formTelResult.querySelector('p');
        var formContainer = formTelResultBtn.closest('.form');
        var formTelInputs = formTel.querySelectorAll('input');
        var formTelTextarea = formTel.querySelectorAll('textarea');
        var formTelFields = [].concat(_toConsumableArray(formTelInputs), _toConsumableArray(formTelTextarea));
        formTelResult.style.display = 'block';
        formTel.style.display = 'none';
        formTelResultBtn.addEventListener('click', function () {
          formTelResult.style.display = 'none';
          formTel.style.display = 'block';

          if (formTelResultBtn.innerHTML == '<span>Готово</span>') {
            body.classList.remove('no-scroll');
            formContainer.classList.remove('active');
            bgOpacity.style.display = 'none';
            formTelFields.forEach(function (el) {
              el.value = '';
            });
          }
        }); // Запрос

        var urlRequest = formTel.getAttribute('action');
        var results = sendData(urlRequest, dataForm);
        results.fail(function (response) {
          formTelResultImg.src = '/local/templates/main/img/icons/i-alert.svg';
          formTelResultImg.style.backgroundColor = '#fb5a4f';
          formTelResultTitle.innerHTML = 'Ошибка';
          formTelResultText.innerHTML = 'При отправке письма возникал ошибка.<br>Попробуйте отправить еще раз или перезвоните нам.';
          formTelResultBtn.innerHTML = '<span>Ещё раз</span>';
        });
        results.done(function (response) {
          formTelResultImg.src = '/local/templates/main/img/icons/i-check.svg';
          formTelResultImg.style.backgroundColor = '#5cc237';
          formTelResultTitle.innerHTML = 'Cообщение отправлено';
          formTelResultText.innerHTML = 'Наш менеджер свяжется с вами в ближайшее время';
          formTelResultBtn.innerHTML = '<span>Готово</span>';
        });
      }
    });
  }

  if (formFastOrder) {
    formFastOrder.addEventListener('submit', function (event) {
      event.preventDefault();
      var confirmation = checkValidityForm(formFastOrder);

      if (confirmation) {
        var dataForm = serializeForm(formFastOrder);
        var formFastOrderResult = formFastOrder.nextElementSibling;
        var formFastOrderResultBtn = formFastOrderResult.querySelector('button');
        var formFastOrderResultImg = formFastOrderResult.querySelector('img');
        var formFastOrderResultTitle = formFastOrderResult.querySelector('h5');
        var formFastOrderResultText = formFastOrderResult.querySelector('p');
        var formContainer = formFastOrderResult.closest('.form');
        var formFastOrderInputs = formFastOrder.querySelectorAll('input');
        var formFastOrderTextarea = formFastOrder.querySelectorAll('textarea');
        var formFastOrderFields = [].concat(_toConsumableArray(formFastOrderInputs), _toConsumableArray(formFastOrderTextarea));
        formFastOrderResult.style.display = 'block';
        formFastOrder.style.display = 'none';
        formFastOrderResultBtn.addEventListener('click', function () {
          formFastOrderResult.style.display = 'none';
          formFastOrder.style.display = 'block';

          if (formFastOrderResultBtn.innerHTML == '<span>Готово</span>') {
            body.classList.remove('no-scroll');
            formContainer.classList.remove('active');
            bgOpacity.style.display = 'none';
            formFastOrderFields.forEach(function (el) {
              el.value = '';
            });
          }
        }); // Запрос

        var urlRequest = formFastOrder.getAttribute('action');
        var results = sendData(urlRequest, dataForm);
        results.fail(function (response) {
          formFastOrderResultImg.src = '/local/templates/main/img/icons/i-alert.svg';
          formFastOrderResultImg.style.backgroundColor = '#fb5a4f';
          formFastOrderResultTitle.innerHTML = 'Ошибка';
          formFastOrderResultText.innerHTML = 'При отправке письма возникал ошибка.<br>Попробуйте отправить еще раз или перезвоните нам.';
          formFastOrderResultBtn.innerHTML = '<span>Ещё раз</span>';
        });
        results.done(function (response) {
          formFastOrderResultImg.src = '/local/templates/main/img/icons/i-check.svg';
          formFastOrderResultImg.style.backgroundColor = '#5cc237';
          formFastOrderResultTitle.innerHTML = 'Cообщение отправлено';
          formFastOrderResultText.innerHTML = 'Наш менеджер свяжется с вами в ближайшее время';
          formFastOrderResultBtn.innerHTML = '<span>Готово</span>';
        });
      }
    });
  }

  if (formAddProductOrder) {
    formAddProductOrder.addEventListener('submit', function (event) {
      event.preventDefault();
      var confirmation = checkValidityForm(formAddProductOrder);

      if (confirmation) {
        var formAddProductOrderContent = formAddProductOrder.previousElementSibling;
        var companyProduct = formAddProductOrderContent.querySelector('#popup-company');
        var nameProduct = formAddProductOrderContent.querySelector('#popup-name');
        var amountProduct = formAddProductOrderContent.querySelector('#popup-amount');
        var sumProduct = formAddProductOrderContent.querySelector('#popup-sum');
        var dataForm = serializeForm(formAddProductOrder);
        dataForm.append('company-product', companyProduct.innerHTML);
        dataForm.append('company-name', nameProduct.innerHTML);
        dataForm.append('company-amount', amountProduct.innerHTML);
        dataForm.append('company-sum', sumProduct.innerHTML);
        var formAddProductOrderResult = formAddProductOrder.nextElementSibling;
        var formAddProductOrderResultBtn = formAddProductOrderResult.querySelector('button');
        var formAddProductOrderResultImg = formAddProductOrderResult.querySelector('img');
        var formAddProductOrderResultTitle = formAddProductOrderResult.querySelector('h5');
        var formAddProductOrderResultText = formAddProductOrderResult.querySelector('p');
        var formContainer = formAddProductOrderResult.closest('.popup');
        var formAddProductOrderInputs = formAddProductOrder.querySelectorAll('input');
        var formAddProductOrderTextarea = formAddProductOrder.querySelectorAll('textarea');
        var formAddProductOrderFields = [].concat(_toConsumableArray(formAddProductOrderInputs), _toConsumableArray(formAddProductOrderTextarea));
        formAddProductOrderResult.style.display = 'block';
        formAddProductOrder.style.display = 'none';
        formAddProductOrderResultBtn.addEventListener('click', function () {
          formAddProductOrderResult.style.display = 'none';
          formAddProductOrder.style.display = 'block';

          if (formAddProductOrderResultBtn.innerHTML == '<span>Готово</span>') {
            body.classList.remove('no-scroll');
            formContainer.classList.remove('active');
            bgOpacity.style.display = 'none';
            formAddProductOrderFields.forEach(function (el) {
              el.value = '';
            });
          }
        }); // Запрос

        var urlRequest = formAddProductOrder.getAttribute('action');
        var results = sendData(urlRequest, dataForm);
        results.fail(function (response) {
          formAddProductOrderResultImg.src = '/local/templates/main/img/icons/i-alert.svg';
          formAddProductOrderResultImg.style.backgroundColor = '#fb5a4f';
          formAddProductOrderResultTitle.innerHTML = 'Ошибка';
          formAddProductOrderResultText.innerHTML = 'При отправке письма возникал ошибка.<br>Попробуйте отправить еще раз или перезвоните нам.';
          formAddProductOrderResultBtn.innerHTML = '<span>Ещё раз</span>';
        });
        results.done(function (response) {
          formAddProductOrderResultImg.src = '/local/templates/main/img/icons/i-check.svg';
          formAddProductOrderResultImg.style.backgroundColor = '#5cc237';
          formAddProductOrderResultTitle.innerHTML = 'Cообщение отправлено';
          formAddProductOrderResultText.innerHTML = 'Наш менеджер свяжется с вами в ближайшее время';
          formAddProductOrderResultBtn.innerHTML = '<span>Готово</span>';
        });
      }
    });
  } // Enlarge img on click


  if (document.querySelector('.section-content__certificate')) {
    var certificateBlock = document.querySelector('.section-content__certificate');
    var certificateImg = certificateBlock.querySelector('.section-content__certificate img');
    certificateImg.addEventListener('click', function () {
      certificateBlock.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
  } // Временные


  var btnsOrder = document.querySelectorAll('.js-button-order');
  var btnsRequest = document.querySelectorAll('.js-button-request');
  btnsOrder.forEach(function (btn) {
    btn.innerHTML = 'Заказать';
  });
  btnsRequest.forEach(function (btn) {
    btn.innerHTML = 'Заявка';
  }); // Hover tooltip text

  $(".js-long-text").tooltip({
    show: {
      duration: 200,
      delay: 350
    },
    tooltipClass: "custom-tooltip-styling",
    position: {
      my: "center bottom",
      at: "center top-10"
    }
  }); // Hover page-news-list

  if (document.querySelector('.page-news-list')) {
    var newsItemTitleAll = document.querySelectorAll('.page-news-list .section-content__item-content h4');
    var newsItemBtnAll = document.querySelectorAll('.page-news-list .section-content__item-link');
    newsItemBtnAll.forEach(function (elem) {
      var block = elem.closest('.section-content__item-content');
      var title = block.querySelector('h4');
      elem.addEventListener('mouseover', function () {
        title.style.color = '#FFA800';
        elem.style.backgroundColor = '#FFA800';
        elem.style.border = '1px solid #FFA800';
      });
      elem.addEventListener('mouseout', function () {
        title.style.color = '#FFFFFF';
        elem.style.backgroundColor = '#434A73';
        elem.style.border = '1px solid rgba(255, 255, 255, 0.2)';
      });
    });
    newsItemTitleAll.forEach(function (elem) {
      var block = elem.closest('.section-content__item-content');
      var btn = block.querySelector('.section-content__item-link');
      elem.addEventListener('mouseover', function () {
        elem.style.color = '#FFA800';
        btn.style.backgroundColor = '#FFA800';
        btn.style.border = '1px solid #FFA800';
      });
      elem.addEventListener('mouseout', function () {
        elem.style.color = '#FFFFFF';
        btn.style.backgroundColor = '#434A73';
        btn.style.border = '1px solid rgba(255, 255, 255, 0.2)';
      });
    });
  }
});