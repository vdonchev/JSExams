function medenkaWars(commands) {
    const MEDENKA_DAMAGE = 60;

    let darkPoints = 0;
    let whitePoints = 0;

    let whiteLastStrike = -1;
    let whiteNumberOfAttacks = 0;
    let darkLastStrike = -1;
    let darkNumberOfAttacks = 0;

    for (let command of commands) {
        let tokens = command.split(' ');
        let attackPower = Number(tokens[0]);
        let attackType = tokens[1];
        let damage = attackPower * MEDENKA_DAMAGE;

        if (attackType == 'dark') {
            darkNumberOfAttacks++;
            if (darkLastStrike == attackPower) {
                if (darkNumberOfAttacks == 5) {
                    damage = Math.trunc(damage * 4.5);
                    darkNumberOfAttacks = 0;
                }
            } else {
                darkLastStrike = attackPower;
                darkNumberOfAttacks = 1;
            }

            darkPoints += damage;
        } else {
            whiteNumberOfAttacks++;
            if (whiteLastStrike == attackPower) {
                if (whiteNumberOfAttacks == 2) {
                    damage = Math.trunc(damage * 2.75);
                    whiteNumberOfAttacks = 0;
                }
            } else {
                whiteLastStrike = attackPower;
                whiteNumberOfAttacks = 1;
            }

            whitePoints += damage;
        }
    }

    if (whitePoints > darkPoints) {
        console.log('Winner - Vitkor');
    } else {
        console.log('Winner - Naskor')
    }

    console.log(`Damage - ${Math.max(whitePoints, darkPoints)}`);
}