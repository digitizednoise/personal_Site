var modal = document.getElementById('myModal')




$(".full-image").click(function(){
  console.log('123Test');
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function(){
  $('#image-viewer').hide();
});