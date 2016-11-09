$(document).ready(function(){
  $('#art-gallery').on('submit', function(){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/artworks',
      data: $('#art-gallery').serialize(),
      dataType: 'json',
      success: showArtworks
    });
  });
});

function showArtworks(json){
  console.log(json);
}
