window.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container');
    
    if (document.querySelector('.section-breadcrumbs__wrap')) {
    
        const swiperBreadcrumbs = new Swiper('.section-breadcrumbs__wrap .container', {
            loop: false,
            slidesPerView: 4,
            createElements: true,
            slideClass: 'section-breadcrumbs__item',
        
            navigation: {
              nextEl: '.section-breadcrumbs__next',
              prevEl: '.section-breadcrumbs__prev',
            },
    
            breakpoints: {
                320: {
                  slidesPerView: 1.1,
                },
                650: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
            },
        });
    }
    
    if (document.querySelector('.section-banner__swiper-img') && document.querySelector('.section-banner__swiper-content')) {
        const swiperImg = new Swiper('.section-banner__swiper-img', {
            loop: true,
        
            navigation: {
              nextEl: '.section-banner__swiper-img .swiper-button-next',
              prevEl: '.section-banner__swiper-img .swiper-button-prev',
            }
        });
        
        const swiperContent = new Swiper('.section-banner__swiper-content', {
            loop: true,
            spaceBetween: 80,
        });
        
        swiperImg.controller.control = swiperContent;
        swiperContent.controller.control = swiperImg;
    };
    
    if (document.querySelector('.section-leader__swiper')) {
        const swiperLeader = new Swiper('.section-leader__swiper', {
            loop: true,
            autoHeight: true,
            breakpoints: {
                320: {
                  slidesPerView: 1,
                },
                650: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
            },
        
            navigation: {
              nextEl: '.section-leader__btn-next',
              prevEl: '.section-leader__btn-prev',
            }
        });
    }
    
    if (document.querySelector('.section-similar__swiper')) {
        const swiperSimilarSlides = document.querySelectorAll('.section-similar__swiper .swiper-slide');
        const swiperSimilarBtns = document.querySelector('.section-similar__btns');
    
        const swiperSimilar = new Swiper('.section-similar__swiper', {
            loop: false,
            slidesPerView: 4,
            autoHeight: true,
            breakpoints: {
                320: {
                  slidesPerView: 1,
                },
                650: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
            },
        
            navigation: {
              nextEl: '.section-similar__btn-next',
              prevEl: '.section-similar__btn-prev',
            }
        });
        
        if (swiperSimilarSlides.length <= 4) {
            swiperSimilarBtns.style.display = 'none';
        }
    }
    
    if (document.querySelector('.section-view__swiper')) {
        const swiperViewSlides = document.querySelectorAll('.section-view__swiper .swiper-slide');
        const swiperViewBtns = document.querySelector('.section-view__btns');
    
        const swiperView = new Swiper('.section-view__swiper', {
            loop: false,
            slidesPerView: 4,
            autoHeight: true,
            breakpoints: {
                320: {
                  slidesPerView: 1,
                },
                650: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
            },
        
            navigation: {
              nextEl: '.section-view__btn-next',
              prevEl: '.section-view__btn-prev',
            }
        });
    
        if (swiperViewSlides.length <= 4) {
            swiperViewBtns.style.display = 'none';
        }
    }
    
    if (document.querySelector('.section-other__swiper')) {
        const swiperOtherSlides = document.querySelectorAll('.section-other__swiper .swiper-slide');
        const swiperOtherBtns = document.querySelector('.section-other__btns');
    
        const swiperOther = new Swiper('.section-other__swiper', {
            loop: false,
            slidesPerView: 4,
            autoHeight: true,
            breakpoints: {
                320: {
                  slidesPerView: 1,
                },
                650: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
            },
        
            navigation: {
              nextEl: '.section-other__btn-next',
              prevEl: '.section-other__btn-prev',
            }
        });
    
        if (swiperOtherSlides.length <= 4) {
            swiperOtherBtns.style.display = 'none';
        }
    }

    if (document.querySelector('.page-article .other__swiper')) {
        const swiperOtherSlides = document.querySelectorAll('.other__swiper .swiper-slide');
        const swiperOtherBtns = document.querySelector('.other__btns');
    
        const swiperOther = new Swiper('.other__swiper', {
            loop: false,
            slidesPerView: 4,
            autoHeight: true,
            breakpoints: {
                320: {
                  slidesPerView: 1,
                },
                650: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
            },
        
            navigation: {
              nextEl: '.other__btn-next',
              prevEl: '.other__btn-prev',
            }
        });
    
        if (swiperOtherSlides.length <= 4) {
            swiperOtherBtns.style.display = 'none';
        }
    }
    
    if (document.querySelector('.page-news .other__swiper')) {
        const swiperOtherSlides = document.querySelectorAll('.other__swiper .swiper-slide');
        const swiperOtherBtns = document.querySelector('.other__btns');
    
        const swiperOther = new Swiper('.other__swiper', {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 1,
            autoHeight: true,
            breakpoints: {
                320: {
                  slidesPerView: 1.2,
                },
                650: {
                    slidesPerView: 1,
                }
            },
        
            navigation: {
              nextEl: '.other__btn-next',
              prevEl: '.other__btn-prev',
            }
        });
    
        if (swiperOtherSlides.length <= 1) { 
            swiperOtherBtns.style.display = 'none';
        }
    }
    
    if (document.querySelector('.section-content__view-wrap .swiper') && document.querySelector('.section-content__view-preview .swiper')) {
        const swiperViewImg = new Swiper('.section-content__view-wrap .swiper', {
            loop: false,
            slidesPerView: 1,
            
            thumbs: {
                swiper: {
                    el: '.section-content__view-preview .swiper',
                    slidesPerView: 5,
                }
            }
        });
    
        const swiperViewPreviewImg = new Swiper('.section-content__view-preview .swiper', {
            loop: false,
            slidesPerView: 5,
        });
    
        swiperViewImg.controller.control = swiperViewPreviewImg;
        swiperViewPreviewImg.controller.control = swiperViewImg;
    }
    
    const arrayMr = document.querySelectorAll('.js-margin-right');
    const arrayMl = document.querySelectorAll('.js-margin-left');
    
    const marginRight = (array) => {
        const containerMr = window.getComputedStyle(container, null).getPropertyValue("margin-right");
        const containerMl = window.getComputedStyle(container, null).getPropertyValue("margin-left");
    
        array.forEach(el => {
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
    
    const marginLeft = (array) => {
        const containerMr = window.getComputedStyle(container, null).getPropertyValue("margin-right");
        const containerMl = window.getComputedStyle(container, null).getPropertyValue("margin-left");
    
        array.forEach(el => {
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
    
    window.addEventListener('resize', () => {
        marginRight(arrayMr);
        marginLeft(arrayMl);
    });
    
    const containerPopularItems = document.querySelectorAll('.container-popular');
    const btnPopular = document.querySelector('#js-popular-btn-show');
    
    if (btnPopular) {
        btnPopular.addEventListener('click', () => {
            containerPopularItems.forEach((elem, index) => {
                if (index > 0) {
                    let i = containerPopularItems[index];
        
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
    
    const btnInfo = document.querySelector('#js-info-btn-show');
    const btnInfoAll = document.querySelectorAll('#js-info-btn-show');
    
    if (btnInfo) {
        btnInfoAll.forEach((btn) => {
            btn.addEventListener('click', () => {
                const infoOptionsBlock = btn.closest('.section-content__info-options');
                const infoOptionsList = infoOptionsBlock.querySelector('ul');
    
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
    
    const body = document.querySelector('.body');
    const headerButton = document.querySelector('.header__catalog');
    const headerButtonName = document.querySelector('.header__catalog-name');
    const headerCatalogMenu = document.querySelector('.catalog-menu');
    
    headerButton.addEventListener('click', () => {
        headerButton.classList.toggle('active');
        headerCatalogMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    
        if (headerButton.classList.contains('active')) {
            headerButtonName.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L6.58579 8L2.29289 12.2929C1.90237 12.6834 1.90237 13.3166 2.29289 13.7071C2.68342 14.0976 3.31658 14.0976 3.70711 13.7071L8 9.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L9.41421 8L13.7071 3.70711C14.0976 3.31658 14.0976 2.68342 13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289L8 6.58579L3.70711 2.29289Z"/></svg>' + 'Каталог';
        } else {
            headerButtonName.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 2.44772 0.447715 2 1 2L15 2C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4L1 4C0.447715 4 0 3.55228 0 3ZM0 8C0 7.44772 0.447715 7 1 7L15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9L1 9C0.447715 9 0 8.55228 0 8ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14L9 14C9.55229 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12L1 12Z"/></svg>' + 'Каталог';
        }
    });
    
    const headerButtonMobile = document.querySelector('.header__menu-btn');
    const headerMenuMobile = document.querySelector('.menu-mobile');
    const headerCatalogMenuMobile = document.querySelector('.header__catalog-mobile');
    
    headerButtonMobile.addEventListener('click', () => {
        headerButtonMobile.classList.toggle('active');
        headerMenuMobile.classList.toggle('active');
        body.classList.toggle('no-scroll');
    
        if (headerButtonMobile.classList.contains('active')) {
            headerButtonMobile.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L6.58579 8L2.29289 12.2929C1.90237 12.6834 1.90237 13.3166 2.29289 13.7071C2.68342 14.0976 3.31658 14.0976 3.70711 13.7071L8 9.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L9.41421 8L13.7071 3.70711C14.0976 3.31658 14.0976 2.68342 13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289L8 6.58579L3.70711 2.29289Z"/></svg>';
        } else {
            headerButtonMobile.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 2.44772 0.447715 2 1 2L15 2C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4L1 4C0.447715 4 0 3.55228 0 3ZM0 8C0 7.44772 0.447715 7 1 7L15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9L1 9C0.447715 9 0 8.55228 0 8ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14L9 14C9.55229 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12L1 12Z"/></svg>';
            body.classList.remove('no-scroll');
            menuMobileListsSecond.forEach((ul) => {
                ul.classList.remove('active');
            });
        }
    
        if (headerCatalogMenu.classList.contains('active')) {
            headerCatalogMenu.classList.remove('active');
            body.classList.remove('no-scroll');
            menuCatalogListsInside.forEach((ul) => {
                ul.classList.remove('active');
            });
        }
    });
    
    headerCatalogMenuMobile.addEventListener('click', () => {
        headerButton.classList.toggle('active');
        headerCatalogMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
    
    // Menu Return
    
    const headerMenuBtnsReturn = document.querySelectorAll('.header__menu-return');
    
    headerMenuBtnsReturn.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.closest('.active').classList.remove('active');
        });
    });
    
    const header = document.querySelector('.header');
    const headerTop = document.querySelector('.header__top');
    const headerBottom = document.querySelector('.header__bottom');
    const main = document.querySelector('.main');
    
    let headerHeight = header.offsetHeight;
    
    let mainIndent = document.createElement('span');
    mainIndent.style.display = 'block';
    mainIndent.style.backgroundColor = '#434a73';
    main.prepend(mainIndent);
    
    const indentTopMain = () => {
        mainIndent.style.height = header.offsetHeight + 'px';
    }
    
    indentTopMain();
    
    headerCatalogMenu.style.height = 'calc(100% - ' + `${headerHeight}` + 'px)';
    headerMenuMobile.style.height = 'calc(100% - ' + `${headerHeight}` + 'px)';
    
    window.addEventListener('resize', () => {
        indentTopMain();
        headerCatalogMenu.style.height = 'calc(100% - ' + `${headerHeight}` + 'px)';
        headerMenuMobile.style.height = 'calc(100% - ' + `${headerHeight}` + 'px)';
    });
    
    if (window.scrollY > 1) {
        header.classList.add('header__fixed');
        let headerHeight = header.offsetHeight;
        let headerTopHeight = headerTop.offsetHeight;
        headerCatalogMenu.style.height = 'calc(100% - ' + `${headerHeight - headerTopHeight}` + 'px)';
        headerMenuMobile.style.height = 'calc(100% - ' + `${headerHeight}` + 'px)';
    }
    
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        let headerHeight = header.offsetHeight;
        let headerTopHeight = headerTop.offsetHeight;
        let headerBottomHeight = headerBottom.offsetHeight;
        
        if (scrollDistance >= 1 && window.innerWidth <= 650) {
            header.classList.add('header__fixed');
            headerMenuMobile.style.height = 'calc(100% - ' + `${headerHeight}` + 'px)';
        } else {
            header.classList.remove('header__fixed');
            headerMenuMobile.style.height = `${headerTopHeight + headerBottomHeight}` + 'px)';
        }
        
        if (scrollDistance >= 1) {
            header.classList.add('header__fixed');
            headerCatalogMenu.style.height = 'calc(100% - ' + `${headerBottomHeight}` + 'px)';
            headerMenuMobile.style.height = 'calc(100% - ' + `${headerBottomHeight}` + 'px)';
        } else {
            header.classList.remove('header__fixed');
            headerCatalogMenu.style.height = 'calc(100% - ' + `${headerTopHeight + headerBottomHeight}` + 'px)';
            headerMenuMobile.style.height = 'calc(100% - ' + `${headerTopHeight + headerBottomHeight}` + 'px)';
        }
    });
    
    // Tooltip Widget
    
    const mainCardsName = document.querySelectorAll('.section-leader__swiper-name');
    const productSimilarCardsName = document.querySelectorAll('.section-similar__swiper-name');
    const productViewCardsName = document.querySelectorAll('.section-view__swiper-name');
    const catalogListCardsName = document.querySelectorAll('.catalog-list .catalog__item-name a');
    const catalogImgCardsName = document.querySelectorAll('.catalog-list-img .catalog__item-name a');
    const catalogGridCardsName = document.querySelectorAll('.catalog-grid .catalog__item-name a');
    
    const funcTooltipWidget = (array, number) => {
        array.forEach(elem => {
            if(elem.innerHTML.length >= number && !elem.querySelector('img')) {
                elem.classList.add('js-long-text');
                elem.setAttribute('title', elem.innerHTML);
            };
        });
    };
    
    funcTooltipWidget(mainCardsName, 50);
    funcTooltipWidget(productSimilarCardsName, 50);
    funcTooltipWidget(productViewCardsName, 50);
    
    if(document.querySelector('.catalog-list .catalog__item-name a')) {
        funcTooltipWidget(catalogListCardsName, 34);
    }
    if(document.querySelector('.catalog-list-img .catalog__item-name a')) {
        funcTooltipWidget(catalogImgCardsName, 56);
    }
    if(document.querySelector('.catalog-grid .catalog__item-name a')) {
        funcTooltipWidget(catalogGridCardsName, 56);
    }
    
    const catalogList = document.querySelector('.catalog__list');
    const catalogFilterBtns = document.querySelectorAll('.catalog__filter-btns button');
    const catalogFilterBtnList = document.querySelector('#js-filter-list');
    const catalogFilterBtnListImg = document.querySelector('#js-filter-list-img');
    const catalogFilterBtnGrid = document.querySelector('#js-filter-grid');
    
    const funcClickCatalogListBtn = (btn, list) => {
        btn.addEventListener('click', () => {
            catalogFilterBtns.forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });
            
            catalogList.className = '';
            catalogList.className = 'catalog__list ' + list;
            btn.classList.add('active');
            localStorage.setItem('btn', btn.id);
            localStorage.setItem('list', list);
            
            if(document.querySelector('.catalog-list .catalog__item-name a')) {
                funcTooltipWidget(catalogListCardsName, 34);
            }
            if(document.querySelector('.catalog-list-img .catalog__item-name a')) {
                funcTooltipWidget(catalogImgCardsName, 56);
            }
            if(document.querySelector('.catalog-grid .catalog__item-name a')) {
                funcTooltipWidget(catalogGridCardsName, 56);
            }
        });
    };
    
    if (catalogList) {
        funcClickCatalogListBtn(catalogFilterBtnList, 'catalog-list');
        funcClickCatalogListBtn(catalogFilterBtnListImg, 'catalog-list-img');
        funcClickCatalogListBtn(catalogFilterBtnGrid, 'catalog-grid');
    };
    
    window.addEventListener('DOMContentLoaded', () => {
        if(catalogList) {
            if(catalogFilterBtnList && catalogFilterBtnList.classList.contains('active')) {
                catalogList.className = 'catalog__list ' + 'catalog-list';
            } else if(catalogFilterBtnListImg && catalogFilterBtnListImg.classList.contains('active')) {
                catalogList.className = 'catalog__list ' + 'catalog-list-img';
            } else if(catalogFilterBtnGrid && catalogFilterBtnGrid.classList.contains('active')) {
                catalogList.className = 'catalog__list ' + 'catalog-grid';
            };
        };
    });

    if(catalogList) {
        const checkStorage = () => {
            catalogList.className = 'catalog__list';
            let a = 0;
            
            for (let i = 0; i < catalogFilterBtns.length; i++) {
                let btnActive = localStorage.getItem('btn');
                let listActive = localStorage.getItem('list');
                catalogFilterBtns[i].classList.remove('active');
                
                if(catalogFilterBtns[i].id === btnActive) {
                    catalogFilterBtns[i].classList.add('active');
                    catalogList.classList.add(listActive);
                    a = 1;
                }

            }

            if(a === 0) {
                catalogFilterBtnGrid.classList.add('active');
                catalogList.classList.add('catalog-grid');
            }
        };

        checkStorage();
    }

    
    // Filter Catalog
    
    const catalogFilterBtn = document.querySelector('.catalog__filter-btn');
    const catalogFilterContainer = document.querySelector('.section-content__filter');
    const catalogFilterBtnClose = document.querySelector('.catalog__filter-close');
    
    
    if (catalogFilterBtn) {
        catalogFilterBtn.addEventListener('click', () => {
            catalogFilterContainer.classList.add('active');
        });
    
        if(catalogFilterBtnClose) {
            catalogFilterBtnClose.addEventListener('click', () => {
                catalogFilterContainer.classList.remove('active');
            });
        } 
        
    }
    
    // Menu Catalog Hover
    
    const menuCatalogBtnsListFirst = document.querySelectorAll('.catalog-menu__first li a');
    const menuCatalogListsInside = document.querySelectorAll('.catalog-menu__list-inside ul');
    
    menuCatalogBtnsListFirst.forEach((a) => {
        a.addEventListener('mouseover', () => {
    
            menuCatalogListsInside.forEach((ul) => {
                ul.classList.remove('active');
            });
            
            const menuCatalogListInside = document.querySelector(`[data-inside_menu='${a.dataset.first_menu}']`);
            menuCatalogListInside.classList.add('active');
        });
    
        a.addEventListener('click', (i) => {
            
            if(window.innerWidth <= 1024) {
                i.preventDefault()
        
                menuCatalogListsInside.forEach((ul) => {
                    ul.classList.remove('active');
                });
                
                const menuCatalogListInside = document.querySelector(`[data-inside_menu='${a.dataset.first_menu}']`);
                menuCatalogListInside.classList.add('active');
            }
        
        });
    });
    
    // Menu Mobile Click
    
    const menuMobileBtnsListFirst = document.querySelectorAll('.menu-mobile__first li button');
    const menuMobileListsSecond = document.querySelectorAll('.menu-mobile__second ul');
    
    menuMobileBtnsListFirst.forEach(o => {
        o.addEventListener('click', () => {
    
            if (o == headerCatalogMenuMobile) {
            } else {
                menuMobileListsSecond.forEach((ul) => {
                    ul.classList.remove('active');
                });
                
                const menuMobileListSecond = document.querySelector(`[data-mobile-second_menu='${o.dataset.mobile_first_menu}']`);
                menuMobileListSecond.classList.add('active');
            }
        });
    });
    
    // Page Buyers
    
    const allBuyersItemsInfo = document.querySelectorAll('.section-content__info-item');
    const buyersItemTab = document.querySelector('.section-content__tabs ul li');
    const allBuyersItemsTabs = document.querySelectorAll('.section-content__tabs ul li');
    const allBuyersHeaderItemsTabs = document.querySelectorAll('.header__nav-list a');
    const allBuyersFooterItemsTabs = document.querySelectorAll('.footer__colum-item.footer__colum-item--buyer');
    const allBuyersMobileMenuItems = document.querySelectorAll('.menu-mobile__second li a');
    
    const transitBlocksInfo = (array) => {
    
        const sectionContent = document.querySelector('.page-buyers .section-content');
    
        array.forEach((el, index) => {
            el.addEventListener('click', () => {
                event.preventDefault();
    
                allBuyersItemsTabs.forEach(el => {
                    el.classList.remove('active');
                });
                allBuyersItemsInfo.forEach(el => {
                    el.classList.remove('active');
                });
    
                allBuyersItemsTabs[index].classList.add('active');
                allBuyersItemsInfo[index].classList.add('active');
                allBuyersHeaderItemsTabs[index].classList.add('active');
                allBuyersFooterItemsTabs[index].classList.add('active');
                
                document.location.href = allBuyersItemsTabs[index].querySelector('a').href;
    
                if(sectionContent) {
                    window.scrollTo(0,sectionContent.offsetTop - 96);
                }
    
                if(array === allBuyersMobileMenuItems) {
                    headerMenuMobile.classList.remove('active');
                    headerButtonMobile.classList.remove('active');
                    headerButtonMobile.innerHTML = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 2.44772 0.447715 2 1 2L15 2C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4L1 4C0.447715 4 0 3.55228 0 3ZM0 8C0 7.44772 0.447715 7 1 7L15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9L1 9C0.447715 9 0 8.55228 0 8ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14L9 14C9.55229 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12L1 12Z"/></svg>';
                    body.classList.remove('no-scroll');
                    menuMobileListsSecond.forEach((ul) => {
                        ul.classList.remove('active');
                    });
                }
            });
        });
    };
    
    const funcClickNavByers = () => {
    
        const tabsListLink = ['#payment', '#guarantee', '#questions', '#catalog',];
        
        tabsListLink.forEach(elem => {
            if(document.location.hash === elem) {
                
                allBuyersItemsTabs.forEach(el => {
                    el.classList.remove('active');
                });
                allBuyersItemsInfo.forEach(el => {
                    el.classList.remove('active');
                });
    
                const elemNoHash = elem.replace(/#/g, '');
    
                const link = document.querySelector(`a[href='${elem}']`);
                const linkBlock = link.closest('li');
                const linkHref = document.getElementById(`${elemNoHash}`);
                link.classList.add('active');
                linkBlock.classList.add('active');
                linkHref.classList.add('active');
            }
        })
    
        const sectionContent = document.querySelector('.page-buyers .section-content');
        
        if(sectionContent) {
    
            if (!sectionContent) {
                return;
            }
    
            const offsetTop = sectionContent.getBoundingClientRect().top;
            const top = offsetTop > 0 ? (window.scrollY + offsetTop - 96) : offsetTop;
    
            window.scroll({
                top,
                behavior: 'smooth',
            });
        }
    }
    
    window.addEventListener('load', () => {
        funcClickNavByers();
    });
    
    if(buyersItemTab) {
        transitBlocksInfo(allBuyersItemsTabs);
        transitBlocksInfo(allBuyersHeaderItemsTabs);
        transitBlocksInfo(allBuyersFooterItemsTabs);
        transitBlocksInfo(allBuyersMobileMenuItems);
    }
    
    
    const allAccordionItems = document.querySelectorAll('.section-content__info-accordion li');
    
    const accordionTransit = (array) => {
        array.forEach((el, index) => {
            el.addEventListener('click', () => {
                if(array[index].classList.contains('active')) {
                    array.forEach((el) => {
                        el.classList.remove('active');
                    });
                } else {
                    array.forEach((el) => {
                        el.classList.remove('active');
                    });
                    array[index].classList.add('active');
                };
            });
        });
    };
    
    accordionTransit(allAccordionItems);
    
    // Page Manufacturer
    
    if(document.querySelector('.page-manufacturer .section-content__products')) {
        const manufacturerContentProducts = document.querySelector('.page-manufacturer .section-content__products');
        const manufacturerContentWrap = manufacturerContentProducts.closest('.section-content__wrap');
        const manufacturerContentCertificate = manufacturerContentWrap.querySelector('.section-content__certificate');
        
        if(!manufacturerContentCertificate) {
            manufacturerContentWrap.classList.add('js-column-1');
        }
    }
    
    // Page Cart-Product
    
    const addProductBasketOpen = document.querySelectorAll('.add-product-basket-open');
    const addProductBasket = document.querySelector('#add-product-basket');
    const addProductOrderOpen = document.querySelectorAll('.add-product-order-open');
    const addProductOrder = document.querySelector('#add-product-order');
    
    if (document.querySelector('.add-product-basket-open') || document.querySelector('.add-product-order-open')) {
        let imgPopup = document.querySelector('#popup-img');
        const namePopup = document.querySelector('#popup-name');
        const companyPopup = document.querySelector('#popup-company');
        const pricePopup = document.querySelector('#popup-price');
        const amountPopup = document.querySelector('#popup-amount');
        const sumPopup = document.querySelector('#popup-sum');
        
        const amountPlus = document.querySelectorAll('.amount-plus');
        const amountMinus = document.querySelectorAll('.amount-minus');
    
        amountPlus.forEach((el) => {
            el.addEventListener('click', () => {
                const elWrap = el.closest('div');
                const elAmount = elWrap.querySelector('.amount');
    
                elAmount.innerHTML = Number(elAmount.innerHTML) + 1;
                elAmount.dataset.amount = elAmount.innerHTML;
            });
        });
    
        amountMinus.forEach((el) => {
            el.addEventListener('click', () => {
                const elWrap = el.closest('div');
                const elAmount = elWrap.querySelector('.amount');
    
                if (Number(elAmount.innerHTML) > 0) {
                    elAmount.innerHTML = Number(elAmount.innerHTML) - 1;
                    elAmount.dataset.amount = elAmount.innerHTML;
                }
            });
        });
    
        addProductBasketOpen.forEach(btn => {
            btn.addEventListener('click', () => {
                const img = wrapData.querySelector('img');
                const name = wrapData.querySelector(`[data-name]`);
                const company = wrapData.querySelector(`[data-company`);
                const amount = wrapData.querySelector(`[data-amount]`);
                const price = wrapData.querySelector(`[data-price`);
                const wrapData = btn.closest('.add-product-basket-wrap');
    
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
                
                if(amount !== null) {
                    amountPopup.innerHTML = amount.dataset.amount;
                    sumPopup.innerHTML = price.dataset.price.replace(/\s/g, '') * amount.dataset.amount;
                }
    
                sumPopup.innerHTML = sumPopup.innerHTML.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ₽';
    
                if(price.innerHTML === 'Цена по запросу') {
                    pricePopup.innerHTML = 'по запросу';
                    sumPopup.innerHTML = '-';
                }
            });
        });
    
    }
    
    if (document.querySelector('.add-product-order-open')) {
        let imgPopup = addProductOrder.querySelector('#popup-img');
        const titlePopup = addProductOrder.querySelector('h5');
        const textPopup = addProductOrder.querySelector('.form__adaptive-text');
        const btnTextPopup = addProductOrder.querySelector('.form__btn span');
        const namePopup = addProductOrder.querySelector('#popup-name');
        const companyPopup = addProductOrder.querySelector('#popup-company');
        const pricePopup = addProductOrder.querySelector('#popup-price');
        const amountPopup = addProductOrder.querySelector('#popup-amount');
        const sumPopup = addProductOrder.querySelector('#popup-sum');
        
        addProductOrderOpen.forEach(btn => {
            btn.addEventListener('click', () => {
                const wrapData = btn.closest('.add-product-basket-wrap');
                const price = wrapData.querySelector(`[data-price`);
                const img = wrapData.querySelector('img');
                const name = wrapData.querySelector(`[data-name]`);
                const company = wrapData.querySelector(`[data-company`);
                const amount = wrapData.querySelector(`[data-amount]`);
    
                if (btn.classList.contains('js-button-order')) {
                    titlePopup.innerHTML = 'Заказ';
                    textPopup.innerHTML = 'Оставьте заявку и наш менеджер свяжется с вами в ближайшее время для уточнения деталей заказа';
                    btnTextPopup.innerHTML = 'Оставить заказ';
                } else if (btn.classList.contains('js-button-request')) {
                    titlePopup.innerHTML = 'Заявка';
                    textPopup.innerHTML = 'Оставьте заявку и наш менеджер свяжется с вами в ближайшее время для уточнения деталей';
                    btnTextPopup.innerHTML = 'Оставить заявку';
                }
                
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
                
                if(amount !== null) {
                    amountPopup.innerHTML = amount.dataset.amount;
                    sumPopup.innerHTML = price.dataset.price.replace(/\s/g, '') * amount.dataset.amount;
                }
    
                sumPopup.innerHTML = sumPopup.innerHTML.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ₽';
    
                if(price.innerHTML === 'Цена по запросу') {
                    pricePopup.innerHTML = 'по запросу';
                    sumPopup.innerHTML = '-';
                }
            });
        });
    }
    
    // Form
    
    const bgOpacity = document.createElement('span');
    header.appendChild(bgOpacity);
    bgOpacity.classList.add('bg-opacity')
    
    const formTelOpen = document.querySelectorAll('.form-tel-open');
    const formFastOrderOpen = document.querySelectorAll('.form-fast-order-open');
    const formAddBasketOpen = document.querySelectorAll('.form-add-basket-open');
    
    
    const openForm = (form) => {
        
        let formWrap = form.parentNode;
        let formBtnClose = formWrap.querySelector('#form-close');
    
        bgOpacity.style.display = 'block';
        formWrap.classList.add('active');
        body.classList.add('no-scroll');
        
        document.addEventListener('click', (e) => {
            if (e.target == formBtnClose || formBtnClose.contains(e.target)) {
                bgOpacity.style.display = 'none';
                formWrap.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
        
        let popupClose = document.querySelector('#popup-close');
    
        if (popupClose) {
            popupClose.addEventListener('click', () => {
                bgOpacity.style.display = 'none';
                formWrap.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        }
    };
    
    formTelOpen.forEach((el) => {
        el.addEventListener('click', () => {
            openForm(formTel);
        })
    });
    
    formFastOrderOpen.forEach((el) => {
        el.addEventListener('click', () => {
            openForm(formFastOrder);
        })
    });
    
    addProductBasketOpen.forEach((el) => {
        el.addEventListener('click', () => {
            openForm(addProductBasket);
        })
    });
    
    addProductOrderOpen.forEach((el) => {
        el.addEventListener('click', () => {
            openForm(addProductOrder);
        })
    });
    
    const allInput = document.querySelectorAll('input');
    const allTextarea = document.querySelectorAll('textarea');
    
    const allInputs = [...allInput, ...allTextarea];
    
    allInputs.forEach((input) => {
        let inputWrap = input.closest('div');
    
        input.oninput = function() {
            if (inputWrap.classList.contains('invalid')) {
                inputWrap.classList.remove('invalid');
            }
        };
    });
    
    const isValidationField = (field) => {
        const isRequeired = field.checkValidity();
        let errorMessage = '';
    
        if (!isRequeired) {
            return errorMessage = 'Заполните это поле';
        }
    
        field.setCustomValidity('')
    
        return errorMessage;
    }
    
    // const isValidationFileField = (field) => {
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
    
    const isVladitionEmailField = (field) => {
        let errorMessage = '';
        const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/i;
    
        const ieEmailValue = emailPattern.test(field.value);
        const isRequeired = field.checkValidity();
    
        if (!isRequeired) {
            return errorMessage = 'Заполните это поле';
        } else if(!ieEmailValue) {
            return errorMessage = 'Введите корректный адрес эл. почты';
        }
    
        return errorMessage;
    }
    
    const isValidationNameField = (field) => {
        const isRequeired = field.checkValidity();
        const namePattern = /^[^1-9]+[^0-9]*$/;
        const testNameValue = namePattern.test(field.value);
        let errorMessage = '';
    
        if (!isRequeired) {
            return errorMessage = 'Заполните это поле';
        } else if (!testNameValue) {
            return errorMessage = 'Некорректный формат данных';
        }
    
        field.setCustomValidity('')
    
        return errorMessage;
    }
    
    const isValidationPhone = (field) => {
        const isRequeired = field.checkValidity();
        const phonePattern = /^[1-9\+\-\,\(\s)]+[0-9\+\-\,\(\s]*$/;
        let errorMessage = '';
    
        const testPhoneValue = phonePattern.test(field.value);
    
        if (!isRequeired) {
            return errorMessage = 'Заполните это поле';
        } else if (!testPhoneValue) {
            return errorMessage = 'Некорректный формат данных';
        }
    
        return errorMessage;
    }
    
    const checkFieldFormValidation = (field) => {
        let isValidateField = true;
        let errorMessage = ''
    
        if(field.name === 'email') {
            isValidateField = !Boolean(isVladitionEmailField(field));
            errorMessage = isValidateField ? '' : isVladitionEmailField(field);
        } else if(field.name === 'phone') {
            isValidateField = !Boolean(isValidationPhone(field));
            errorMessage = isValidateField ? '' : isValidationPhone(field);
        } else if(field.name === 'name') {
            isValidateField = !Boolean(isValidationNameField(field))
            errorMessage = isValidateField ? '' : isValidationNameField(field);
        } else if(field.name === 'message') {
            isValidateField = !Boolean(isValidationField(field))
            errorMessage = isValidateField ? '' : isValidationField(field);
        }
    
        if(!isValidateField) {
            const parent = field.parentNode;
    
            parent.classList.add('invalid');
            parent.querySelector('.form__error').innerHTML = errorMessage;
        } else {
            const thereisClass = field.parentNode.classList.contains('invalid');
    
            if(thereisClass) {
                field.parentNode.classList.remove('invalid')
                field.nextSibling.innerHTML = '';
            }
        }
    
        return isValidateField
    }
    
    const serializeForm = (formNode) => {
        return new FormData(formNode);
    }
    
    const sendData = (url, data) => {
        return $.ajax({
            url: url,
            type: 'POST',
            data: data,
            contentType: false,
            processData: false,
            error: function (jqXHR, exception) {
                if (jqXHR.status === 404) {
                } else if (jqXHR.status === 0) {
                }
            },
        });
    }
    
    const checkValidityForm = (form) => {
        const fieldsForm = Array.from(form.elements);
        let isValidation = true;
    
        fieldsForm.forEach(field => {
    
            if(!checkFieldFormValidation(field)) {
                isValidation = false;
            }
        })
    
        return isValidation;
    };
    
    const formContacts = document.querySelector('#form-contacts');
    const formTel = document.querySelector('#form-tel');
    const formFastOrder = document.querySelector('#form-fast-order');
    const formAddBasket = document.querySelector('#form-add-basket');
    const formAddProductOrder = document.querySelector('#form-add-product-order');
    
    if (formContacts) {
        formContacts.addEventListener('submit', (event) => {
            event.preventDefault();
        
            const confirmation = checkValidityForm(formContacts);
        
            if(confirmation) {
        
                const dataForm = serializeForm(formContacts);
    
                const formContactsResult = formContacts.nextElementSibling;
                const formContactsResultBtn = formContactsResult.querySelector('button');
                const formContactsResultImg = formContactsResult.querySelector('img');
                const formContactsResultTitle = formContactsResult.querySelector('h5');
                const formContactsResultText = formContactsResult.querySelector('p');
                
                const formContactsInputs = formContacts.querySelectorAll('input');
                const formContactsTextarea = formContacts.querySelectorAll('textarea');
                const formContactsFields = [...formContactsInputs, ...formContactsTextarea];
                
                formContactsResult.style.display = 'block';
                formContacts.style.display = 'none';
    
                formContactsResultBtn.addEventListener('click', () => {
                    formContactsResult.style.display = 'none';
                    formContacts.style.display = 'block';

                    if(formContactsResultBtn.innerHTML == '<span>Готово</span>') {
                        
                        formContactsFields.forEach(el => {
                            el.value = '';
                        });
                    }
                });
        
                // Запрос
        
                const urlRequest = formContacts.getAttribute('action');
                const results = sendData(urlRequest, dataForm)
        
                results.fail((response) => {
                    formContactsResultImg.src = '/local/templates/main/img/icons/i-alert.svg';
                    formContactsResultImg.style.backgroundColor = '#fb5a4f';
                    formContactsResultTitle.innerHTML = 'Ошибка';
                    formContactsResultText.innerHTML = 'При отправке письма возникал ошибка.<br>Попробуйте отправить еще раз или перезвоните нам.';
                    formContactsResultBtn.innerHTML = '<span>Ещё раз</span>';
                })
                results.done((response) => {
                    formContactsResultImg.src = '/local/templates/main/img/icons/i-check.svg';
                    formContactsResultImg.style.backgroundColor = '#5cc237';
                    formContactsResultTitle.innerHTML = 'Cообщение отправлено';
                    formContactsResultText.innerHTML = 'Наш менеджер свяжется с вами в ближайшее время';
                    formContactsResultBtn.innerHTML = '<span>Готово</span>';
                })
            }
        
        });
    }
    if (formTel) {
    
        formTel.addEventListener('submit', (event) => {
            event.preventDefault();
        
            const confirmation = checkValidityForm(formTel);
        
            if(confirmation) {
        
                let dataForm = serializeForm(formTel);
                
                dataForm.append('key1', 'value1');
    
                const formTelResult = formTel.nextElementSibling;
                const formTelResultBtn = formTelResult.querySelector('button');
                const formTelResultImg = formTelResult.querySelector('img');
                const formTelResultTitle = formTelResult.querySelector('h5');
                const formTelResultText = formTelResult.querySelector('p');
                const formContainer = formTelResultBtn.closest('.form');
                
                const formTelInputs = formTel.querySelectorAll('input');
                const formTelTextarea = formTel.querySelectorAll('textarea');
                const formTelFields = [...formTelInputs, ...formTelTextarea];
    
                formTelResult.style.display = 'block';
                formTel.style.display = 'none';
        
                formTelResultBtn.addEventListener('click', () => {
                    formTelResult.style.display = 'none';
                    formTel.style.display = 'block';
    
                    if(formTelResultBtn.innerHTML == '<span>Готово</span>') {
                        body.classList.remove('no-scroll');
                        formContainer.classList.remove('active');
                        bgOpacity.style.display = 'none';
                    
                        formTelFields.forEach(el => {
                            el.value = '';
                        });
                    }
                });
    
                // Запрос
        
                const urlRequest = formTel.getAttribute('action');
                const results = sendData(urlRequest, dataForm)
                
                results.fail((response) => {
                    formTelResultImg.src = '/local/templates/main/img/icons/i-alert.svg';
                    formTelResultImg.style.backgroundColor = '#fb5a4f';
                    formTelResultTitle.innerHTML = 'Ошибка';
                    formTelResultText.innerHTML = 'При отправке письма возникал ошибка.<br>Попробуйте отправить еще раз или перезвоните нам.';
                    formTelResultBtn.innerHTML = '<span>Ещё раз</span>';
                })
                results.done((response) => {
                    formTelResultImg.src = '/local/templates/main/img/icons/i-check.svg';
                    formTelResultImg.style.backgroundColor = '#5cc237';
                    formTelResultTitle.innerHTML = 'Cообщение отправлено';
                    formTelResultText.innerHTML = 'Наш менеджер свяжется с вами в ближайшее время';
                    formTelResultBtn.innerHTML = '<span>Готово</span>';
                })
            }
        
        });
    }
    if (formFastOrder) {
    
        formFastOrder.addEventListener('submit', (event) => {
            event.preventDefault();
        
            const confirmation = checkValidityForm(formFastOrder);
        
            if(confirmation) {
        
                const dataForm = serializeForm(formFastOrder);
    
                const formFastOrderResult = formFastOrder.nextElementSibling;
                const formFastOrderResultBtn = formFastOrderResult.querySelector('button');
                const formFastOrderResultImg = formFastOrderResult.querySelector('img');
                const formFastOrderResultTitle = formFastOrderResult.querySelector('h5');
                const formFastOrderResultText = formFastOrderResult.querySelector('p');
                const formContainer = formFastOrderResult.closest('.form');
                
                const formFastOrderInputs = formFastOrder.querySelectorAll('input');
                const formFastOrderTextarea = formFastOrder.querySelectorAll('textarea');
                const formFastOrderFields = [...formFastOrderInputs, ...formFastOrderTextarea];
    
                formFastOrderResult.style.display = 'block';
                formFastOrder.style.display = 'none';
        
                formFastOrderResultBtn.addEventListener('click', () => {
                    formFastOrderResult.style.display = 'none';
                    formFastOrder.style.display = 'block';
    
                    if(formFastOrderResultBtn.innerHTML == '<span>Готово</span>') {
                        body.classList.remove('no-scroll');
                        formContainer.classList.remove('active');
                        bgOpacity.style.display = 'none';
                    
                        formFastOrderFields.forEach(el => {
                            el.value = '';
                        });
                    }
                });
    
                // Запрос
        
                const urlRequest = formFastOrder.getAttribute('action');
                const results = sendData(urlRequest, dataForm)
        
                results.fail((response) => {
                    formFastOrderResultImg.src = '/local/templates/main/img/icons/i-alert.svg';
                    formFastOrderResultImg.style.backgroundColor = '#fb5a4f';
                    formFastOrderResultTitle.innerHTML = 'Ошибка';
                    formFastOrderResultText.innerHTML = 'При отправке письма возникал ошибка.<br>Попробуйте отправить еще раз или перезвоните нам.';
                    formFastOrderResultBtn.innerHTML = '<span>Ещё раз</span>';
                })
                results.done((response) => {
                    formFastOrderResultImg.src = '/local/templates/main/img/icons/i-check.svg';
                    formFastOrderResultImg.style.backgroundColor = '#5cc237';
                    formFastOrderResultTitle.innerHTML = 'Cообщение отправлено';
                    formFastOrderResultText.innerHTML = 'Наш менеджер свяжется с вами в ближайшее время';
                    formFastOrderResultBtn.innerHTML = '<span>Готово</span>';
                })
            }
        });
    }
    if (formAddProductOrder) {
    
        formAddProductOrder.addEventListener('submit', (event) => {
            event.preventDefault();
        
            const confirmation = checkValidityForm(formAddProductOrder);
        
            if(confirmation) {
                const formAddProductOrderContent = formAddProductOrder.previousElementSibling;
    
                const companyProduct = formAddProductOrderContent.querySelector('#popup-company');
                const nameProduct = formAddProductOrderContent.querySelector('#popup-name');
                const amountProduct = formAddProductOrderContent.querySelector('#popup-amount');
                const sumProduct = formAddProductOrderContent.querySelector('#popup-sum');
        
                const dataForm = serializeForm(formAddProductOrder);
                dataForm.append('company-product', companyProduct.innerHTML);
                dataForm.append('company-name', nameProduct.innerHTML);
                dataForm.append('company-amount', amountProduct.innerHTML);
                dataForm.append('company-sum', sumProduct.innerHTML);
    
                const formAddProductOrderResult = formAddProductOrder.nextElementSibling;
                const formAddProductOrderResultBtn = formAddProductOrderResult.querySelector('button');
                const formAddProductOrderResultImg = formAddProductOrderResult.querySelector('img');
                const formAddProductOrderResultTitle = formAddProductOrderResult.querySelector('h5');
                const formAddProductOrderResultText = formAddProductOrderResult.querySelector('p');
                const formContainer = formAddProductOrderResult.closest('.popup');
                
                const formAddProductOrderInputs = formAddProductOrder.querySelectorAll('input');
                const formAddProductOrderTextarea = formAddProductOrder.querySelectorAll('textarea');
                const formAddProductOrderFields = [...formAddProductOrderInputs, ...formAddProductOrderTextarea];
    
                formAddProductOrderResult.style.display = 'block';
                formAddProductOrder.style.display = 'none';
        
                formAddProductOrderResultBtn.addEventListener('click', () => {
                    formAddProductOrderResult.style.display = 'none';
                    formAddProductOrder.style.display = 'block';
    
                    if(formAddProductOrderResultBtn.innerHTML == '<span>Готово</span>') {
                        body.classList.remove('no-scroll');
                        formContainer.classList.remove('active');
                        bgOpacity.style.display = 'none';
                    
                        formAddProductOrderFields.forEach(el => {
                            el.value = '';
                        });
                    }
                });
    
                // Запрос
        
                const urlRequest = formAddProductOrder.getAttribute('action');
                const results = sendData(urlRequest, dataForm)
        
                results.fail((response) => {
                    formAddProductOrderResultImg.src = '/local/templates/main/img/icons/i-alert.svg';
                    formAddProductOrderResultImg.style.backgroundColor = '#fb5a4f';
                    formAddProductOrderResultTitle.innerHTML = 'Ошибка';
                    formAddProductOrderResultText.innerHTML = 'При отправке письма возникал ошибка.<br>Попробуйте отправить еще раз или перезвоните нам.';
                    formAddProductOrderResultBtn.innerHTML = '<span>Ещё раз</span>';
                })
                results.done((response) => {
                    formAddProductOrderResultImg.src = '/local/templates/main/img/icons/i-check.svg';
                    formAddProductOrderResultImg.style.backgroundColor = '#5cc237';
                    formAddProductOrderResultTitle.innerHTML = 'Cообщение отправлено';
                    formAddProductOrderResultText.innerHTML = 'Наш менеджер свяжется с вами в ближайшее время';
                    formAddProductOrderResultBtn.innerHTML = '<span>Готово</span>';
                })
            }
        
        });
    }
    
    // Enlarge img on click
    
    if(document.querySelector('.section-content__certificate')) {
        const certificateBlock = document.querySelector('.section-content__certificate');
        const certificateImg = certificateBlock.querySelector('.section-content__certificate img');
        
        certificateImg.addEventListener('click', () => {
            certificateBlock.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });
    }
    
    // Временные
    
    const btnsOrder = document.querySelectorAll('.js-button-order');
    const btnsRequest = document.querySelectorAll('.js-button-request');
    
    btnsOrder.forEach(btn => {
        btn.innerHTML = 'Заказать';
    });
    btnsRequest.forEach(btn => {
        btn.innerHTML = 'Заявка';
    });

    // Hover tooltip text

    $( ".js-long-text" ).tooltip({
        show: {
            duration: 200,
            delay: 350,
        },
        tooltipClass: "custom-tooltip-styling",
        position: {  
            my: "center bottom",
            at: "center top-10"
        },
    });

    // Hover page-news-list

    if (document.querySelector('.page-news-list')) {
        const newsItemTitleAll = document.querySelectorAll('.page-news-list .section-content__item-content h4');
        const newsItemBtnAll = document.querySelectorAll('.page-news-list .section-content__item-link');

        newsItemBtnAll.forEach(elem => {
            const block = elem.closest('.section-content__item-content');
            const title = block.querySelector('h4');

            elem.addEventListener('mouseover', () => {
                title.style.color = '#FFA800';
                elem.style.backgroundColor = '#FFA800';
                elem.style.border = '1px solid #FFA800';
            });
            elem.addEventListener('mouseout', () => {
                title.style.color = '#FFFFFF';
                elem.style.backgroundColor = '#434A73';
                elem.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            });
        });

        newsItemTitleAll.forEach(elem => {
            const block = elem.closest('.section-content__item-content');
            const btn = block.querySelector('.section-content__item-link');

            elem.addEventListener('mouseover', () => {
                elem.style.color = '#FFA800';
                btn.style.backgroundColor = '#FFA800';
                btn.style.border = '1px solid #FFA800';
            });
            elem.addEventListener('mouseout', () => {
                elem.style.color = '#FFFFFF';
                btn.style.backgroundColor = '#434A73';
                btn.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            });
        });
    }
});