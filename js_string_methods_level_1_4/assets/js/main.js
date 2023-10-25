/***************************************
 *      String-Methods-Level-1_4
 **************************************/
console.log('%c String-Methods-Level-1_4', 'background: #222; color: lightgreen');


const mySlice = 'Susi is going to codingschool';

// console.log(mySlice.slice(0, 4));
// console.log(mySlice.slice(5, 7));
// console.log(mySlice.slice(5, 17) + mySlice.slice(23, 29));
// console.log(mySlice.slice(23));
// console.log(mySlice.slice(0, 4) + mySlice.slice(4, 8) + mySlice.slice(23, 29));

document.write(mySlice.slice(0, 4) + "<br><br>");
document.write(mySlice.slice(5, 7) + "<br><br>");
document.write(mySlice.slice(5, 17) + mySlice.slice(23, 29) + "<br><br>");
document.write(mySlice.slice(23) + "<br><br>");
document.write(mySlice.slice(0, 4) + mySlice.slice(4, 8) + mySlice.slice(23, 29));