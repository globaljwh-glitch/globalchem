//By Mdubey

/*jQuery(document).ready(function(){

  jQuery('#navbarNavDropdown').append('<ul id="cdl-search-nav" class="navbar-nav search-icon"></ul>');

  jQuery('#cdl-search-nav').append('<li class="nav-item"><form role="search" method="get" class="search-form" action=""><input type="search" placeholder="Search" autocomplete="off" class="form-control search-field search-input-cl" name="s"></form></li>&nbsp; &nbsp;<li class="nav-item"><i class="fa fa-search ser-icon-cl" aria-hidden="true"></i></li>');

  jQuery('#custom_html-7 .custom-html-widget').addClass('terms-links');



});*/







jQuery(function(){

    jQuery(".ser-icon-cl").click(function(){

        jQuery(".search-input-cl").toggleClass("search-show");

        jQuery(this).toggleClass('fa-search  fa-times-circle');

        });

        

    });



// jQuery(function(){

//     jQuery(".ser-icon-cl").click(function(){

//         jQuery(".search-input-cl").toggleClass("search-show");

//         jQuery(this).toggleClass('fa-search  fa-times-circle');

//         });

        

//     });



/*****Fixed Header*********/

jQuery(window).scroll(function () {



    var scroll = jQuery(window).scrollTop();



    if (scroll > 50) {



        jQuery(".tob-bar-fix").addClass('fixedmenu')



    } else {



        jQuery(".tob-bar-fix").removeClass('fixedmenu');



    }



});







//jQuery(function(){

//jQuery('.ser-icon-cl').click(function(){

//

//jQuery(this).toggleClass('fa-search fa-eye-slash');

//

//  });

//});





    popup = {

  init: function(){

    jQuery('figure').click(function(){

      popup.open(jQuery(this));

    });

    

    jQuery(document).on('click', '.popup img', function(){

      return false;

    }).on('click', '.popup', function(){

      popup.close();

    })

  },

  open: function(jQueryfigure) {

    jQuery('.gallery').addClass('pop');

    jQuerypopup = jQuery('<div class="popup" />').appendTo(jQuery('body'));

    jQueryfig = jQueryfigure.clone().appendTo(jQuery('.popup'));

    jQuerybg = jQuery('<div class="bg" />').appendTo(jQuery('.popup'));

    jQueryclose = jQuery('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo(jQueryfig);

    jQueryshadow = jQuery('<div class="shadow" />').appendTo(jQueryfig);

    src = jQuery('img', jQueryfig).attr('src');

    jQueryshadow.css({backgroundImage: 'url(' + src + ')'});

    jQuerybg.css({backgroundImage: 'url(' + src + ')'});

    setTimeout(function(){

      jQuery('.popup').addClass('pop');

    }, 10);

  },

  close: function(){

    jQuery('.gallery, .popup').removeClass('pop');

    setTimeout(function(){

      jQuery('.popup').remove()

    }, 100);

  }

}



popup.init()





jQuery(document).ready(function(){

   jQuery(".show-gall-cl").click(function(){

       jQuery(".sec-ga-down-cl").toggleClass("show-galley-cust");

   });

});





jQuery(document).ready(function(){

   jQuery(".name-f").click(function(){

       jQuery(this).hide();

   });

});





/*****BRANDS*****/



jQuery(document).ready(function(){



    jQuery(".filter-button").click(function(){

        var value = jQuery(this).attr('data-filter');

        

        if(value == "all")

        {

            //jQuery('.filter').removeClass('hidden');

            jQuery('.filter').show('1000');

        }

        else

        {

            jQuery(".filter").not('.'+value).hide('3000');

            jQuery('.filter').filter('.'+value).show('3000');

            

        }

    });

    

if (jQuery(".filter-button").removeClass("active")) {

jQuery(this).removeClass("active");

}

jQuery(this).addClass("active");



});

/*****CLOSE BRANDS*****/



jQuery(document).ready(function(){

    jQuery(".cus-fil").click(function(){

        jQuery('.tab-fil-menu').find('.filter-tab-active').removeClass('filter-tab-active');

        jQuery(this).addClass("filter-tab-active");

    });

})



/*

jQuery(document).ready(function(){

     jQuery(".cross-cut").click(function(){

         jQuery(".data-hide").hide(300)

         

     }) 

});*/







jQuery('#myTab a').on('click', function (e) {

  e.preventDefault()

  jQuery(this).tab('show')

})









jQuery(document).ready(function(){

    jQuery(".cus-cl-new").click(function(){

        jQuery(".sec-hide-sec-date").css("display","flex")

    })

})



jQuery(document).ready(function(){

   jQuery(".cro-sen-s").click(function(){

      jQuery(".sec-hide-sec-date").hide(300)

   });

});





/*****SUPPLIERS*****/

jQuery(document).ready(function(){

    jQuery("li.sup-tab").click(function(){

        jQuery(".sup-tab-main").find('.active').removeClass('active');

        jQuery(this).addClass("active");

    });

});





/*****client-slider*****/

jQuery('#logo-slider').owlCarousel({

    loop:true,

    margin:10,

    nav:true,

    autoplay:true,

    dots:true,

    navText:[],

    autoplaySpeed: 3000,

    navSpeed:2500,

    responsiveClass:true, 

    responsive:{

        0:{

            items:1,

            nav:true,

            loop:true

        },

        600:{

            items:1,

            nav:true,

            loop:true

        },

        1000:{

            items:1,

            nav:true,

            loop:true

        }

    }

});





//Our Team

jQuery('.team-details').click(function(){

  jQuery("#team-info").modal('show');

  jQuery(this).teamDetails();

});





        jQuery.fn.teamDetails = function() { 

         var memberImg = jQuery(this).find('.member-detail-image').attr('src');

         var memberName = jQuery(this).find('.team-member-name').text();

         var memberInfo = jQuery(this).find('.member-detail-info').text();

         var memberDesignation = jQuery(this).find('.team-member-designation').text();

        

         jQuery('.team-info-body').find('.mteam-member-name').text(memberName);

         jQuery('.team-info-body').find('.member-detail-info').text(memberInfo);

         jQuery('.team-info-body').find('.member-image').attr('src',memberImg);

         jQuery('.team-info-body').find('.member-designation').text(memberDesignation);

  

       }


jQuery('.toggle-sec-cl').on('click',function(){
  jQuery('#investor-modal').modal('show');
   jQuery(this).investorDetails();
});

       
      jQuery.fn.investorDetails = function(){
          var imgfile = jQuery(this).find('img').attr('src');
          var investorName = jQuery(this).find('.vik-investor-name').text();
          var investorDetails = jQuery(this).find('.vik-investor-full-details').html();
          jQuery('#investor-modal').find('.investor-m-image').attr('src',imgfile);
           jQuery('#investor-modal').find('.in-name-m').text(investorName);
           jQuery('#investor-modal').find('.in-dis-m').html(investorDetails);
          
          console.log(imgfile,investorName,investorDetails);
      }



        jQuery('#job-apply-now').on('click',function(){
          jQuery('#job-apply-form').modal('show');
         var shareFor = jQuery('.share-pare').find('#form-he-app').html();
         $('#job-apply-form').find('#form-heading').html(shareFor);
          console.log(shareFor);
          
        });




