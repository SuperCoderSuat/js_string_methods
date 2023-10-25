/***************************************
 *      String-Methods-Level-1_5
 **************************************/
console.log('%c String-Methods-Level-1_5', 'background: #222; color: lightgreen');


const text = 'Susi is back from codingschool';

// console.log(text.substring(0, 4));
// console.log(text.substring(5, 7));
// console.log(text.substring(24, 30));
// console.log(text.substring(0, 5) + text.substring(5, 8) + text.substring(24, 30));

document.write(text.substring(0, 4) + "<br>");
document.write(text.substring(5, 7) + "<br>");
document.write(text.substring(24, 30) + "<br>");
document.write(text.substring(0, 5) + text.substring(5, 8) + text.substring(24, 30));

