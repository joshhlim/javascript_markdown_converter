$(document).ready(function(){
  $("textarea").keyup(function(event) {
    console.log(event);
    console.log($(this));
    var markdownInput = $(this).val();
    console.log(markdownInput);
    $("#preview").find("p").text(markdownInput);
  });
})
