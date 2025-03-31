"use strict";
var Student = /** @class */ (function () {
    function Student(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.getTotalMarks = function () {
        return this.marks.reduce(function (sum, mark) { return sum + mark; }, 0);
    };
    Student.prototype.getAverageMarks = function () {
        return this.marks.length > 0 ? this.getTotalMarks() / this.marks.length : 0;
    };
    Student.prototype.getResult = function () {
        return this.getAverageMarks() >= 40 ? "Passed" : "Failed";
    };
    Student.prototype.displayResult = function () {
        console.log("Student Name: ".concat(this.name));
        console.log("Average Marks: ".concat(this.getAverageMarks().toFixed(2)));
        console.log("Result: ".concat(this.getResult()));
    };
    return Student;
}());
// Example usage
var student1 = new Student("Sonam Chhabaidiya", [28, 48, 50]);
student1.displayResult();
