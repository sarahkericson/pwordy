Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

document.addEventListener('DOMContentLoaded', function () {
  var pword = words.randomElement() +
              words.randomElement() +
              words.randomElement() +
              words.randomElement()

  var pwordElem = document.getElementById("pword")
  pwordElem.innerText = pword
  document.getElementById("pword-length").innerText = pword.length + " characters"

  document.getElementById('button').addEventListener('click', function(e) {
    var range = document.createRange();  
    range.selectNode(pwordElem);
    window.getSelection().addRange(range);
    document.execCommand('copy');  
  });
})