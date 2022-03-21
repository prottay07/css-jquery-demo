// Jquery Slick


$(document).ready(function(){
    $('.image-slick').slick({
        slidesToShow: 1,
        //accessibility:true,
        infinite:true,
       // pauseOnHover:true,
    //    dots:true,
    //     dotsClass:'slick-dots',
       // easing:'linear',
       autoplay:true,
       autoplaySpeed:3000,


    });
  })

  // Jquery Scroll Stop

  $(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop()>600){
            $('.top-btn').fadeIn();
        }else{
            $('.top-btn').fadeOut();
        }
    
    });   

    $('.top-btn').click(function(){
        $('html,body').animate({scrollTop:0},700)
    });
 

  });

//   Hide and show product

$(document).ready(function(){
    $('#hide').click(function(){
        $('.our_product').hide();
    });

    $('#show').click(function(){
        $('.our_product').show();
    })
});


    

