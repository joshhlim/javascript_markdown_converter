$(document).ready(function(){

  // mdPreview = new Markdown;

  $("#input").on("keyup", function(event){
    input = $(this).val();
    $preview = $('#preview')
    $preview.html(markdown.toHTML(input));
  })

})
