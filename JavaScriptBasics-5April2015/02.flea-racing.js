function fleaRace(data) {
    let [maxJumps, distance] = data.splice(0, 2).map(Number);
    let racers = [];
    for (let racer of data) {
        racer = racer.split(/\s*,\s*/);
        let [name, jumpLength] = racer;
        racers.push({name: name, distance: Number(distance) - 1, jumpLength: Number(jumpLength)});
    }

    let bestScore = Number.POSITIVE_INFINITY;
    let winner;
    let hasWinner = false;
    for (let jump = 0; jump < maxJumps; jump++) {
        for (let name in racers) {
            racers[name].distance -= racers[name].jumpLength;
            if (racers[name].distance <= bestScore) {
                bestScore = racers[name].distance;
                winner = racers[name].name;
            }

            if (racers[name].distance <= 0) {
                racers[name].distance = 0;
                hasWinner = true;
                break;
            }
        }

        if (hasWinner) break;
    }

    let audience = '#'.repeat(distance);
    console.log(audience);
    console.log(audience);
    for (let racer in racers) {
        let firstPart = distance - 1 - racers[racer].distance;
        console.log(`${'.'.repeat(firstPart)}${racers[racer].name[0].toUpperCase()}${'.'.repeat(distance - 1 - firstPart)}`);
    }
    console.log(audience);
    console.log(audience);
    console.log(`Winner: ${winner}`);
}

fleaRace(["10", "19", "angel, 9", "Boris, 10", "Georgi, 3", "Dimitar, 7"]);
// fleaRace(["3","5","cura, 1","Pepi, 1","UlTraFlea, 1","BOIKO, 1"]);