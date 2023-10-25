/***************************************
 *      String-Methods-Level-1_7
 **************************************/
console.log('%c String-Methods-Level-1_7', 'background: #222; color: lightgreen');


const text = "Sam is good at codingschool";

// console.log(text.replace("good", "bad").replace("codingschool", "school"));
// console.log(text.replace("Sam", "Susi").replace("codingschool", "school"));
// console.log(text.replace("codingschool", "tennis"));

document.write(text.replace("good", "bad").replace("codingschool", "school") + "<br>");
document.write(text.replace("Sam", "Susi").replace("codingschool", "school") + "<br>");
document.write(text.replace("codingschool", "tennis"));

