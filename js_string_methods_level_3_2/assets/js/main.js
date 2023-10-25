/***************************************
 *      String-Methods-Level-3_2
 **************************************/
console.log('%c String-Methods-Level-3_2', 'background: #222; color: lightgreen');

function trimText() {
    event.preventDefault();

    const inputText = document.body.querySelector("#inputText").value;
    const inputTrim = document.body.querySelector("#inputTrim").value;
    const before = document.body.querySelector("#before");
    const after = document.body.querySelector("#after");
    const outputBefore = document.body.querySelector("#outputBefore");
    const outputAfter = document.body.querySelector("#outputAfter");

    // console.log(inputText.value);
    // console.log(inputTrim.value);
    // console.log(before.checked);
    // console.log(after.checked);
    // console.log(output);

    let findIndex = inputText.indexOf(inputTrim)

    if (before.checked && inputText.length > 0 && inputTrim.length > 0) {
        console.log("before ausgewählt");
        outputBefore.textContent = inputText.slice(0, inputText.indexOf(inputTrim))
        outputAfter.textContent = inputText.slice(inputText.value.indexOf(inputTrim))
    } else if (after.checked && inputText.length > 0 && inputTrim.length > 0) {
        console.log("after ausgewählt");
        outputBefore.textContent = inputText.slice(0, inputText.indexOf(inputTrim) + inputTrim.length);
        outputAfter.textContent = inputText.slice(inputText.indexOf(inputTrim) + inputTrim.length);
    } else {
        console.log("error");
        outputBefore.textContent = "Bitte wähle davor oder danach aus und befülle alle Inputfelder"
        outputAfter.textContent = "";
    }

}


