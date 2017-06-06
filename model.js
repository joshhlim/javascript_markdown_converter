var MarkdownPreview = function(){



}

MarkdownPreview.prototype.transform = function(input){
  output = input.replace(/([*]{2}\b)/g,'<strong>').replace(/(\b[*]{2})/g,'</strong>').replace(/\n+/g,'<br>').replace(/\b[_]{2}/g,'<strong>').replace(/[_]{2}\b/g,'</strong>').replace(/[*]{1}\b/g, '<em>').replace(/\b[*]{1}/g, '</em>')
  return output

}



