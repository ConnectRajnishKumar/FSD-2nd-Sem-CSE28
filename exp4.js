function calculateResult() {
    let n = document.getElementById("subjects").value;
    let totalMarks = 0;
    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for subject " + i + ":"));
        totalMarks += marks;
    }
    let averageMarks = totalMarks / n;
    let grade;
    if (averageMarks >= 90) {
        grade = "Raja Mentality!";
    } else if (averageMarks >= 75) {
        grade = "A";
    } else if (averageMarks >= 60) {
        grade = "B";
    } else if (averageMarks >= 50) {
        grade = "C";
    } else {
        grade = "FAAAA!";
    }
    let result;
    if (averageMarks >= 40) {
        result = "Raja Aadmi!";
    } else {
        result = "BACK aa gaya!";
    }
    document.getElementById("result").innerHTML =
        "Total Marks : " + totalMarks + "<br>" +
        "Average Marks : " + averageMarks.toFixed(2) + "<br>" +
        "Grade : " + grade + "<br>" +
        "Result : " + result;
}