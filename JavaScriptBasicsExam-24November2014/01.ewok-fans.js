function ewokFans(data) {
    let hater, fan;

    let middle = new Date('25.05.1973'.split('.').reverse());
    let bottom = new Date('01.01.1900'.split('.').reverse());
    let top = new Date('01.01.2015'.split('.').reverse());

    for (let line of data) {
        let curDate = new Date(line.split('.').reverse());
        if (curDate < middle && curDate > bottom) {
            if (hater !== undefined) {
                if (curDate < hater) {
                    hater = curDate;
                }
            } else {
                hater = curDate;
            }
        } else if (curDate >= middle && curDate < top) {
            if (fan !== undefined) {
                if (curDate > fan) {
                    fan = curDate;
                }
            } else {
                fan = curDate;
            }
        }
    }
    
    if (fan == undefined && hater == undefined) {
        console.log('No result');
    } else if (fan == undefined) {
        console.log(`The biggest hater of ewoks was born on ${hater.toDateString()}`);
    } else if(hater == undefined) {
        console.log(`The biggest fan of ewoks was born on ${fan.toDateString()}`);
    } else {
        console.log(`The biggest fan of ewoks was born on ${fan.toDateString()}`);
        console.log(`The biggest hater of ewoks was born on ${hater.toDateString()}`);
    }
}

ewokFans(["22.03.2014","17.05.1933","10.10.1954"]);
ewokFans(["22.03.2000"]);
ewokFans(["22.03.1700","01.07.2020"]);