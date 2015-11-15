$(function(){
  var player = '<div id="player"></div>';
  $("#map").append(player);

  $(document).keydown(function(e){
    var position = $("#player").position();
    switch (e.keyCode) {
      case 37: //left
        $("#player").css('left', position.left - 15 + 'px');
      break;
      case 38: //up
        $("#player").css('top', position.top - 15 + 'px');
      break;
      case 39: //right
        $("#player").css('left', position.left + 15 + 'px');
      break;
      case 40: //down
        $("#player").css('top', position.top + 15 + 'px');
      break;
      // case 32: //space bar #fire
      // $("player").css
    }
  })
});
