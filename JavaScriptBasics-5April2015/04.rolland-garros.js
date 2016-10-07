function sortTennisPlayers(data) {
    let rankList = new Map;

    for (let line of data) {
        let tokens = line.split(/vs\.|:/);
        let playerA = tokens[0].trim().replace(/\s+/g, ' ');
        let playerB = tokens[1].trim().replace(/\s+/g, ' ');
        let scores = tokens[2].trim().split(/-|\s+/g).map(Number);

        if (!rankList.has(playerA)) {
            rankList.set(playerA, {
                "name": playerA,
                "matchesWon": 0,
                "matchesLost": 0,
                "setsWon": 0,
                "setsLost": 0,
                "gamesWon": 0,
                "gamesLost": 0
            });
        }

        if (!rankList.has(playerB)) {
            rankList.set(playerB, {
                "name": playerB,
                "matchesWon": 0,
                "matchesLost": 0,
                "setsWon": 0,
                "setsLost": 0,
                "gamesWon": 0,
                "gamesLost": 0
            });
        }

        let playerAGames = 0;
        let playerASets = 0;
        let playerBGames = 0;
        let playerBSets = 0;

        for (let i = 0; i < scores.length; i += 2) {
            playerAGames += scores[i];
            playerBGames += scores[i + 1];

            if (scores[i] > scores[i + 1]) {
                playerASets++;
            } else {
                playerBSets++;
            }
        }

        rankList.get(playerA).gamesWon += playerAGames;
        rankList.get(playerA).gamesLost += playerBGames;
        rankList.get(playerB).gamesWon += playerBGames;
        rankList.get(playerB).gamesLost += playerAGames;

        rankList.get(playerA).setsWon += playerASets;
        rankList.get(playerA).setsLost += playerBSets;
        rankList.get(playerB).setsWon += playerBSets;
        rankList.get(playerB).setsLost += playerASets;

        if (playerASets > playerBSets) {
            rankList.get(playerA).matchesWon++;
            rankList.get(playerB).matchesLost++;
        } else {
            rankList.get(playerB).matchesWon++;
            rankList.get(playerA).matchesLost++;
        }
    }


    function sortPlayers(playerA, playerB) {
        if (rankList.get(playerB).matchesWon - rankList.get(playerA).matchesWon == 0) {
            if (rankList.get(playerB).setsWon - rankList.get(playerA).setsWon == 0) {
                if (rankList.get(playerB).gamesWon - rankList.get(playerA).gamesWon == 0) {
                    return playerA.localeCompare(playerB);
                }

                return rankList.get(playerB).gamesWon - rankList.get(playerA).gamesWon;
            }

            return rankList.get(playerB).setsWon - rankList.get(playerA).setsWon;
        }

        return rankList.get(playerB).matchesWon - rankList.get(playerA).matchesWon;
    }

    let output = [];
    [...rankList.keys()].sort((a, b) => sortPlayers(a, b)).forEach(pl => output.push(rankList.get(pl)));

    console.log(JSON.stringify(output));
}

sortTennisPlayers(["Novak Djokovic vs. Roger Federer : 6-3 6-3", "Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3", "Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7", "Andy Murray vs. David     Ferrer : 6-4 7-6", "Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7", "Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2", "Pete Sampras vs. Andre Agassi : 2-1", "Boris Beckervs.Andre        Agassi:2-1"]);