$(document).ready(function(){

    // smooth scroll
    $(document).on("click", ".smooth", function(e) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          e.preventDefault();
          // Store hash
          var hash = this.hash;
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
          });
        } // End if
    });

    // navigation toggle
    $(document).on("click", ".toggle, nav", function(e){
        e.preventDefault();
        $("nav").toggleClass("active");
    });
});