function aggregateStats(data) {
    let stats = new Map;
    let sortType = data.pop().trim();

    for (let line of data) {
        let [person, item, isFood, isDrink, isFragile, weight, transport] = line.split(/\.*\*\.*/g).map(e => e.trim());
        if (!stats.has(person)) {
            stats.set(person, []);
        }

        isDrink = isDrink.toLowerCase() === 'true';
        isFood = isFood.toLowerCase() === 'true';

        let itemType;
        if (!isDrink && !isFood) {
            itemType = 'other';
        } else if (isDrink) {
            itemType = 'drink';
        } else {
            itemType = 'food';
        }

        stats.get(person).push({
            itemName: item,
            kg: Number(weight),
            fragile: isFragile.toLowerCase() === 'true',
            type: itemType,
            transferredWith: transport
        })
    }

    let output = {};
    [...stats.keys()].forEach(function (p) {
        output[p] = {};
        let items = stats.get(p);
        if (sortType == 'luggage name') {
            items = stats.get(p).sort((a, b) => a.itemName.localeCompare(b.itemName))
        } 
        
        if (sortType == 'weight') {
            items = stats.get(p).sort((a, b) => a.kg - b.kg);
        }
        
        for (let item of items) {
            let itemName = item.itemName;
            delete item.itemName;
            output[p][itemName] = item;
        }
    });

    console.log(JSON.stringify(output));
}

aggregateStats(["Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack", "Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack", "Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack", "Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV", "Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV", "Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV",
    "luggage name"]);