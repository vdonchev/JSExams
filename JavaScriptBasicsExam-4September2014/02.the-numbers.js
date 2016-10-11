let solve = text => text[0]
        .split(/\D+/g)
        .filter(e => e != '')
        .map(Number)
        .map(e => ('000000000000000000' + e.toString(16)).substr(-4))
        .map(e => '0x' + e.toUpperCase())
        .join('-');

console.log(solve(["482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312"]));
console.log(solve(["20"]));
console.log(solve(["5tffwj(//*7837xzc2---34rlxXP%$”."]));