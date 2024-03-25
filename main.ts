// This code calculates percentage for 5 subjects.
// Subject: Maths, Physics, Chemistry, English, IT.

// Student Details
let studentId = "1234SHAH";

// Total MArks
let TotalMarks = 500;
// Student Marks
let MathScore = 95;
let PhysicsSCore = 97;
let ChemistryScore = 89;
let EnglishScore = 91;
let ITScore = 94;

let FinalResult = ((MathScore+PhysicsSCore+ChemistryScore+EnglishScore+ITScore)/TotalMarks)*100;

let ResultStatement = "Student" + ' '+ studentId +' '+ "obtained this percentage:" +' '+ FinalResult + "%";

console.log(ResultStatement);

let grade1 = FinalResult > 90;
console.log("gradeA*:",grade1);
let grade2 = FinalResult < 80;
console.log("gradeA:",grade2);
let grade3 = FinalResult > 70;
console.log("gradeB:",grade3);
let grade4 = FinalResult < 60;
console.log("gradeC:",grade4);






