/***************************************
 *      String-Methods-Level-2_3
 **************************************/
console.log('%c String-Methods-Level-2_3', 'background: #222; color: lightgreen');

function search() {
    event.preventDefault;
    const searchInput = document.body.querySelector("#search-input").value;
    const source = document.body.querySelector("#articleContent").innerText;

    document.body.querySelector("#article").innerHTML = source.replaceAll(searchInput, `<span class=highlight>${searchInput}</span>`);
}