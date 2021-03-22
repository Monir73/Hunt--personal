$(function(){
    //back to top
$('.back_to_top').click(function(){
$('html, body').animate({scrollTop:0},1000);

});
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if (scrolling > 300){
   $('.back_to_top').fadeIn(500);
   
  }
   else
   {
   $('.back_to_top').fadeOut(500);
   }
  //  nav bar scrolling bg
if(scrolling > 100){
   $('.navbar').addClass('bg');
}
  else{
    $('.navbar').removeClass('bg');
  }
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '.navbar'
})

 //animation scroll js
 var html_body = $('html, body');
 $('nav a').on('click', function () {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
             html_body.animate({
                 scrollTop: target.offset().top - 95
             }, 1500);
             return false;
         }
     }
 });
//  preloader
$(window).on('load', function(){
   $('.preloader').delay(500).fadeOut(500);

})
// light box
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})
// venu box
$('.venobox').venobox(); 

//counter 
$('.counter').counterUp({
  delay: 5,
  time: 2000
});

// banner slider
$('.banner_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  prevArrow: '.arrow_left',
  nextArrow: '.arrow_right',
  fade: true,
  speed: 1500,
});

// portfolio slider
$('.port_main').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
     breakpoint: 992,
      settings: {
        slidesToShow: 3,
      } 
    },
    {
     breakpoint: 768,
      settings: {
        slidesToShow: 3,
      } 
    },
    {
     breakpoint: 576,
      settings: {
        slidesToShow: 2,
      } 
    }
  ]
});
// market slider
$('.market_rotate').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
},
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
},
    {
        breakpoint: 768,
        settings: {
            vertical: false,
            horizontal: true,
            slidesToShow: 2,
            slidesToScroll: 1
        }
        },
    {
        breakpoint: 576,
        settings: {
            vertical: false,
            horizontal: true,
            slidesToShow: 2,
            slidesToScroll: 1
        
        }
},
    {
        breakpoint: 460,
        settings: {
            vertical: false,
            horizontal: true,
            slidesToShow: 1,
            slidesToScroll: 1
        
        }
},
]
});
// testimonial slider
$('.test_text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.test_slider',
  centerMode: true,
  centerPadding: false,
  responsive: [
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
},
      {
          breakpoint: 768,
          settings: {
             
              slidesToShow: 1,
              slidesToScroll: 1
          }
          },
      {
          breakpoint: 576,
          settings: {
              vertical: false,
              horizontal: true,
              slidesToShow: 1,
              slidesToScroll: 1
          
          }
},
]
});

$('.test_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.test_text',
  dots: false,
  arrows: true,
  prevArrow: '.arrow_up',
  nextArrow: '.arrow_down',
  vertical: true,
  verticalSwiping: true,
  centerPadding: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 3
          }
},
      {
          breakpoint: 576,
          settings: {
              vertical: false,
              slidesToShow: 3
          }
}
],
  
});
// service slider
$('.service_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1500,
  arrows: true,
  vertical:true,
  prevArrow: '.s_arrow_up',
  nextArrow: '.s_arrow_down',
  centerPadding: false,
  centerMode: true,
  responsive: [
    {
        breakpoint: 992,
        settings: {
            
            slidesToShow: 1
        }
},
    {
        breakpoint: 768,
        settings: {
            
            slidesToShow: 1
        }
},
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1
        }
},
  ]
});
// team slider
$('.team_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  arrows: false,
  responsive: [
    {
        breakpoint: 992,
        settings: {
            
            slidesToShow: 3
        }
},
    {
        breakpoint: 768,
        settings: {
            
            slidesToShow: 2
        }
},
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1
        }
},
  ]

});




});