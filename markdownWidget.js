function transform(input) {
    var symbol = input.match(/[*_]/g)
    var rawText = input.replace(/[*_]/g, "")
    if (symbol === null) {
      alert("you cant parse nuthin. ya done goofed!")
    }
    else {
      if (symbol.includes("*")){
        if (symbol.length < 4){
          var htmlTag = ["<ul><li>","</li></ul>"]
        }else {
          var htmlTag = ["<b>","</b>"]
        }
      }else if (symbol.includes("_")) {
        var htmlTag = ["<i>","</i>"]
      }
      var fullHtml = htmlTag[0] + rawText + htmlTag[1]
      return fullHtml
    }
}
