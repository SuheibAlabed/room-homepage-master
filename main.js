$(".Card2_2").hide();

$(".NextBtnLeft").click(function () {
  if ($(".Card1_1").is(":visible")) {
    $(".Card2_2").show(200);
    $(".Card1_1").hide(200);
  } else {
    $(".Card1_1").show(200);
    $(".Card2_2").hide(200);
  }
});

$(".BackBtnRight").click(function () {
  if ($(".Card1_1").is(":visible")) {
    $(".Card1_1").hide(200);
    $(".Card2_2").show(200);
  } else {
    $(".Card1_1").show(200);
    $(".Card2_2").hide(200);
  }
});
