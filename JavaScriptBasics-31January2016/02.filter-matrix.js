function filterMatrix(input) {
    let [num, matrix] = [input.pop().trim(), input.join(' ').split(' ')];
    input = input.map(l => l.split(' '));
    let matches = matrix.map(e => true);

    let counter = 1;
    for (let i = 0; i < matrix.length - 1; i++) {
        let current = matrix[i];
        for (let j = i + 1; j < matrix.length; j++) {
            let next = matrix[j];

            if (current == next) {
                counter++;
                if (counter == num) {
                    for (let k = i; k <= j; k++) {
                        matches[k] = false;
                    }

                    i = j;
                    counter = 1;
                    break;
                }
            } else {
                counter = 1;
                break;
            }
        }
    }

    let results = [];
    let index = 0;
    for (let row = 0; row < input.length; row++) {
        results.push([]);
        for (let col = 0; col < input[row].length; col++) {
            if (matches[index]) {
                results[row].push(matrix[index]);
            }

            index++;
        }
    }

    for (let i = 0; i < results.length; i++) {
        if (results[i].length == 0)
            console.log('(empty)');
        else
            console.log(results[i].join(' '));
    }
}

filterMatrix(["3 3 3 2 5 9 9 9 9 1 2","1 1 1 1 1 2 5 8 1 1 7","7 7 1 2 3 5 7 4 4 1 2","2"]);
filterMatrix(["1 2 3 3","3 5 7 8","3 2 2 1","3"]);
filterMatrix(["2 1 1 1","1 1 1","3 7 3 3 1","2"]);