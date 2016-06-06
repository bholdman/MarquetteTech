$( ".sidebar-about" ).click(function() {
  $(".sidebar-about-sub").fadeToggle();
  $( ".sidebar-about" ).toggleClass("slideUp");
  $( ".sidebar-spaces" ).toggleClass("slideDown");
  $( ".sidebar-initiatives" ).toggleClass("slideDown");
  $(".collapse-it").toggle();
  $(".collapse-it").toggleClass("about");
  // window.location.href = "./about.html";
});

$( ".sidebar-spaces" ).click(function() {
  $(".sidebar-spaces-sub").fadeToggle();
  $( ".sidebar-about" ).toggleClass("slideUp");
  $( ".sidebar-spaces" ).toggleClass("slideUp");
  $( ".sidebar-initiatives" ).toggleClass("slideDown");
  $(".collapse-it").toggle();
  $(".collapse-it").toggleClass("spaces");
});

$( ".sidebar-initiatives" ).click(function() {
  $(".sidebar-initiatives-sub").fadeToggle();
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
  $( ".sidebar-initiatives" ).toggleClass("slideDown");
  $(".sidebar-about-sub").fadeToggle().hide();
  $(".sidebar-spaces-sub").fadeToggle().hide();
  $(".sidebar-initiatives-sub").fadeToggle().hide();
});
