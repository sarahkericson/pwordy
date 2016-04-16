Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
};

document.addEventListener("DOMContentLoaded", function () {
  var pwordElem = document.getElementById("pword");
  var pwordDataElem = document.getElementById("pword-data");
  var buttonElem = document.getElementById("button");

  pwordElem.addEventListener('input', function(e) {
    // Update pword data text
    pwordDataElem.innerText = pwordElem.value.length + " characters";

    // Button to uncopied state
    buttonElem.classList.remove("copied");
  });

  buttonElem.addEventListener('click', function(e) {
    // Copy pword to clipboard
    // http://stackoverflow.com/questions/13899299/write-text-to-clipboard
    pwordElem.select();
    document.execCommand("Copy", false, null);
    window.getSelection().removeAllRanges();

    // Button to copied state
    buttonElem.classList.add("copied");
  });

  var pword = words.randomElement() +
              words.randomElement() +
              words.randomElement() +
              words.randomElement()

  pwordElem.value = pword
  pwordElem.dispatchEvent(new Event('input'));
});