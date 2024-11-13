(function(){

    'use strict';

    AOS.init({
        duration: 700,
        easing: 'ease',
        once: true
    });

    new CircleType(document.getElementById('circle-type'));

    var circleText = document.getElementById('circle-type')
    window.addEventListener('scroll', function(){
        circleText.style.transform = "rotate("+window.pageYOffset+"deg)";
    })

    var tinyslider = function() {
        
        var el =document.querySelectorAll('.testimonial-slider');

        if ( el.length > 0 ) {
            var slider = tns({
                'container': '.testimonial-slider',
                'items': 1,
                'center': true,
                'loop': false,
                'mouseDrag': true,
                'slideBy': 1,
                'axis': 'horizontal',
                'swipeAngle': true,
                'speed': 700,
                'nav': true,
                'controls': false,
                'responsive': {
                    '900': {
                        'edgePadding': 30,
                        'items': 2,
                    }
                }
            });
        }

    }
    tinyslider();

})();