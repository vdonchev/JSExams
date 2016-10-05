function calculateExamResults(input) {
    let [courseName, results] = [input.pop().trim(), input.filter(l => l != '')];

    let totalExamPoints = [];
    for (let result of results) {
        let resultTokens = result.split(/\s+/g).filter(t => t != '');

        let studentName = resultTokens[0];
        let course = resultTokens[1];
        let examPoints = Number(resultTokens[2]);
        let bonusPoints = Number(resultTokens[3]);

        if (courseName == course) {
            totalExamPoints.push(examPoints);
        }

        let coursePoints = examPoints * 0.2 + bonusPoints;

        if (examPoints < 100) {
            console.log(`${studentName} failed at "${course}"`);
            continue;
        }

        let studentGrade = ((coursePoints / 80) * 4) + 2;
        if (studentGrade > 6)
            studentGrade = 6;

        console.log(`${studentName}: Exam - "${course}"; Points - ${Math.round(coursePoints * 100) / 100}; Grade - ${studentGrade.toFixed(2)}`);
    }

    let courseAveragePoints = 0;
    if (totalExamPoints.length > 0) {
        courseAveragePoints = totalExamPoints.reduce((ex1, ex2) => (ex1 + ex2)) / totalExamPoints.length;
    }

    console.log(`"${courseName}" average points -> ${Math.round(courseAveragePoints * 100) / 100}`);
}

calculateExamResults(["Pesho C#-Advanced 100 3","Gosho Java-Basics 157 3","Tosho HTML&CSS 317 12","Minka C#-Advanced 57 15","Stanka C#-Advanced 157 15","Kircho C#-Advanced 300 0","Niki C#-Advanced 400 10","C#-Advanced"]);
calculateExamResults(["     Pesho C#-Advanced 100 3","         JAVA      "]);