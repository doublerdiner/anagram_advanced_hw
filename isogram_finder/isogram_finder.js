const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
    const splitWord = this.word.split('')
    const sortWord = splitWord.sort()
    const isogram = sortWord.every((letter, i) => {
        if(letter[i] !== letter[i+1]){
            return true
        };
    })
    return isogram;

}

module.exports = IsogramFinder;
