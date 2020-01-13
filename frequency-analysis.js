const frequencyAnalysis = (letters) => {
    var occurences = {}
    for(let i=0; i<letters.length; i++) {
        occurences[letters[i]] = 0
    }
    for(let i=0; i<letters.length; i++) {
        occurences[letters[i]]++
    }
    return occurences;
}

console.log(frequencyAnalysis('asidjfasrnvcjape'))