$(".slidered").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.sliderio'
});
$(".sliderio").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slidered',
  focusOnSelect: true,
  centerMode: true
});