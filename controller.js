$(document).ready(function(){

  mdPreview = new MarkdownPreview;

  $("#input").on("keyup", function(event){
    input = $(this).val();
    $preview = $('#preview')
    $preview.html(mdPreview.transform(input));
  })

})
