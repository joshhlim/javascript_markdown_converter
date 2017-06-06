$(document).ready(function(){
  $("textarea").keyup(function(event) {
    var markdownInput = $(this).val();
    var html_content = markdown.toHTML(markdownInput);
    $("#preview").find("p").html(html_content);
  });
})
