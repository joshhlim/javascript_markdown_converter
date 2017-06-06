$(document).ready(function() {
  MarkdownWidget("#source-id", "#preview-div")
});

function transform(input) {
  var lines = input.split("\n")
  for(var i = 0; i < lines.length; i++){
    lines[i] = addHTML(lines[i])
  }
  return lines.join('\n');
}

function MarkdownWidget(inputID, outputID){
  $(inputID).on('keyup', function(event){
    input = $(inputID).val()
    $(outputID).empty()
    $(outputID).append(transform(input))
  })
}

function addHTML(line){
  if(line.match(/^(\s*)([_]|\*{2})/)){
    return "<p>" + "<em>" + line.replace(/^(\s*)[_]|\*{2}/g, '$1') + "</em>" + "</p>"
  }
  else if(line.match(/^(\s*)\*{1}/)){
    return "<p>" + "<strong>" + line.replace(/^(\s*)\*{1}/g, '$1') + "</strong>" + "</p>"
  }
  else{
    return "<p>" + line + "</p>"
  }
}
