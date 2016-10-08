function chainsManualDecrypt(data) {
    let regex = /<p>(.*?)<\/p>/g;
    let output = '';
    let match;
    while (match = regex.exec(data)) {
        output += match[1]
            .replace(/[^a-z0-9]/g, ' ')
            .replace(/[a-z]/g, function (m) {
                if (/[a-m]/.test(m)) {
                    return String.fromCharCode(m.charCodeAt(0) + 13);
                }

                return String.fromCharCode(m.charCodeAt(0) - 13);
            })
            .replace(/\s+/g, ' ');
    }

    console.log(output);
}

// console.log(
// 'n'.replace(/[n-z]/g, m => String.fromCharCode(m.charCodeAt(0) - 13)));

// chainsManualDecrypt(['<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>']);
chainsManualDecrypt(["<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>"]);