/**
 * @author Marko Skorupan
 * @version 1.0.0
 * @date 2025-11-28
 * @fileoverview User enters marks and receives correct average + performance.
 */

const countString: string = prompt("How many marks will you enter today? ") ||
  "0";
const count: number = parseInt(countString);

let total: number = 0;
let markString: string = "";
let markValue: number = 0;

for (let i: number = 1; i <= count; i++) {
  markString = prompt(`Enter mark ${i}: `) || "0";
  markValue = parseFloat(markString);
  total = total + markValue;
}

const average: number = total / count;

console.log(
  `You have entered ${count} marks. The student's average is ${average}%.`,
);

if (average <= 49) {
  console.log("The student is failing.");
} else if (average <= 69) {
  console.log("The student's performance is just under average.");
} else if (average <= 79) {
  console.log("The student's performance is average.");
} else {
  console.log("The student is on the honour roll.");
}
console.log("\nDone.");
