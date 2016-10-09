function sortUserModels(data) {
    let log = {students: [], trainers: []};
    let sortCriteria = data.shift().split('^')[0];

    for (let line of data) {
        let person = JSON.parse(line);
        if (person.role == 'student') {
            let grades = person.grades.map(Number);
            let averageGrade = (grades.reduce((a, b) => a + b) / grades.length).toFixed(2);
            log.students.push(
                {
                    id: person.id,
                    firstname: person.firstname,
                    lastname: person.lastname,
                    averageGrade: averageGrade,
                    certificate: person.certificate,
                    level: person.level
                }
            );
        } else {
            log.trainers.push(
                {
                    id: person.id,
                    firstname: person.firstname,
                    lastname: person.lastname,
                    courses: person.courses,
                    lecturesPerDay: person.lecturesPerDay
                }
            );
        }
    }

    log.trainers = log.trainers.sort(function (trA, trB) {
        if (trA.courses.length == trB.courses.length) {
            return trA.lecturesPerDay - trB.lecturesPerDay;
        }

        return trA.courses.length - trB.courses.length;
    });
    
    if (sortCriteria == 'name') {
        log.students = log.students.sort(function (stA, stB) {
            if (stA.firstname.localeCompare(stB.firstname) == 0) {
                return stA.lastname.localeCompare(stB.lastname);
            }

            return stA.firstname.localeCompare(stB.firstname);
        })
    } else {
        log.students = log.students.sort(function (stA, stB) {
            if (stA.level == stB.level) {
                return stA.id - stB.id;
            }

            return stA.level - stB.level;
        })
    }

    log.students.map(s => delete s.level);

    // console.log(JSON.stringify(log, null, 4)); // debug
    console.log(JSON.stringify(log));
}

sortUserModels(["level^courses", "{\"id\":0,\"firstname\":\"Angel\",\"lastname\":\"Ivanov\",\"town\":\"Plovdiv\",\"role\":\"student\",\"grades\":[\"5.89\"],\"level\":2,\"certificate\":false}", "{\"id\":1,\"firstname\":\"Mitko\",\"lastname\":\"Nakova\",\"town\":\"Dimitrovgrad\",\"role\":\"trainer\",\"courses\":[\"PHP\",\"Unity Basics\"],\"lecturesPerDay\":6}", "{\"id\":2,\"firstname\":\"Bobi\",\"lastname\":\"Georgiev\",\"town\":\"Varna\",\"role\":\"student\",\"grades\":[\"5.59\",\"3.50\",\"4.54\",\"5.05\",\"3.45\"],\"level\":4,\"certificate\":false}", "{\"id\":3,\"firstname\":\"Ivan\",\"lastname\":\"Ivanova\",\"town\":\"Vidin\",\"role\":\"trainer\",\"courses\":[\"JS\",\"Java\",\"JS OOP\",\"Database\",\"OOP\",\"C#\"],\"lecturesPerDay\":7}", "{\"id\":4,\"firstname\":\"Mitko\",\"lastname\":\"Petrova\",\"town\":\"Sofia\",\"role\":\"trainer\",\"courses\":[\"Database\",\"JS Apps\",\"Java\"],\"lecturesPerDay\":2}"]);