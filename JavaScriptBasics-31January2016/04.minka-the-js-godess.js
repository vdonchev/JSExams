function helpMinka(data) {
    function calculateAverage(sum, count) {
        return Math.round((sum / count) * 100) / 100;
    }

    let catalogue = {};
    for (let line of data) {
        let [name, type, number, score, lines] = line.split(/\s+&\s+/g).filter(t => t != '');
        let taskNumber = 'Task ' + number;
        if (!catalogue.hasOwnProperty(taskNumber)) {
            catalogue[taskNumber] = {tasks: [], average: 0, lines: 0, score: 0};
        }

        catalogue[taskNumber].tasks.push({name: name, type: type});
        catalogue[taskNumber].lines += Number(lines);
        catalogue[taskNumber].score += Number(score);
        catalogue[taskNumber].average = calculateAverage(
            catalogue[taskNumber].score,
            catalogue[taskNumber].tasks.length);
    }

    for (let key of Object.keys(catalogue)) {
        delete catalogue[key].score;
    }

    function sortCatalogue(itemA, itemB, catalogue) {
        let itemAavg = catalogue[itemA].average;
        let itemBavg = catalogue[itemB].average;
        if (itemAavg === itemBavg) {
            let itemAlines = catalogue[itemA].lines;
            let itemBlines = catalogue[itemB].lines;

            return itemAlines - itemBlines;
        }

        return itemBavg - itemAavg;
    }

    let sortedNumbers = [...Object.keys(catalogue)].sort((a, b) => sortCatalogue(a, b, catalogue));
    let res = {};
    for (let num of sortedNumbers) {
        catalogue[num].tasks = catalogue[num].tasks.sort((a, b) => a.name.localeCompare(b.name));
        res[num] = catalogue[num];
    }

    console.log(JSON.stringify(res));
}

helpMinka(["Array Matcher & strings & 4 & 100 & 38", "Magic Wand & draw & 3 & 100 & 15", "Dream Item & loops & 2 & 88 & 80", "Knight Path & bits & 5 & 100 & 65", "Basket Battle & conditionals & 2 & 100 & 120", "Torrent Pirate & calculations & 1 & 100 & 20", "Encrypted Matrix & nested loops & 4 & 90 & 52", "Game of bits & bits & 5 &  100 & 18", "Fit box in box & conditionals & 1 & 100 & 95", "Disk & draw & 3 & 90 & 15", "Poker Straight & nested loops & 4 & 40 & 57", "Friend Bits & bits & 5 & 100 & 81"]);