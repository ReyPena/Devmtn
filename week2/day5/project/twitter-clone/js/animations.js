$(document).ready(function () {
  // this is the tweet features and stuff that give animation
  // step#1
  $("#tweet-controls").hide();

  // this is the step#2
  $(".tweet-compose").on('click', function () {
    $('#tweet-controls').show();
    $(this).css('height', '5em');
  });

  // this the step#3

  $('textarea').keydown(function(){
    var textLength = 140 - $(this).val().length;
    $('#char-count').text(textLength);

    // this is the step #4

    if (textLength <= 10){
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', '#999');
    };

    // this the step #4

    if(textLength < 0){
      $('#tweet-submit').attr('disabled',true);
    }else{
      $('#tweet-submit').attr('disabled',false);
    };
  });

  // this the step #5
  $('#tweet-submit').on('click', function() {
      var myTweet = $('.tweet-compose').val();
      var str = "";
      $('.tweet-compose').val(str);
      $('#tweet-controls').css('display','none');
      $('.tweet-compose').css('height', '2.5em');

      $('#char-count').text(140);
      var newTweet = $('.tweet:first').clone();
    newTweet.find('.fullname').html("bubu");
    newTweet.find('.username').html('@bbu');
    newTweet.find('.tweet-text').html(myTweet);
    newTweet.find('.avatar').prop('src', 'img/alagoon.jpg')
    $('#stream').prepend(newTweet);
  });

  // this is the step #6 in the second part
  $('.tweet-actions').hide();
  $('.tweet').hover(function(){
    $('.tweet-actions').show();
  }, function(){
    $('.tweet-actions').hide();
  });

  //this the step #7 in the second part
  $('.stats').hide();
  $('.tweet').on('click', function(){
    $('.stats').show().effect( "bounce", "slow");
  });


})
