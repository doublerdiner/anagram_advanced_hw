const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  return answer = this.alphabet.every(letter => { 
    for (let char of this.phrase){
      if (char.toLowerCase() === letter){
        return true;
      }
    }
  })
}

module.exports = PangramFinder;
