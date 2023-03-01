const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  const splitPhrase = this.phrase.split('');
  return answer = this.alphabet.every(letter => {    
    for (let char of this.phrase){
      if (char.toLowerCase() === letter){
        return true;
      }
    }
  })
}

module.exports = PangramFinder;
