function decodeString(input) {
    let [text, num, matrix] = [input.shift(), Number(input.shift()), input.map(l => l.split(/\s+/g).map(Number))];

    function findMagicNumInMatrix(matrix, num) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                for (let i = row; i < matrix.length; i++) {
                    let startCol = i == row ? col + 1 : 0;
                    for (let j = startCol; j < matrix[i].length; j++) {
                        if (matrix[row][col] + matrix[i][j] == num)
                            return row + col + i + j;
                    }
                }
            }
        }

        return NaN;
    }

    let magicNumber = findMagicNumInMatrix(matrix, num);
    let decodedText = text.split('').map((e, i) => i % 2 == 0 ? e.charCodeAt(0) + magicNumber : e.charCodeAt(0) - magicNumber);
    console.log(String.fromCharCode(...decodedText));
}

decodeString(["QqdvSpg", "400", "100 200 120", "120 300 310", "150 290 370"]);