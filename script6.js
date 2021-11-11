$( document ).ready(function() {
    $('.accordion-header').click(function(){
        // self clicking close
        if($(this).next(".accordion-body").hasClass('active')){
            $(this).next(".accordion-body").removeClass('active').slideUp();
            $(this).children("span").removeClass("fa-minus").addClass("fa-plus");
        }else{
            $(this).next(".accordion-body").addClass('active').slideDown();
            $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
        }
    });
});

function openCelebrity(evt, celebrityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(celebrityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

$('#element div').hide(); 
$('#element div:first').show(); 
$('#element ul li:first').addClass('active');


$('#element ul li a').click(function(){
    var currentTab = $(this).attr('href'); 
    var check= $(currentTab).is(':visible');  
    $('#element div').hide(); 
    $('#element ul li').removeClass('active'); 
    $(this).parent().addClass('active');  
    if(check) {
        $(currentTab).hide();
    } else {
        $(currentTab).show();
    }
});