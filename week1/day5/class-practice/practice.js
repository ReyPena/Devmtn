function longestWord(sen) {

  // code goes here
  var words = sen.split(" ");
  var longest = 0;
  for (var i = 0; words[1].length > longest; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
    return longest;
  }
}



console.log(longestWord('this is a sentence'));
