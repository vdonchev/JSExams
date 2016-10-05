function captainObvious(input) {
    let [firstText, secondText] = input;

    Array.prototype.distinct = function () {
        let s = new Set;
        for (let e of this) {
            s.add(e);
        }

        return [...s];
    };

    function arrayContainsElementNTimes(array, elelment, times = 3) {
        let count = 0;
        for (let word of array) {
            if (word === elelment)
                count++;
        }

        return count >= times;
    }

    function textContainsWords(text, words, minWords = 2) {
        let count = 0;
        for (let word of words) {
            let reg = new RegExp('\\b' + word + '\\b', 'gi');
            if (reg.test(text))
                count++;
        }

        return count >= minWords;
    }

    let searchedWords = firstText.toLowerCase().split(/[^a-zA-Z]+/);
    let words = searchedWords.filter(w => arrayContainsElementNTimes(searchedWords, w)).distinct();

    if (words.length == 0) {
        console.log('No words');
        return;
    }

    let sentences = secondText.match(/\b.*?[.?!]/g);
    let res= sentences.filter(s => textContainsWords(s, words));
    if (res.length == 0) {
        console.log('No sentences');
        return;
    }
    
    console.log(res.join('\n'));
}