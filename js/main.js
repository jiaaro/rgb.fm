function randomInt(n) {
  return Math.floor(Math.random() * n);
}

var flicker_speed = 50, // in ms
    $squares = $(".flickering-logo td"),
    num_squares = $squares.length;
    
setInterval(function() {
  var $random_square = $squares.eq(randomInt(num_squares));
  
  $random_square.css("opacity", 0.7);
  setTimeout(function() { 
    $random_square.css("opacity", 1.0);
  }, flicker_speed * 3.5);
  
}, flicker_speed);
