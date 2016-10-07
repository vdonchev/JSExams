function goshkoTheRabbit(data) {
    let separator = /,\s/;
    let directions = data.shift().split(separator);
    let matrix = data.map(r => r.split(separator));

    let rabbitRow = 0;
    let rabbitCol = 0;

    let visitedCells = [];
    let stats = {'&': 0, '*': 0, '#': 0, '!': 0, 'wall hits': 0};

    for (let dir of directions) {
        switch (dir) {
            case 'up':
                if (canMove(rabbitRow - 1, rabbitCol, matrix)) {
                    rabbitRow--;
                    makeMove(rabbitRow, rabbitCol);
                } else
                    stats['wall hits']++;
                break;
            case 'right':
                if (canMove(rabbitRow, rabbitCol + 1, matrix)) {
                    rabbitCol++;
                    makeMove(rabbitRow, rabbitCol);
                } else
                    stats['wall hits']++;
                break;
            case 'down':
                if (canMove(rabbitRow + 1, rabbitCol, matrix)) {
                    rabbitRow++;
                    makeMove(rabbitRow, rabbitCol);
                } else
                    stats['wall hits']++;
                break;
            default: // left
                if (canMove(rabbitRow, rabbitCol - 1, matrix)) {
                    rabbitCol--;
                    makeMove(rabbitRow, rabbitCol);
                } else
                    stats['wall hits']++;
                break;
        }
    }

    console.log(JSON.stringify(stats));
    console.log(visitedCells.length > 0 ? visitedCells.join('|') : 'no');

    function canMove(row, col, matrix) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
    }

    function makeMove(row, col) {
        if (matrix[row][col] != undefined) {
            let veggieRegex = /(?:{)(&|\*|#|!)(?:})/g;
            let match;
            while (match = veggieRegex.exec(matrix[row][col])) {
                stats[match[1]]++;
            }

            let cellValue = matrix[row][col].replace(veggieRegex, '@');
            visitedCells.push(cellValue);
            matrix[row][col] = undefined;
        }
    }
}

goshkoTheRabbit(["right, up, up, down", "asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj", "tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip", "poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne"]);
// goshkoTheRabbit(["up, right, left, down", "as{!}xnk"]);