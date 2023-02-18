// 3. Arts student  
// Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
// Social Science Subjects - Accounting, Commerce, Marketing, Geography
// Arts Subjects - Government, Economics, Literature, History
// General Subjects - English, Mathematics


scienceSubject = "physics, chemistry, biology, technicalDreawing";
socialScience = "Accounting, Commerce, Marketing, Geography";
artsSubjects = "Government, Economics, Literature, History";
generalSubjects = "English, Mathematics";

let student = artsSubjects;

if (student == scienceSubject) { 
    console.log(scienceSubject + ' ' + generalSubjects)
} else if(student == socialScience) {
    console.log(socialScience + ' ' + generalSubjects)
} else if(student == artsSubjects) {
    console.log(artsSubjects + ' ' + generalSubjects)
}
else {
    console.log(generalSubjects)
}

// 4.
for (let i = 1; i < 20; i += 7) {
    console.log(i)
}
// 5.
// “The number (pwr) is the power of 2 nearest to (num).” 
let num = 20;
let x = 5;
let pwr = x ** 2;
if (pwr < num){
    console.log("The number" + pwr + " is the power of 2 nearest to " + num);
} else {
    console.log('ERROR')
}