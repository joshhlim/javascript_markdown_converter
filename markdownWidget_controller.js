$(document).ready(function(){
  $(".md_syntax").on("keyup", function(){
  var text = $(this).val()

  $(".html_output").text(text)

  })
})

