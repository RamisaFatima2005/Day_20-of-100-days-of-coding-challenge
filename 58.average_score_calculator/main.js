"use strict";
let scores = [100, 50, 80, 67];
let averageScore = scores.reduce((total, grade) => total + grade, 0) / scores.length;
console.log(averageScore);
