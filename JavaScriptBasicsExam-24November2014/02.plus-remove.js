function plusRemove(matrix) {
    matrix = matrix.map(r => r.split(''));

    let charsToRemove = [];
    for (let row = 0; row < matrix.length; row++) {
        charsToRemove[row] = [];
        for (let col = 0; col < matrix[row].length; col++) {
            charsToRemove[row][col] = false;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let curCh = matrix[row][col].toLowerCase();
            if (isValidCell(row + 1, col) && matrix[row + 1][col].toLowerCase() == curCh &&
                isValidCell(row + 2, col) && matrix[row + 2][col].toLowerCase() == curCh &&
                isValidCell(row + 1, col + 1) && matrix[row + 1][col + 1].toLowerCase() == curCh &&
                isValidCell(row + 1, col - 1) && matrix[row + 1][col - 1].toLowerCase() == curCh) {
                charsToRemove[row][col] = true;
                charsToRemove[row + 1][col] = true;
                charsToRemove[row + 2][col] = true;
                charsToRemove[row + 1][col + 1] = true;
                charsToRemove[row + 1][col - 1] = true;
            }
        }
    }

    for (let row = 0; row < charsToRemove.length; row++) {
        for (let col = 0; col < charsToRemove[row].length; col++) {
            if (charsToRemove[row][col] == true) {
                matrix[row][col] = undefined;
            }
        }
    }

    function isValidCell(row, col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }

    console.log(matrix.map(r => r.filter(i => i != undefined).join('')).join('\n'));
}

plusRemove(["@s@a@p@una", "p@@@@@@@@dna", "@6@t@*@*ego", "vdig*****ne6", "li??^*^*"]);
plusRemove(["ab**l5","bBb*555","absh*5","ttHHH","ttth"]);