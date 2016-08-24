import jQuery from './jquery.js'
import Nanobar from 'nanobar'
import FastClick from 'fastclick'
import Swiper from 'swiper'
import { countdown, lazyload, justifiedGallery, swipebox } from './plugins.js'
import swipe from 'jquery-touchswipe'

jQuery(document).ready(function () {

    //FastClick
    jQuery(function() {FastClick.attach(document.body);});

    //Preload Image
    jQuery(function() {
        jQuery(".preload-image").lazyload({
            threshold : 100,
            effect : "fadeIn",
            container: jQuery("#page-content-scroll")
        });
    });

    //Material Menu Settings//
    jQuery('.material-menu-deploy').click(function(){
       jQuery('.material-menu-background').addClass('mm-bg');
       jQuery('.material-menu-deploy').css('z-index', '99');
       jQuery(this).parent().find('.material-menu-close').addClass('mm-c');
       jQuery(this).parent().find('.material-menu-1').addClass('mm-1');
       jQuery(this).parent().find('.material-menu-2').addClass('mm-2');
       jQuery(this).parent().find('.material-menu-3').addClass('mm-3');
       jQuery(this).parent().find('.material-menu-4').addClass('mm-4');
       jQuery(this).parent().find('.material-menu-5').addClass('mm-5');
       jQuery(this).parent().find('.material-menu-6').addClass('mm-6');
        return false;
    });

    jQuery('.material-menu-close, .material-menu-background').click(function(){
        jQuery('.material-menu-background').removeClass('mm-bg');
        setTimeout(function(){
            jQuery('.material-menu-deploy').css('z-index', '999');
        }, 350);
        jQuery(this).parent().find('.material-menu-close').removeClass('mm-c');
        jQuery(this).parent().find('.material-menu-6').removeClass('mm-6');
        jQuery(this).parent().find('.material-menu-5').removeClass('mm-5');
        jQuery(this).parent().find('.material-menu-4').removeClass('mm-4');
        jQuery(this).parent().find('.material-menu-3').removeClass('mm-3');
        jQuery(this).parent().find('.material-menu-2').removeClass('mm-2');
        jQuery(this).parent().find('.material-menu-1').removeClass('mm-1');
        return false;
    });

    //Header Menu*/
    jQuery('.open-header-menu, .close-header-menu').click(function(){
       jQuery('.header-menu').toggleClass('header-menu-active');
       jQuery('.open-header-menu').toggleClass('rotate-180');
        return false;
    });

    //Modal Menu*/
    jQuery('.open-modal-menu, .close-modal-menu, .modal-menu-background').click(function(){
       jQuery('.modal-menu').toggleClass('active-modal-menu');
       jQuery('.modal-menu-background').toggleClass('active-modal-menu-background');
       jQuery('.open-modal-menu').toggleClass('rotate-45');
        return false;
    });

    //Sidebar Dimensions Go here
    var sidebar_width = 250;
    var sidebar_shadow_correction = 280; /*Add 30 Pixels to your sidebar width*/
    var sidebar_form_width = sidebar_width - 40;  /*This calculates the form size automatically*/

    jQuery('.submenu, .sidebar-left, .sidebar-right').css('width', sidebar_width);
    jQuery('.sidebar-form').css('width', sidebar_form_width);

    jQuery(".sidebar-left .submenu").css({
        "transform": "translateX("+sidebar_width*(-1)+"px)",
        "-webkit-transform": "translateX("+sidebar_width*(-1)+"px)",
        "-moz-transform": "translateX("+sidebar_width*(-1)+"px)",
        "-o-transform": "translateX("+sidebar_width*(-1)+"px)",
        "-ms-transform": "translateX("+sidebar_width*(-1)+"px)"
    });
    jQuery(".sidebar-left").css({
        "transform": "translateX("+sidebar_shadow_correction*(-1)+"px)",
        "-webkit-transform": "translateX("+sidebar_shadow_correction*(-1)+"px)",
        "-moz-transform": "translateX("+sidebar_shadow_correction*(-1)+"px)",
        "-o-transform": "translateX("+sidebar_shadow_correction*(-1)+"px)",
        "-ms-transform": "translateX("+sidebar_shadow_correction*(-1)+"px)"
    });
    jQuery(".sidebar-right .submenu").css({
        "transform": "translateX("+sidebar_width*(1)+"px)",
        "-webkit-transform": "translateX("+sidebar_width*(1)+"px)",
        "-moz-transform": "translateX("+sidebar_width*(1)+"px)",
        "-o-transform": "translateX("+sidebar_width*(1)+"px)",
        "-ms-transform": "translateX("+sidebar_width*(1)+"px)"
    });
    jQuery(".sidebar-right").css({
        "transform": "translateX("+sidebar_shadow_correction*(1)+"px)",
        "-webkit-transform": "translateX("+sidebar_shadow_correction*(1)+"px)",
        "-moz-transform": "translateX("+sidebar_shadow_correction*(1)+"px)",
        "-o-transform": "translateX("+sidebar_shadow_correction*(1)+"px)",
        "-ms-transform": "translateX("+sidebar_shadow_correction*(1)+"px)"
    });
    jQuery(".sidebar-right .submenu").css({
        "transform": "translateX("+sidebar_width*(1)+"px)",
        "-webkit-transform": "translateX("+sidebar_width*(1)+"px)",
        "-moz-transform": "translateX("+sidebar_width*(1)+"px)",
        "-o-transform": "translateX("+sidebar_width*(1)+"px)",
        "-ms-transform": "translateX("+sidebar_width*(1)+"px)"
    });

    //Sidebar Settings
    jQuery('.open-left-sidebar').click(function(){
        jQuery('.sidebar-left').addClass('active-sidebar-box');
        jQuery('.sidebar-right').removeClass('active-sidebar-box');
        jQuery('.sidebar-tap-close').addClass('active-tap-close');
        return false;
    });

    jQuery('.open-right-sidebar').click(function(){
        jQuery('.sidebar-right').addClass('active-sidebar-box');
        jQuery('.sidebar-left').removeClass('active-sidebar-box');
        jQuery('.sidebar-tap-close').addClass('active-tap-close');
        return false;
    });

    jQuery('.open-search-bar, .close-search-bar').click(function(){
       jQuery('.header-search').toggleClass('active-search');
    });

    jQuery('.sidebar-tap-close, .close-sidebar').click(function(){ //
        jQuery('.sidebar-left, .sidebar-right').removeClass('active-sidebar-box');
        jQuery('.sidebar-tap-close').removeClass('active-tap-close');
        jQuery("#page-content, .header-fixed").css({
            "transform": "translateX(0px)",
            "-webkit-transform": "translateX(0px)",
            "-moz-transform": "translateX(0px)",
            "-o-transform": "translateX(0px)",
            "-ms-transform": "translateX(0px)"
        });
        return false;
    });

    //Open / Close Sidebar Submenu
    jQuery('.open-submenu').click(function(){
        jQuery(this).parent().find('.submenu').toggleClass('active-submenu');
        return false;
    });
    jQuery('.active-item').addClass('active-submenu-history');
    jQuery('.close-submenu').click(function(){
        jQuery('.submenu').removeClass('active-submenu');
        jQuery('.open-submenu').removeClass('active-item');
        return false;
    });
    if(jQuery('.submenu').hasClass('active-submenu')){
        var counted_subs = jQuery('.active-submenu').find('a').length;
        jQuery('.active-submenu').addClass('active-submenu-' + counted_subs);
    };

    //Making the slider load in the height of the image inside, no jumps*/

    //Timeout is required for sliders to iron out performance issues*/
    setTimeout(function() {
        var swiper_store_slider = new Swiper('.store-slider', {autoplay:3000});
        var swiper_store_slider2 = new Swiper('.store-slider-2', {autoplay:3000});
        var swiper_single = new Swiper('.single-item', {autoplay:3000});
        var swiper_text = new Swiper('.text-slider', {autoplay:3000});
        var swiper_news_slider = new Swiper('.news-slider');
        var swiper_home_slider = new Swiper('.homepage-slider', {autoplay:3000});
        var swiper_quote_slider = new Swiper('.quote-slider', {autoplay:3000});
        var swiper_coverpage = new Swiper('.coverpage-slider', {autoplay:3000});
        var swiper_category_slider = new Swiper('.category-slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 20,
        breakpoints: {
            1024: {
                slidesPerView: 6,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            320: {
                slidesPerView: 3,
                spaceBetween: 5
            }
        }
        });

        var swiper_store_thumbnail_slider = new Swiper('.store-thumbnails', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 5,
            spaceBetween: 20,
            breakpoints: {
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 5
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5
                }
            }
        });

        var swiper_store_thumbnail_slider = new Swiper('.circle-slider', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 5
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 5
                }
            }
        });

        var swiper_coverflow_thumbnails = new Swiper('.coverflow-thumbnails', {
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            autoplay:3000,
            autoplayDisableOnInteraction: false,
            loop:true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 60,
                stretch: -60,
                depth: 400,
                modifier: 1,
                slideShadows : false
            }
        });

        var swiper_coverflow_slider = new Swiper('.coverflow-slider', {
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            autoplay:3000,
            autoplayDisableOnInteraction: false,
            loop:true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 60,
                stretch: -60,
                depth: 400,
                modifier: 1,
                slideShadows : false
            }
        });

        var swiper_staff_slider = new Swiper('.staff-slider', {
            nextButton: '.next-staff-slider',
            prevButton: '.prev-staff-slider',
            autoplay:3000,
            autoplayDisableOnInteraction: false,
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 5
                }
            }
        });

    }, 0.01);


    //Mobile Style Switches
    jQuery('.switch-1').click(function(){jQuery(this).toggleClass('switch-1-on'); return false;});
    jQuery('.switch-2').click(function(){jQuery(this).toggleClass('switch-2-on'); return false;});
    jQuery('.switch-3').click(function(){jQuery(this).toggleClass('switch-3-on'); return false;});
    jQuery('.switch, .switch-icon').click(function(){
        jQuery(this).parent().find('.switch-box-content').slideToggle(250);
        jQuery(this).parent().find('.switch-box-subtitle').slideToggle(250);
        return false;
    });

    //Classic Toggles
    jQuery('.toggle-title').click(function(){
        jQuery(this).parent().find('.toggle-content').slideToggle(250);
        jQuery(this).find('i').toggleClass('rotate-toggle');
        return false;
    });

    //Accordion
    jQuery('.accordion').find('.accordion-toggle').click(function(){
        //Expand or collapse this panel
        jQuery(this).next().slideDown(250);
        jQuery('.accordion').find('i').removeClass('rotate-180');
        jQuery(this).find('i').addClass('rotate-180');

        //Hide the other panels
        jQuery(".accordion-content").not(jQuery(this).next()).slideUp(250);
    });

    //Tabs
	jQuery('ul.tabs li').click(function(){
		var tab_id = jQuery(this).attr('data-tab');
		jQuery('ul.tabs li').removeClass('active-tab');
		jQuery('.tab-content').slideUp(250);
		jQuery(this).addClass('active-tab');
		jQuery("#"+tab_id).slideToggle(250);
	})

    //Notifications
    jQuery('.static-notification-close').click(function(){
       jQuery(this).parent().slideUp(250);
        return false;
    });
    jQuery('.tap-dismiss').click(function(){
       jQuery(this).slideUp(250);
        return false;
    });

	//Detect if iOS WebApp Engaged and permit navigation without deploying Safari
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)jQuery/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")

    //Detecting Mobiles//
    var isMobile = {
        Android: function() {return navigator.userAgent.match(/Android/i);},
        BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
        iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
        Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
        Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
        any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
    };

    if( !isMobile.any() ){
        jQuery('.show-blackberry, .show-ios, .show-windows, .show-android').addClass('disabled');
        jQuery('#page-content-scroll').css('right', '0px');
        jQuery('.show-no-detection').removeClass('disabled');
    }
    if(isMobile.Android()) {
        //Status Bar Color for Android
        jQuery('head').append('<meta name="theme-color" content="#000000"> />');
        jQuery('.show-android').removeClass('disabled');
        jQuery('.show-blackberry, .show-ios, .show-windows').addClass('disabled');
        jQuery('#page-content-scroll, .sidebar-scroll').css('right', '0px');
    }
    if(isMobile.BlackBerry()) {
        jQuery('.show-blackberry').removeClass('disabled');
        jQuery('.show-android, .show-ios, .show-windows').addClass('disabled');
        jQuery('#page-content-scroll, .sidebar-scroll').css('right', '0px');
    }
    if(isMobile.iOS()) {
        jQuery('.show-ios').removeClass('disabled');
        jQuery('.show-blackberry, .show-android, .show-windows').addClass('disabled');
        jQuery('#page-content-scroll, .sidebar-scroll').css('right', '0px');
    }
    if(isMobile.Windows()) {
        jQuery('.show-windows').removeClass('disabled');
        jQuery('.show-blackberry, .show-ios, .show-android').addClass('disabled');
        jQuery('#page-content-scroll, .sidebar-scroll').css('right', '0px');
    }

    //Adaptive Folios
    jQuery('.adaptive-one').click(function(){
        jQuery('.portfolio-switch').removeClass('active-adaptive');
        jQuery(this).addClass('active-adaptive');
        jQuery('.portfolio-adaptive').removeClass('portfolio-adaptive-two portfolio-adaptive-three');
        jQuery('.portfolio-adaptive').addClass('portfolio-adaptive-one');
        return false;
    });
    jQuery('.adaptive-two').click(function(){
        jQuery('.portfolio-switch').removeClass('active-adaptive');
        jQuery(this).addClass('active-adaptive');
        jQuery('.portfolio-adaptive').removeClass('portfolio-adaptive-one portfolio-adaptive-three');
        jQuery('.portfolio-adaptive').addClass('portfolio-adaptive-two');
        return false;
    });
    jQuery('.adaptive-three').click(function(){
        jQuery('.portfolio-switch').removeClass('active-adaptive');
        jQuery(this).addClass('active-adaptive');
        jQuery('.portfolio-adaptive').removeClass('portfolio-adaptive-two portfolio-adaptive-one');
        jQuery('.portfolio-adaptive').addClass('portfolio-adaptive-three');
        return false;
    });

    //Reminders & Checklists & Tasklists
    jQuery('.reminder-check-square').click(function(){
       jQuery(this).toggleClass('reminder-check-square-selected');
        return false;
    });
    jQuery('.reminder-check-round').click(function(){
       jQuery(this).toggleClass('reminder-check-round-selected');
        return false;
    });
    jQuery('.checklist-square').click(function(){
       jQuery(this).toggleClass('checklist-square-selected');
        return false;
    });
    jQuery('.checklist-round').click(function(){
       jQuery(this).toggleClass('checklist-round-selected');
        return false;
    });
    jQuery('.tasklist-incomplete').click(function(){
       jQuery(this).removeClass('tasklist-incomplete');
       jQuery(this).addClass('tasklist-completed');
        return false;
    });
    jQuery('.tasklist-item').click(function(){
       jQuery(this).toggleClass('tasklist-completed');
        return false;
    });

    //SiteMap
    jQuery('.sitemap-box a').hover(
        function(){jQuery(this).find('i').addClass('scale-hover');},
        function(){jQuery(this).find('i').removeClass('scale-hover');}
    );

    //Fullscreen Map
    jQuery('.map-text, .overlay').click(function(){
       jQuery('.map-text, .map-fullscreen .overlay').addClass('hide-map');
       jQuery('.deactivate-map').removeClass('hide-map');
    });

    jQuery('.deactivate-map').click(function(){
       jQuery('.map-text, .map-fullscreen .overlay').removeClass('hide-map');
       jQuery('.deactivate-map').addClass('hide-map');
    });

    //Show Back To Home When Scrolling
    jQuery('#page-content-scroll').on('scroll', function () {
        var total_scroll_height = jQuery('#page-content-scroll')[0].scrollHeight
        var inside_header = (jQuery(this).scrollTop() <= 150);
        var passed_header = (jQuery(this).scrollTop() >= 0); //250
        var footer_reached = (jQuery(this).scrollTop() >= (total_scroll_height - (jQuery(window).height() +100 )));

        if (inside_header == true) {
            jQuery('.back-to-top-badge').removeClass('back-to-top-badge-visible');
        } else if (passed_header == true)  {
            jQuery('.back-to-top-badge').addClass('back-to-top-badge-visible');
        }
        if (footer_reached == true){
            jQuery('.back-to-top-badge').removeClass('back-to-top-badge-visible');
        }
    });

    //Back to top Badge
    jQuery('.back-to-top-badge, .back-to-top').click(function (e) {
        e.preventDefault();
        jQuery('#page-content-scroll').animate({
            scrollTop: 0
        }, 250);
    });


    //Set inputs to today's date by adding class set-day
    var set_input_now = new Date();
    var set_input_month = (set_input_now.getMonth() + 1);
    var set_input_day = set_input_now.getDate();
    if(set_input_month < 10)
        set_input_month = "0" + set_input_month;
    if(set_input_day < 10)
        set_input_day = "0" + set_input_day;
    var set_input_today = set_input_now.getFullYear() + '-' + set_input_month + '-' + set_input_day;
    jQuery('.set-today').val(set_input_today);

    //Portfolios and Gallerties
    jQuery('.adaptive-one').click(function(){
        jQuery('.portfolio-switch').removeClass('active-adaptive');
        jQuery(this).addClass('active-adaptive');
        jQuery('.portfolio-adaptive').removeClass('portfolio-adaptive-two portfolio-adaptive-three');
        jQuery('.portfolio-adaptive').addClass('portfolio-adaptive-one');
        return false;
    });
    jQuery('.adaptive-two').click(function(){
        jQuery('.portfolio-switch').removeClass('active-adaptive');
        jQuery(this).addClass('active-adaptive');
        jQuery('.portfolio-adaptive').removeClass('portfolio-adaptive-one portfolio-adaptive-three');
        jQuery('.portfolio-adaptive').addClass('portfolio-adaptive-two');
        return false;
    });
    jQuery('.adaptive-three').click(function(){
        jQuery('.portfolio-switch').removeClass('active-adaptive');
        jQuery(this).addClass('active-adaptive');
        jQuery('.portfolio-adaptive').removeClass('portfolio-adaptive-two portfolio-adaptive-one');
        jQuery('.portfolio-adaptive').addClass('portfolio-adaptive-three');
        return false;
    });

    //Wide Portfolio
    jQuery('.show-wide-text').click(function(){
        jQuery(this).parent().find('.wide-text').slideToggle(200);
        return false;
    });
    jQuery('.portfolio-close').click(function(){
       jQuery(this).parent().parent().find('.wide-text').slideToggle(200);
        return false;
    });

    //Bottom Share Fly-up
    jQuery('body').append('<div class="share-bottom-tap-close"></div>');
    jQuery('.show-share-bottom, .show-share-box').click(function(){
        jQuery('.share-bottom-tap-close').addClass('share-bottom-tap-close-active');
        jQuery('.share-bottom').toggleClass('active-share-bottom');
        return false;
    });
    jQuery('.close-share-bottom, .share-bottom-tap-close').click(function(){
       jQuery('.share-bottom-tap-close').removeClass('share-bottom-tap-close-active');
       jQuery('.share-bottom').removeClass('active-share-bottom');
        return false;
    });

    //Filterable Gallery
    var selectedClass = "";
    jQuery(".filter-category").click(function(){
        jQuery('.portfolio-filter-categories a').removeClass('selected-filter');
        jQuery(this).addClass('selected-filter');
        selectedClass = jQuery(this).attr("data-rel");
        jQuery(".portfolio-filter-wrapper").slideDown(250);
        jQuery(".portfolio-filter-wrapper div").not("."+selectedClass).delay(100).slideUp(250);
        //Timeout for events arrangements. Timeout is such a small value you won't sense it but the code will.
        setTimeout(function() {
            jQuery("."+selectedClass).slideDown(250);
            jQuery(".portfolio-filter-wrapper").slideDown(250);
        }, 0);
    });

    if(jQuery('body').hasClass('has-footer-menu')){
        jQuery('.back-to-top-badge').addClass('over-footer-menu');
    };


    //Resizable Elements
    if(jQuery('body').hasClass('has-cover')){
        var screen_height = 0;
        var screen_width = 0;

        var cover_content_height = 0;
        var cover_content_width = 0;

        //Coverpage Calculations
        function calculate_covers(){
            var screen_height = jQuery('#page-content').height();
            var screen_width = jQuery('#page-content').width();

            //Settings for Cover Pages
            var cover_content_height = jQuery('.cover-page-content').height()-30;
            var cover_content_width = jQuery('.cover-page-content').width();

            jQuery('.cover-page').css('height', screen_height);
            jQuery('.cover-page').css('width', screen_width);
            jQuery('.cover-page-content').css('margin-left', (cover_content_width/2)*(-1));
            jQuery('.cover-page-content').css('margin-top', (cover_content_height/2)*(-1));

            var cover_width = jQuery(window).width();
            var cover_height = jQuery(window).height();
            var cover_vertical = -(jQuery('.cover-center').height())/2;
            var cover_horizontal = -(jQuery('.cover-center').width())/2;

            jQuery('.cover-screen').css('width', cover_width);
            jQuery('.cover-screen').css('height', cover_height);
            jQuery('.cover-screen .overlay').css('width', cover_width);
            jQuery('.cover-screen .overlay').css('height', cover_height);
            jQuery('.cover-center').css('margin-left', cover_horizontal);
            jQuery('.cover-center').css('margin-top', cover_vertical + 30);
            jQuery('.cover-left').css('margin-top', cover_vertical);
            jQuery('.cover-right').css('margin-top', cover_vertical);
        };

        //Timeout for events arrangements. Timeout is such a small value you won't sense it but the code will.
        setTimeout(function() {
            function slider_dots(){
                var dots_width = (-(jQuery('.owl-dots').width())/2);
                jQuery('.owl-dots').css('position', 'absolute');
                jQuery('.owl-dots').css('left', '50%');
                jQuery('.owl-dots').css('margin-left', dots_width);
            }
            slider_dots();
        }, 1);

        //Homepage Calculations
        function calculate_home(){
            var screen_height = jQuery('#page-content').height();
            var screen_width = jQuery('#page-content').width();

            var total_height = screen_height-220;
            var five_rows = total_height / 5;
            var four_rows = total_height / 4;
            var three_rows = total_height / 3;

            var five_columns = screen_width/5;
            var four_columns = screen_width/4;
            var three_columns = screen_width/3;

            var icon_size_five = five_rows/5;
            var icon_size_four = four_rows/4;
            var icon_size_three = three_rows/3;

            jQuery('.five-rows a').css('height', five_rows);
            jQuery('.five-rows a').css('padding-top', (five_rows/2)-icon_size_five);
            jQuery('.five-rows strong').css('margin-top', (five_rows/2)-icon_size_five);

            jQuery('.four-rows a').css('height', four_rows);
            jQuery('.four-rows a').css('padding-top', (four_rows/2)-icon_size_four);
            jQuery('.four-rows strong').css('margin-top', (four_rows/2)-icon_size_four);

            jQuery('.three-rows a').css('height', three_rows);
            jQuery('.three-rows a').css('padding-top', (three_rows/2)-icon_size_three);
            jQuery('.three-rows strong').css('margin-top', (three_rows/2)-icon_size_three);

            jQuery('.five-columns a').css('width', five_columns);
            jQuery('.four-columns a').css('width', four_columns);
            jQuery('.three-columns a').css('width', three_columns);

            var home_intro_width = jQuery('.home-intro').width()*(-1);
            var home_intro_height = jQuery('.home-intro').height()*(-1);

            jQuery('.home-intro').css('margin-left', home_intro_width/2);
            jQuery('.home-intro').css('margin-top', home_intro_height/2);

            var home_outro_width = jQuery('.home-outro').width()*(-1);
            var home_outro_height = jQuery('.home-outro').height()*(-1);

            jQuery('.home-outro').css('margin-left', home_outro_width/2);
            jQuery('.home-outro').css('margin-top', home_outro_height/2);

            if(jQuery('.home-slide-icons a').find("strong").length > 0){
                jQuery('.home-slide-icons a i').css('pointer-events', 'none');
            };

            jQuery(".home-social a").hover(
                function() {jQuery(this).addClass('hover-icon-effect');},
                function() {jQuery(this).removeClass('hover-icon-effect');}
            );

            jQuery(".home-slide-icons a").hover(
                function(){jQuery(this).find('i').addClass('hover-icon-effect'); jQuery(this).find('strong').addClass('hover-icon-effect');},
                function(){jQuery(this).find('i').removeClass('hover-icon-effect'); jQuery(this).find('strong').removeClass('hover-icon-effect');}
            );
        };

        function calculate_map(){
            var map_width = jQuery(window).width();
            var map_height = jQuery(window).height();
            jQuery('.map-fullscreen iframe').css('width', map_width);
            jQuery('.map-fullscreen iframe').css('height', map_height);
        };

        calculate_home();
        calculate_covers();
        calculate_map();

        jQuery( window ).resize(function() {
            calculate_covers();
            calculate_home();
        });

        //Demo Purposes
        jQuery('.error-page-layout-switch').click(function(){
           jQuery('.cover-page-content').toggleClass('unboxed-layout, boxed-layout');
            calculate_covers();
        });
    }

    //Countdown Timer
    jQuery(function() {
        jQuery('.countdown-class').countdown({
            date: "June 7, 2087 15:03:26"
        });
    });

    //Copyright Year
    if (jQuery("#copyright-year")[0]){
        document.getElementById('copyright-year').appendChild(document.createTextNode(new Date().getFullYear()))
    }

    //Preloading Bar
    var options = {
        bg: '#2980b9',
        // leave target blank for global nanobar
        target: document.getElementById('myDivId'),
        // id for new nanobar
        id: 'mynano'
    };
    var nanobar = new Nanobar( options );
    nanobar.go( 30 ); // size bar 30%
    nanobar.go(100); // size bar 100%

    //Loading Thumb Layout for News, 10 articles at a time
    jQuery(function(){
        jQuery(".thumb-layout-page a").slice(0, 5).show(); // select the first ten
        jQuery(".load-more-thumbs").click(function(e){ // click event for load more
            e.preventDefault();
            jQuery(".thumb-layout-page a:hidden").slice(0, 5).show(0); // select next 10 hidden divs and show them
            if(jQuery(".thumb-layout-page a:hidden").length == 0){ // check if any hidden divs still exist
                jQuery(this).hide();
            }
        });
    });

    jQuery(function(){
        jQuery(".card-large-layout-page .card-large-layout").slice(0, 2).show(); // select the first ten
        jQuery(".load-more-large-cards").click(function(e){ // click event for load more
            e.preventDefault();
            jQuery(".card-large-layout-page .card-large-layout:hidden").slice(0, 2).show(0); // select next 10 hidden divs and show them
            if(jQuery(".card-large-layout-page div:hidden").length == 0){ // check if any hidden divs still exist
                jQuery(this).hide();
            }
        });
    });

    jQuery(function(){
        jQuery(".card-small-layout-page .card-small-layout").slice(0, 3).show(); // select the first ten
        jQuery(".load-more-small-cards").click(function(e){ // click event for load more
            e.preventDefault();
            jQuery(".card-small-layout-page .card-small-layout:hidden").slice(0, 3).show(0); // select next 10 hidden divs and show them
            if(jQuery(".card-small-layout-page a:hidden").length == 0){ // check if any hidden divs still exist
                jQuery(this).hide();
            }
        });
    });

    //News Tabs
    jQuery('.activate-tab-1').click(function(){
        jQuery('#tab-2, #tab-3').slideUp(250); jQuery('#tab-1').slideDown(250);
        jQuery('.home-tabs a').removeClass('active-home-tab');
        jQuery('.activate-tab-1').addClass('active-home-tab');
        return false;
    });
    jQuery('.activate-tab-2').click(function(){
        jQuery('#tab-1, #tab-3').slideUp(250); jQuery('#tab-2').slideDown(250);
        jQuery('.home-tabs a').removeClass('active-home-tab');
        jQuery('.activate-tab-2').addClass('active-home-tab');
        return false;
    });
    jQuery('.activate-tab-3').click(function(){
        jQuery('#tab-1, #tab-2').slideUp(250); jQuery('#tab-3').slideDown(250);
        jQuery('.home-tabs a').removeClass('active-home-tab');
        jQuery('.activate-tab-3').addClass('active-home-tab');
        return false;
    });

    //Store Cart Add / Substract Numbers
    jQuery(function () {
        jQuery('.add-qty').on('click',function(){
            var jQueryqty=jQuery(this).closest('div').find('.qty');
            var currentVal = parseInt(jQueryqty.val());
            if (!isNaN(currentVal)) {
                jQueryqty.val(currentVal + 1);
            }
        });
        jQuery('.substract-qty').on('click',function(){
            var jQueryqty=jQuery(this).closest('div').find('.qty');
            var currentVal = parseInt(jQueryqty.val());
            if (!isNaN(currentVal) && currentVal > 0) {
                jQueryqty.val(currentVal - 1);
            }
        });
    });

    jQuery('.remove-cart-item').click(function(){
        jQuery(this).parent().parent().slideUp(250);
    });

    //Tutorial Click
    if (typeof window.sessionStorage != undefined) {
        if (!sessionStorage.getItem('enabled_cookie1')) {
            jQuery('.tutorial').show();
            sessionStorage.setItem('enabled_cookie1', true);
            sessionStorage.setItem('storedWhen', (new Date()).getTime());
        }
    }

    jQuery('.tutorial').click(function(){
       jQuery(this).fadeOut(500);
    });

});
