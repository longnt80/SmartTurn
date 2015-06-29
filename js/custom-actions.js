$(document).ready(function() {

    var allPanels = $('ul.accordion li ul').hide();

    $('ul.accordion li a').click(function() {
      allPanels.slideUp();
      $(this).parent().find('ul').slideDown();
      return false;
    });

});
