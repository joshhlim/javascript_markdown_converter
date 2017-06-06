function transform(input) {
  newInputString = ""
  input.split(" ").forEach(function(word) {
    if (boldAsteriskCheck(word)) {
      var matchGroup = boldAsteriskCheck(word);
      newInputString += (" <strong>" + matchGroup[1] + "</strong> ")
    }
    else if (boldUnderscoreCheck(word)) {
      var matchGroup = boldUnderscoreCheck(word);
      newInputString += (" <strong>" + matchGroup[1] + "</strong> ")
    }

    else if (italicsCheck(word)) {
      var matchGroup = italicsCheck(word);
      newInputString += (" <i>" + matchGroup[1] + "</i> ")
    }

    else {
      newInputString += (" " + word + " ")
    }
  })

  return newInputString;
}

function boldAsteriskCheck(input) {
  var boldAsterisk = /\*\*(.*?)\*\*/
  if (boldAsterisk.test(input)) {
    return input.match(boldAsterisk)
  }
  return false;
}

function boldUnderscoreCheck(input) {
  var boldUnderscore = /\_(.*?)\_/
  if (boldUnderscore.test(input)) {
    return input.match(boldUnderscore)
  }
  return false;
}

function italicsCheck(input) {
  var italics = /\*(.*?)\*/
  if (italics.test(input)) {
    return input.match(italics)
  }
  return false;
}


