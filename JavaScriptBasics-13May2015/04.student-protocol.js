function buildStudentProtocol(results) {
    let protocol = new Map;
    for (let result of results) {
        let match = result.match(/^\s*([a-zA-Z]+\s*[a-zA-Z]+)\s*-\s*([^:]+?)\s*:\s*(\d+)\s*$/);
        let [student, exam, score] = [match[1], match[2], Number(match[3])];
        if (score < 0 || score > 400)
            continue;

        if (!protocol.has(exam))
            protocol.set(exam, new Map);
        if (!protocol.get(exam).has(student)) {
            protocol.get(exam).set(student, {name: student, result: score, makeUpExams: 0});
        } else {
            let prevScore = protocol.get(exam).get(student).result;
            if (score > prevScore)
                prevScore = score;

            protocol.get(exam).get(student).makeUpExams = protocol.get(exam).get(student).makeUpExams + 1;
            protocol.get(exam).get(student).result = prevScore;
        }
    }

    let finalResults = {};
    function sortStudents(studentA, studentB) {
        if (studentA.result > studentB.result) return -1;
        if (studentA.result < studentB.result) return 1;
        if (studentA.makeUpExams > studentB.makeUpExams) return 1;
        if (studentA.makeUpExams < studentB.makeUpExams) return -1;

        return studentA.name.localeCompare(studentB.name);
    }

    for (let [exam, students] of protocol) {
        finalResults[exam] = [...students.values()].sort(sortStudents);
    }

    return JSON.stringify(finalResults);
}

console.log(buildStudentProtocol(["Peter Jackson - Java : 350", "Jane - JavaScript : 200", "Jane     -    JavaScript :     400", "Simon Cowell - PHP : 100", "Simon Cowell-PHP: 500", "Simon Cowell - PHP : 200"]));