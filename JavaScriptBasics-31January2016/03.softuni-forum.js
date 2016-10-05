function formatSoftUniForum(input) {
    let [banned, text] = [input.pop().split(' '), input.join('$$$$')];
    let match;
    let regEx = /<code>.*?<\/code>|#([a-zA-Z][a-zA-Z0-9_-]+[a-zA-Z0-9]+)\b/g;

    let i = 1;
    while (match = regEx.exec(text)) {
        if (!/<code>/g.test(match)) {
            if (banned.filter(u => u == match[1]).length > 0) {
                text = text.replace(match[0], '*'.repeat(match[1].length));
            } else {
                text = text.replace(match[0], `<a href="/users/profile/show/${match[1]}">${match[1]}</a>`);
            }
        }
    }

    console.log(text.replace(/\$\$\$\$/g, '\n'));
}

formatSoftUniForum(["#RoYaL: I'm not sure what you mean,", "but I am confident that I've written", "everything correctly. Ask #iordan_93", "and #pesho if you don't believe me", "<code>", "#trying to print stuff", "print(\"yoo\")", "</code>", "pesho gosho"]);
formatSoftUniForum(["<code>","#lele","#pochna se </code>","<code> #mani_begai #gosho <code>","gosho"]);