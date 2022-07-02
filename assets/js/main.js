/* =======================================================
    * Template URL: https://nancy-khaled.netlify.app/
    * Author: Nancy Khaled
    ======================================================== */

(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('.nav-link', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    /**
     * active aside
     */
    $("aside .content").click(function () {
        if ($(this).hasClass("active-aside")) {
            $("aside .content").removeClass("active-aside");
        } else {
            $("aside .content").removeClass("active-aside");
            $(this).addClass("active-aside");
        }
    });

    /**
     * filter sport section
     */
    let $btns = $('.filter ul li').click(function () {
        if (this.id === 'all') {
            $('.match').fadeIn(450);
        } else {
            let $el = $('.' + this.id).fadeIn(450);
            $('.match').not($el).hide();
        }
    })

    /**
     * Scroll with offset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    /**
     * OwlCarousel slider
     */
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true,
            },
            320: {
                items: 1,
                nav: false,
                loop: true,
                autoplay: true
            },
            768: {
                items: 3,
                nav: false,
                loop: true,
                autoplay: true
            },
            1024: {
                items: 4,
                nav: false,
                loop: true,
                autoplay: true
            },
            1440: {
                items: 4,
                nav: false,
                loop: true,
                autoplay: true
            }
        }
    })

})()
