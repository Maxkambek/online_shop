var mod_pagespeed_5V_M2itjWE = "(function ($) {\r\n    // USE STRICT\r\n    \"use strict\";\r\n\r\n        $(document).ready(function () {\r\n\r\n            var selector_map = $('#google_map');\r\n            var img_pin = selector_map.attr('data-pin');\r\n            var data_map_x = selector_map.attr('data-map-x');\r\n            var data_map_y = selector_map.attr('data-map-y');\r\n            var scrollwhell = selector_map.attr('data-scrollwhell');\r\n            var draggable = selector_map.attr('data-draggable');\r\n            var map_zoom = selector_map.attr('data-zoom');\r\n\r\n            if (img_pin == null) {\r\n                img_pin = 'images/icons/location.png';\r\n            }\r\n            if (data_map_x == null || data_map_y == null) {\r\n                data_map_x = 40.007749;\r\n                data_map_y = -93.266572;\r\n            }\r\n            if (scrollwhell == null) {\r\n                scrollwhell = 0;\r\n            }\r\n\r\n            if (draggable == null) {\r\n                draggable = 0;\r\n            }\r\n\r\n            if (map_zoom == null) {\r\n                map_zoom = 5;\r\n            }\r\n\r\n            var style = [\r\n                {\r\n                    \"featureType\": \"water\",\r\n                    \"elementType\": \"geometry\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"color\": \"#e9e9e9\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 17\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"featureType\": \"landscape\",\r\n                    \"elementType\": \"geometry\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"color\": \"#f5f5f5\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 20\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"featureType\": \"road.highway\",\r\n                    \"elementType\": \"geometry.fill\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"color\": \"#ffffff\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 17\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"featureType\": \"road.highway\",\r\n                    \"elementType\": \"geometry.stroke\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"color\": \"#ffffff\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 29\r\n                    },\r\n                    {\r\n                        \"weight\": 0.2\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"featureType\": \"road.arterial\",\r\n                    \"elementType\": \"geometry\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"color\": \"#ffffff\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 18\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"featureType\": \"road.local\",\r\n                    \"elementType\": \"geometry\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"color\": \"#ffffff\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 16\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"featureType\": \"poi\",\r\n                    \"elementType\": \"geometry\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"color\": \"#f5f5f5\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 21\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"featureType\": \"poi.park\",\r\n                    \"elementType\": \"geometry\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"color\": \"#dedede\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 21\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"elementType\": \"labels.text.stroke\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"visibility\": \"on\"\r\n                    },\r\n                    {\r\n                        \"color\": \"#ffffff\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 16\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"elementType\": \"labels.text.fill\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"saturation\": 36\r\n                    },\r\n                    {\r\n                        \"color\": \"#333333\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 40\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"elementType\": \"labels.icon\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"visibility\": \"off\"\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"featureType\": \"transit\",\r\n                    \"elementType\": \"geometry\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"color\": \"#f2f2f2\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 19\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"featureType\": \"administrative\",\r\n                    \"elementType\": \"geometry.fill\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"color\": \"#fefefe\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 20\r\n                    }\r\n                    ]\r\n                },\r\n                {\r\n                    \"featureType\": \"administrative\",\r\n                    \"elementType\": \"geometry.stroke\",\r\n                    \"stylers\": [\r\n                    {\r\n                        \"color\": \"#fefefe\"\r\n                    },\r\n                    {\r\n                        \"lightness\": 17\r\n                    },\r\n                    {\r\n                        \"weight\": 1.2\r\n                    }\r\n                    ]\r\n                }\r\n            ];\r\n\r\n            var latitude = data_map_x,\r\n                longitude = data_map_y;\r\n\r\n            var locations = [\r\n                ['<div class=\"infobox\"><h4>Hello</h4><p>Now that you visited our website, how' +\r\n                ' <br>about checking out our office too?</p></div>'\r\n                    , latitude, longitude, 2]\r\n            ];\r\n\r\n            if (selector_map !== undefined) {\r\n                var map = new google.maps.Map(document.getElementById('google_map'), {\r\n                    zoom: Number(map_zoom),\r\n                    zoomControl: false,  \r\n                    disableDoubleClickZoom: true,\r\n                    scrollwheel: scrollwhell,\r\n                    navigationControl: true,\r\n                    mapTypeControl: false,\r\n                    scaleControl: false,\r\n                    draggable: draggable,\r\n                    styles: style,\r\n                    center: new google.maps.LatLng(latitude, longitude),\r\n                    mapTypeId: google.maps.MapTypeId.ROADMAP\r\n                });\r\n            }\r\n\r\n            var infowindow = new google.maps.InfoWindow();\r\n\r\n            var marker, i;\r\n\r\n            for (i = 0; i < locations.length; i++) {\r\n\r\n                marker = new google.maps.Marker({\r\n                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),\r\n                    map: map,\r\n                    icon: img_pin\r\n                });\r\n\r\n                google.maps.event.addListener(marker, 'click', (function(marker, i) {\r\n                    return function() {\r\n                        infowindow.setContent(locations[i][0]);\r\n                        infowindow.open(map, marker);\r\n                    }\r\n                })(marker, i));\r\n            }\r\n\r\n        });\r\n\r\n})(jQuery);";
var mod_pagespeed_AesNh_NOWe = "\r\n(function ($) {\r\n    \"use strict\";\r\n\r\n    /*[ Load page ]\r\n    ===========================================================*/\r\n    $(\".animsition\").animsition({\r\n        inClass: 'fade-in',\r\n        outClass: 'fade-out',\r\n        inDuration: 1500,\r\n        outDuration: 800,\r\n        linkElement: '.animsition-link',\r\n        loading: true,\r\n        loadingParentElement: 'html',\r\n        loadingClass: 'animsition-loading-1',\r\n        loadingInner: '<div class=\"loader05\"></div>',\r\n        timeout: false,\r\n        timeoutCountdown: 5000,\r\n        onLoadEvent: true,\r\n        browser: [ 'animation-duration', '-webkit-animation-duration'],\r\n        overlay : false,\r\n        overlayClass : 'animsition-overlay-slide',\r\n        overlayParentElement : 'html',\r\n        transition: function(url){ window.location.href = url; }\r\n    });\r\n    \r\n    /*[ Back to top ]\r\n    ===========================================================*/\r\n    var windowH = $(window).height()/2;\r\n\r\n    $(window).on('scroll',function(){\r\n        if ($(this).scrollTop() > windowH) {\r\n            $(\"#myBtn\").css('display','flex');\r\n        } else {\r\n            $(\"#myBtn\").css('display','none');\r\n        }\r\n    });\r\n\r\n    $('#myBtn').on(\"click\", function(){\r\n        $('html, body').animate({scrollTop: 0}, 300);\r\n    });\r\n\r\n\r\n    /*==================================================================\r\n    [ Fixed Header ]*/\r\n    var headerDesktop = $('.container-menu-desktop');\r\n    var wrapMenu = $('.wrap-menu-desktop');\r\n\r\n    if($('.top-bar').length > 0) {\r\n        var posWrapHeader = $('.top-bar').height();\r\n    }\r\n    else {\r\n        var posWrapHeader = 0;\r\n    }\r\n    \r\n\r\n    if($(window).scrollTop() > posWrapHeader) {\r\n        $(headerDesktop).addClass('fix-menu-desktop');\r\n        $(wrapMenu).css('top',0); \r\n    }  \r\n    else {\r\n        $(headerDesktop).removeClass('fix-menu-desktop');\r\n        $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); \r\n    }\r\n\r\n    $(window).on('scroll',function(){\r\n        if($(this).scrollTop() > posWrapHeader) {\r\n            $(headerDesktop).addClass('fix-menu-desktop');\r\n            $(wrapMenu).css('top',0); \r\n        }  \r\n        else {\r\n            $(headerDesktop).removeClass('fix-menu-desktop');\r\n            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); \r\n        } \r\n    });\r\n\r\n\r\n    /*==================================================================\r\n    [ Menu mobile ]*/\r\n    $('.btn-show-menu-mobile').on('click', function(){\r\n        $(this).toggleClass('is-active');\r\n        $('.menu-mobile').slideToggle();\r\n    });\r\n\r\n    var arrowMainMenu = $('.arrow-main-menu-m');\r\n\r\n    for(var i=0; i<arrowMainMenu.length; i++){\r\n        $(arrowMainMenu[i]).on('click', function(){\r\n            $(this).parent().find('.sub-menu-m').slideToggle();\r\n            $(this).toggleClass('turn-arrow-main-menu-m');\r\n        })\r\n    }\r\n\r\n    $(window).resize(function(){\r\n        if($(window).width() >= 992){\r\n            if($('.menu-mobile').css('display') == 'block') {\r\n                $('.menu-mobile').css('display','none');\r\n                $('.btn-show-menu-mobile').toggleClass('is-active');\r\n            }\r\n\r\n            $('.sub-menu-m').each(function(){\r\n                if($(this).css('display') == 'block') { console.log('hello');\r\n                    $(this).css('display','none');\r\n                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');\r\n                }\r\n            });\r\n                \r\n        }\r\n    });\r\n\r\n\r\n    /*==================================================================\r\n    [ Show / hide modal search ]*/\r\n    $('.js-show-modal-search').on('click', function(){\r\n        $('.modal-search-header').addClass('show-modal-search');\r\n        $(this).css('opacity','0');\r\n    });\r\n\r\n    $('.js-hide-modal-search').on('click', function(){\r\n        $('.modal-search-header').removeClass('show-modal-search');\r\n        $('.js-show-modal-search').css('opacity','1');\r\n    });\r\n\r\n    $('.container-search-header').on('click', function(e){\r\n        e.stopPropagation();\r\n    });\r\n\r\n\r\n    /*==================================================================\r\n    [ Isotope ]*/\r\n    var $topeContainer = $('.isotope-grid');\r\n    var $filter = $('.filter-tope-group');\r\n\r\n    // filter items on button click\r\n    $filter.each(function () {\r\n        $filter.on('click', 'button', function () {\r\n            var filterValue = $(this).attr('data-filter');\r\n            $topeContainer.isotope({filter: filterValue});\r\n        });\r\n        \r\n    });\r\n\r\n    // init Isotope\r\n    $(window).on('load', function () {\r\n        var $grid = $topeContainer.each(function () {\r\n            $(this).isotope({\r\n                itemSelector: '.isotope-item',\r\n                layoutMode: 'fitRows',\r\n                percentPosition: true,\r\n                animationEngine : 'best-available',\r\n                masonry: {\r\n                    columnWidth: '.isotope-item'\r\n                }\r\n            });\r\n        });\r\n    });\r\n\r\n    var isotopeButton = $('.filter-tope-group button');\r\n\r\n    $(isotopeButton).each(function(){\r\n        $(this).on('click', function(){\r\n            for(var i=0; i<isotopeButton.length; i++) {\r\n                $(isotopeButton[i]).removeClass('how-active1');\r\n            }\r\n\r\n            $(this).addClass('how-active1');\r\n        });\r\n    });\r\n\r\n    /*==================================================================\r\n    [ Filter / Search product ]*/\r\n    $('.js-show-filter').on('click',function(){\r\n        $(this).toggleClass('show-filter');\r\n        $('.panel-filter').slideToggle(400);\r\n\r\n        if($('.js-show-search').hasClass('show-search')) {\r\n            $('.js-show-search').removeClass('show-search');\r\n            $('.panel-search').slideUp(400);\r\n        }    \r\n    });\r\n\r\n    $('.js-show-search').on('click',function(){\r\n        $(this).toggleClass('show-search');\r\n        $('.panel-search').slideToggle(400);\r\n\r\n        if($('.js-show-filter').hasClass('show-filter')) {\r\n            $('.js-show-filter').removeClass('show-filter');\r\n            $('.panel-filter').slideUp(400);\r\n        }    \r\n    });\r\n\r\n\r\n\r\n\r\n    /*==================================================================\r\n    [ Cart ]*/\r\n    $('.js-show-cart').on('click',function(){\r\n        $('.js-panel-cart').addClass('show-header-cart');\r\n    });\r\n\r\n    $('.js-hide-cart').on('click',function(){\r\n        $('.js-panel-cart').removeClass('show-header-cart');\r\n    });\r\n\r\n    /*==================================================================\r\n    [ Cart ]*/\r\n    $('.js-show-sidebar').on('click',function(){\r\n        $('.js-sidebar').addClass('show-sidebar');\r\n    });\r\n\r\n    $('.js-hide-sidebar').on('click',function(){\r\n        $('.js-sidebar').removeClass('show-sidebar');\r\n    });\r\n\r\n    /*==================================================================\r\n    [ +/- num product ]*/\r\n    $('.btn-num-product-down').on('click', function(){\r\n        var numProduct = Number($(this).next().val());\r\n        if(numProduct > 0) $(this).next().val(numProduct - 1);\r\n    });\r\n\r\n    $('.btn-num-product-up').on('click', function(){\r\n        var numProduct = Number($(this).prev().val());\r\n        $(this).prev().val(numProduct + 1);\r\n    });\r\n\r\n    /*==================================================================\r\n    [ Rating ]*/\r\n    $('.wrap-rating').each(function(){\r\n        var item = $(this).find('.item-rating');\r\n        var rated = -1;\r\n        var input = $(this).find('input');\r\n        $(input).val(0);\r\n\r\n        $(item).on('mouseenter', function(){\r\n            var index = item.index(this);\r\n            var i = 0;\r\n            for(i=0; i<=index; i++) {\r\n                $(item[i]).removeClass('zmdi-star-outline');\r\n                $(item[i]).addClass('zmdi-star');\r\n            }\r\n\r\n            for(var j=i; j<item.length; j++) {\r\n                $(item[j]).addClass('zmdi-star-outline');\r\n                $(item[j]).removeClass('zmdi-star');\r\n            }\r\n        });\r\n\r\n        $(item).on('click', function(){\r\n            var index = item.index(this);\r\n            rated = index;\r\n            $(input).val(index+1);\r\n        });\r\n\r\n        $(this).on('mouseleave', function(){\r\n            var i = 0;\r\n            for(i=0; i<=rated; i++) {\r\n                $(item[i]).removeClass('zmdi-star-outline');\r\n                $(item[i]).addClass('zmdi-star');\r\n            }\r\n\r\n            for(var j=i; j<item.length; j++) {\r\n                $(item[j]).addClass('zmdi-star-outline');\r\n                $(item[j]).removeClass('zmdi-star');\r\n            }\r\n        });\r\n    });\r\n    \r\n    /*==================================================================\r\n    [ Show modal1 ]*/\r\n    $('.js-show-modal1').on('click',function(e){\r\n        e.preventDefault();\r\n        $('.js-modal1').addClass('show-modal1');\r\n    });\r\n\r\n    $('.js-hide-modal1').on('click',function(){\r\n        $('.js-modal1').removeClass('show-modal1');\r\n    });\r\n\r\n\r\n\r\n})(jQuery);";
