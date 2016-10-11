function toTheStars(data) {
    let [shipPos, moves] = data.splice(-2);
    let stars = {};
    for (let line of data) {
        let [name, starX, starY] = line.split(/\s+/g);
        stars[name.toLowerCase()] = {
            x: Number(starX),
            y: Number(starY)
        }
    }

    let [shipX, shipY] = shipPos.split(/\s+/g).map(Number);
    for (let move = 0; move <= moves; move++) {
        let locationFound = false;
        for (let star of Object.keys(stars)) {
            let starX = stars[star].x;
            let starY = stars[star].y;

            if (shipX >= starX - 1 && shipX <= starX + 1 &&
                shipY >= starY - 1 && shipY <= starY + 1) {
                console.log(star);
                locationFound = true;
                break
            }
        }

        if (!locationFound) {
            console.log('space');
        }

        shipY++;
    }
}

// toTheStars(["Sirius 3 7", "Alpha-Centauri 7 5", "Gamma-Cygni 10 10", "8 1", "6"]);
toTheStars(["Terra-Nova 16 2","Perseus 2.6 4.8","Virgo 1.6 7","2 5","4"]);