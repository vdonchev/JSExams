function helpMinka(data) {
    function calculateAverage(sum, count) {
        return Math.round((sum / count) * 100) / 100;
    }

    let catalogue = new Map;
    for (let line of data) {
        let [name, type, number, score, lines] = line.split(/\s+&\s+/g).filter(t => t != '');
        let taskNumber = 'Task ' + number;
        if (!catalogue.has(taskNumber)) {
            catalogue.set(taskNumber, {tasks: [], average: 0, lines: 0, score: 0});
        }

        catalogue.get(taskNumber).tasks.push({name: name, type: type});
        catalogue.get(taskNumber).lines += Number(lines);
        catalogue.get(taskNumber).score += Number(score);
        catalogue.get(taskNumber).average = calculateAverage(
            catalogue.get(taskNumber).score,
            catalogue.get(taskNumber).tasks.length);
    }

    for (let key of catalogue.keys()) {
        delete catalogue.get(key).score;
    }

    function sortCatalogue(itemA, itemB, catalogue) {
        let itemAavg = catalogue.get(itemA).average;
        let itemBavg = catalogue.get(itemB).average;
        if (itemAavg === itemBavg) {
            let itemAlines = catalogue.get(itemA).lines;
            let itemBlines = catalogue.get(itemB).lines;

            return itemAlines - itemBlines;
        }

        return itemBavg - itemAavg;
    }

    let output = {};
    let sortedNumbers = [...catalogue.keys()].sort((a, b) => sortCatalogue(a, b, catalogue));
    for (let num of sortedNumbers) {
        output[num] = catalogue.get(num);
        output[num].tasks = catalogue.get(num).tasks.sort((a, b) => a.name.localeCompare(b.name));
    }

    console.log(JSON.stringify(output));
}

helpMinka(["Array Matcher & strings & 4 & 100 & 38", "Magic Wand & draw & 3 & 100 & 15", "Dream Item & loops & 2 & 88 & 80", "Knight Path & bits & 5 & 100 & 65", "Basket Battle & conditionals & 2 & 100 & 120", "Torrent Pirate & calculations & 1 & 100 & 20", "Encrypted Matrix & nested loops & 4 & 90 & 52", "Game of bits & bits & 5 &  100 & 18", "Fit box in box & conditionals & 1 & 100 & 95", "Disk & draw & 3 & 90 & 15", "Poker Straight & nested loops & 4 & 40 & 57", "Friend Bits & bits & 5 & 100 & 81"]);