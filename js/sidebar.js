$( ".sidebar-about" ).click(function() {
  $(".sidebar-about-sub").show();
  $( ".sidebar-about" ).toggleClass("slideUp");
  $( ".sidebar-spaces" ).toggleClass("slideDown");
  $( ".sidebar-initiatives" ).toggleClass("slideDown");
  $(".collapse-it").toggle();
  $(".collapse-it").toggleClass("about");
});

$( ".sidebar-spaces" ).click(function() {
  $(".sidebar-spaces-sub").show();
  $( ".sidebar-about" ).toggleClass("slideUp");
  $( ".sidebar-spaces" ).toggleClass("slideUp");
  $( ".sidebar-initiatives" ).toggleClass("slideDown");
  $(".collapse-it").toggle();
  $(".collapse-it").toggleClass("spaces");
});

$( ".sidebar-initiatives" ).click(function() {
  $(".sidebar-initiatives-sub").show();
  $( ".sidebar-about" ).toggleClass("slideUp");
  $( ".sidebar-spaces" ).toggleClass("slideUp");
  $( ".sidebar-initiatives" ).toggleClass("slideDown");
  $(".collapse-it").toggle();
  $(".collapse-it").toggleClass("initiatives");
});

$( ".collapse-it" ).click(function() {
  $(".collapse-it").toggle();
  $( ".sidebar-about" ).toggleClass("slideUp");
  if ($( ".sidebar-spaces" ).hasClass("slideUp")){
    $( ".sidebar-spaces" ).toggleClass("slideUp");
  } else {
    $( ".sidebar-spaces" ).toggleClass("slideDown");
  }
  $( ".sidebar-initiatives" ).toggleClass("slideDown", function() {
    $(".sidebar-about-sub").hide();
    $(".sidebar-spaces-sub").hide();
    $(".sidebar-initiatives-sub").hide();
  });
});
