$(document).ready(function(){
	var im, pf, from;
	$('.slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 950,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 470,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	
 	
	
	if($(window).width()>800){
	   new WOW().init();
	}
	$("nav li, .logo").click(function(){
		var target = $(this).attr('data-href');
        $('html, body').animate({scrollTop: $(target).offset().top-30}, 1300);
        return false;
	});

	 $(window).scroll(function() {  
	    if ($(this).scrollTop()>1) $('nav').addClass('scrolling');  
	         else $('nav').removeClass('scrolling');  
	}); 

	$('.fancybox-thumb').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});
	$('.view').magnificPopup({
	  mainClass: 'mfp-zoom-in',
	  callbacks: {
	    beforeClose: function() {
	        this.content.addClass('hinge');
	    }, 
	    close: function() {
	        this.content.removeClass('hinge'); 
	    }
	  },
	  midClick: true
	});
	$('.btn-popap').click(function(){
		from = $(this).attr('data-form');
	});
	$('.btn-popap').magnificPopup({
	  mainClass: 'mfp-zoom-in',
	  callbacks: {
	    beforeClose: function() {
	        this.content.addClass('hinge');
	    }, 
	    close: function() {
	        this.content.removeClass('hinge'); 
	    }
	  },
	  midClick: true
	});
	

	$('.burger, nav li').click(function(){
		$('nav ul').toggleClass('show');
	});

	
	function explode(){
		$.magnificPopup.close();
	}
	function funcS(){
		$.magnificPopup.open({
            items: {
                src: '#sf',
                type: 'inline'

            },          
          //add options here, 
                closeOnBgClick: false,
                closeOnContentClick:false

        }, 0);
		$('#sf .step1').hide();
		$('#sf .step2').fadeIn('slow');
		$('form')[0].reset();
		setTimeout(explode, 3000);
	}

	$('form').submit(function(event){
		im = '';
		pf = '';
		im = $(this).find('input[name=name]').val();
		pf = $(this).find('input[name=phone]').val();
		if($(this).find('button').attr('data-form')){
			from = $(this).find('button').attr('data-form');
		}
		$.ajax({
			url: "em.php",
			type: "POST",
			data: ({im:im, pf:pf, from:from}),
			dataType: "html",
			success: funcS
		});
		return false;
	});
	$("input[name=phone]").keydown(function(event) {
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||	(event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
				return;
			}
			else {
				if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault(); 
			}   
		}
		if($(this).val().length > 10){
			return false;
		}
	});






});


	