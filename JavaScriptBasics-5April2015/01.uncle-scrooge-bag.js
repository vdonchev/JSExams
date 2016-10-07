function uncleScroogeBagSolution(data) {
    let totalCoins = 0;
    for (let line of data) {
        let tokens = line.trim().toLowerCase().split(/\s+/).filter(e => e != '');
        let type = tokens[0];
        let quantity = Number(tokens[1]);
        if (type == 'coin' && !isNaN(quantity) && quantity >= 0 && Math.round(quantity) == quantity) {
            totalCoins += Number(quantity);
        }
    }

    let gold = Math.floor(totalCoins / 100);
    totalCoins %= 100;
    let silver = Math.floor(totalCoins / 10);
    totalCoins %= 10;
    let bronze = totalCoins;
    console.log(`gold : ${gold}`);
    console.log(`silver : ${silver}`);
    console.log(`bronze : ${bronze}`);
}

uncleScroogeBagSolution(["coin 1 ","coin two","coin 5","coin 10.50","coin 20","coin 50","coin hundred","cigars 1"]);