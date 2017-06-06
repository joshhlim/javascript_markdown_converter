$(document).ready(function(){
  $(".md_syntax").on("keyup", function(){
  var text = $(this).val()

  var html = transform(text)
  $(".markdown-place2").html(html)

  })
})

