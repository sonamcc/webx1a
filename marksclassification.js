function classifyMarks(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid Marks"; // Handles marks outside the range 0-100
    }
    else if (marks < 30) {
        return "Fail"; // Marks less than 30
    }
    else if (marks < 35) {
        return "Just Fail"; // Marks between 30 and 34
    }
    else if (marks < 60) {
        return "Pass"; // Marks between 35 and 59
    }
    else if (marks < 85) {
        return "Merit"; // Marks between 60 and 84
    }
    else {
        return "Distinction"; // Marks between 85 and 100
    }
}
// Ensure this is not declared multiple times in the file
var marksArray = [20, 32, 40, 75, 90, 110, -5];
marksArray.forEach(function (mark) {
    console.log("Marks: ".concat(mark, ", Result: ").concat(classifyMarks(mark)));
});
