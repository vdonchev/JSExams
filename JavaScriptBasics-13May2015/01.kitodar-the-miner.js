function collectOre(input) {
    let regEx = /^mine\s+(?:[^\s]+\s+)?-\s*(gold|silver|diamonds)\s*:\s*(\d+)$/;
    let resources = {};
    resources['silver'] = 0;
    resources['gold'] = 0;
    resources['diamonds'] = 0;

    for (let resource of input) {
        resource = resource.trim();
        let match  = resource.match(regEx);
        if (match) {
            resources[match[1]] += Number(match[2]);
        }
    }

    for (let r in resources) {
        console.log(`*${r[0].toUpperCase() + r.substring(1, r.length)}: ${resources[r]}`);
    }
}

collectOre(["mine bobovdol - gold: 10","mine - diamonds: 5","mine colas - wood: 10","mine myMine - silver:  14","mine silver:14 - silver: 14"]);
collectOre(["mine bobovDol - gold: 10","mine medenRudnik - silver: 22","mine chernoMore - shrimps : 24","gold: 50"]);