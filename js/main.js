
$(document).ready(function(){

 $(window).scroll(function(){
            //header sticky
        if ($(window).scrollTop() >= 70) {
            $('#sticklynavbar').addClass('is-sticky');
            $("#sticklynavbar").addClass("animated");
            $("#sticklynavbar").addClass("slideInDown");
            
           
        }
        else {
            $('#sticklynavbar').removeClass('is-sticky');
            $("#sticklynavbar").removeClass("animated");
            $("#sticklynavbar").removeClass("slideInDown");
          
        }



      });

  


$('.package-caro').owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:2500,
    autoplayHoverPause:false,
autoplayHoverPause:true,
    margin:20,
    nav:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.destinationslide').owlCarousel({
  loop:true,
  autoplay:true,
  margin:0,
  dots: false,
  autoplayHoverPause:false,
  smartSpeed:2500,
  nav:true,
     navText: ["<img src='images/arrow-left.svg'>","<img src='images/arrow-right.svg'>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:4
      }
  }
})

  



$(function(){
	$('.image-link').viewbox({
		setTitle: true,
		margin: 20,
		resizeDuration: 300,
		openDuration: 200,
		closeDuration: 200,
		closeButton: true,
		navButtons: true,
		closeOnSideClick: true,
		nextOnContentClick: true
	});
});
  


});




