function parachuteLanding(data) {
    let row, col;
    for (let r = 0; r < data.length; r++) {
        if (data[r].indexOf('o') >= 0) {
            row = r;
            col = data[r].indexOf('o');
            break;
        }
    }

    for (let r = row + 1; r < data.length; r++) {
        col += calculateWind(data[r]);
        row++;

        if (data[row][col] == '_') {
            console.log('Landed on the ground like a boss!');
            console.log(row + ' ' + col);
            break;
        } else if (data[row][col] == '/' || data[row][col] == '\\' || data[row][col] == '|') {
            console.log('Got smacked on the rock like a dog!');
            console.log(row + ' ' + col);
            break;
        } else if (data[row][col] == '~') {
            console.log('Drowned in the water like a cat!');
            console.log(row + ' ' + col);
            break;
        }
    }

    function calculateWind(line) {
        let res = 0;
        for (let i = 0; i < line.length; i++) {
            if (line[i] == '>') {
                res++
            } else if (line[i] == '<') {
                res--;
            }
        }

        return res;
    }
}

// parachuteLanding(["--o----------------------", ">------------------------", ">------------------------", ">-----------------/\\-----", "-----------------/--\\----", ">---------/\\----/----\\---", "---------/--\\--/------\\--", "<-------/----\\/--------\\-", "\\------/----------------\\", "-\\____/------------------"]);
parachuteLanding(["-------------o-<<--------","-------->>>>>------------","---------------->-<---<--","------<<<<<-------/\\--<--","--------------<--/-<\\----",">>--------/\\----/<-<-\\---","---------/<-\\--/------\\--","<-------/----\\/--------\\-","\\------/--------------<-\\","-\\___~/------<-----------"]);