$(document).ready(function() {
  MarkdownWidget("#source-id", "#preview-div")
});

function transform(input) {
  var lines = input.split("\n")
  for(var i = 0; i < lines.length; i++){
    if(lines[i].match(/^(\s*)([_]|\*{2})/)){
      lines[i] = "<p>" + "<em>" + lines[i].replace(/^(\s*)[_]|\*{2}/g, '$1') + "</em>" + "</p>"
    }
    else if(lines[i].match(/^(\s*)\*{1}/)){
      lines[i] = "<p>" + "<strong>" + lines[i].replace(/^(\s*)\*{1}/g, '$1') + "</strong>" + "</p>"
    }
    else{
      lines[i] = "<p>" + lines[i] + "</p>"
    }
  }
  console.log("lines are " + lines.join('\n'))
  return lines.join('\n');
}

function MarkdownWidget(inputID, outputID){
  $(inputID).on('keyup', function(event){
    input = $(inputID).val()
    $(outputID).empty()
    $(outputID).append(transform(input))
  })
}
