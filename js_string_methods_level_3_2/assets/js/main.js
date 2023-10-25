/***************************************
 *      String-Methods-Level-3_2
 **************************************/
console.log('%c String-Methods-Level-3_2', 'background: #222; color: lightgreen');

function davorDanach() {
    event.preventDefault();

    const wert1 = document.body.querySelector("form input:nth-of-type(1)");
    console.log(wert1.value);

    const wert2 = document.body.querySelector("form input:nth-of-type(2)")
    console.log(wert2.value);

}


