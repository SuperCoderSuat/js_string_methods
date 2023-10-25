/***************************************
 *      String-Methods-Level-1_9
 **************************************/
console.log('%c String-Methods-Level-1_9', 'background: #222; color: lightgreen');


const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "and";

console.log(text1.replace("codingschool", "school").concat(" and to the movie theater"));
console.log(text1.slice(0, 15).concat(" the movie theater"));
console.log(text2 + " " + text3 + " " + text1.slice(0, 3).concat(" are going to school"));
console.log(text2 + " " + text3 + " " + text1.slice(0, 3).concat(" are going to gym ").concat(text3).concat(" to the movie theater"));
console.log(text1.replace("Sam", text2).replace("codingschool", "school ").concat(text3).concat(" to the movie theater"));


