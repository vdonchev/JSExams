function sortFiles(data) {
    let allFiles = {};
    for (let line of data) {
        let [fileName, extension, size] = line.split(/\s+/);
        if (!allFiles.hasOwnProperty(extension)) {
            allFiles[extension] = {files: [], memory: 0}
        }

        allFiles[extension].files.push(fileName);
        allFiles[extension].memory += Number(size.substr(0, size.length - 2));
    }

    let output = {};
    for (let ext of [...Object.keys(allFiles)].sort()) {
        output[ext] = {
            files: allFiles[ext].files.sort(),
            memory: allFiles[ext].memory.toFixed(2)
        };
    }

    console.log(JSON.stringify(output));
}

sortFiles(["eclipse .tar.gz 198.00MB", "uTorrent .gyp 33.02MB", "nodeJS .gyp 14MB", "nakov-naked .jpeg 3MB", "gnuGPL .pdf 5.6MB", "skype .tar.gz 66MB", "selfie .jpeg 7.24MB", "myFiles .tar.gz 783MB"]);