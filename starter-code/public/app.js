console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');
  $('#guess-number-form').on('submit', function(){
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: '/pickanumber',
      data: $('#guess-number-form').serialize(),
      success: showResponse
    });
  });

  $('#target-number-form').on('submit', function(){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/pickanumber',
      data: $('#target-number-form').serialize()
    });
  } );
});

function showResponse(s){
  console.log(s);
  $('#result1').text(s);
}
