/***************************************
 *      String-Methods-Level-1_8
 **************************************/
console.log('%c String-Methods-Level-1_8', 'background: #222; color: lightgreen');


const text = "Sam is going to codingschool";

// console.log(text.slice(0, 3).toUpperCase() + text.slice(3, 16) + text.slice(22).toUpperCase());
// console.log(text.slice(0, 3).toLowerCase() + text.slice(3, 16).toUpperCase() + text.slice(22).toLowerCase());
// // console.log(text.slice(0, 1).toUpperCase() + text.slice(1, 3));
// console.log(text.replace("is", "Is").replace("going", "Going").replace("to", "To").replace("codingschool", "School"));

document.write(text.slice(0, 3).toUpperCase() + text.slice(3, 16) + text.slice(22).toUpperCase() + "<br>");
document.write(text.slice(0, 3).toLowerCase() + text.slice(3, 16).toUpperCase() + text.slice(22).toLowerCase() + "<br>");
document.write(text.replace("is", "Is").replace("going", "Going").replace("to", "To").replace("codingschool", "School"));