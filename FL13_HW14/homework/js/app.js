// Your code goes here
function Student(name = '', email = '') {
    this.name = name;
    this.email = email;
    this.homeworkResults = [];

    return {
        getName: () => this.name,
        getEmail: () => this.email,
        addHomeworkResult: (topic, success) => {
            this.homeworkResults.push({topic, success});
        },
        getHomeworkResults: () => this.homeworkResults
    }
}

function FrontendLab(students = [], failedLimit = 0) {

    this.listOfStudents = students.map((student) => {
        return new Student(student.name, student.email)
    });
    this.failedLimit = failedLimit;

    return {
        printStudentList: () => this.listOfStudents.forEach((s) => {
            console.log(`name: ${s.getName()}, email: ${s.getEmail()}`, s.getHomeworkResults())
        }),
        addHomeworkResults:
            (homeworkResults = {topic: '', results: [] }) => {
            this.listOfStudents.forEach((student) => {
                const studentsResult = homeworkResults.results
                    .find((result) => result.email === student.getEmail());
                if (studentsResult) {
                    student.addHomeworkResult(homeworkResults.topic, studentsResult.success);
                } else {
                    console.log(`Result of ${student.getName()} not found.`);
                }
            })
        },
        printStudentsEligibleForTest: () => {
            this.listOfStudents.forEach((student) => {
                let failCount = 0;
                const studentsResults = student.getHomeworkResults();
                studentsResults.forEach((result) => {
                    if (!result.success) {
                        failCount ++;
                    }
                });
                if (failCount <= this.failedLimit) {
                    console.log(`name: ${student.getName()}, email: ${student.getEmail()}`);
                }
            });
        }
    }
}
