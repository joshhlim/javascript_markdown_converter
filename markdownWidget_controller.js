$(document).ready(function(){
  $(".md_syntax").on("keyup", function(){
  var text = $(this).val()

  var html = markdown.toHTML(text)
  $(".markdown-place2").html(html)

  })
})

