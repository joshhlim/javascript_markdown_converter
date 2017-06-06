$(document).ready(function(){
  $("textarea").keyup(function(event) {
    var markdownInput = $(this).val();
    var transformed = transform(markdownInput);
    $("#preview").find("p").html(transformed);
  });
})
