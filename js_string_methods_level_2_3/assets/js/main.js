/***************************************
 *      String-Methods-Level-2_3
 **************************************/
console.log('%c String-Methods-Level-2_3', 'background: #222; color: lightgreen');


function highlighting() {

    const input = document.body.querySelector("#search-input");
    const articleText = document.body.querySelector("article").innerText;
    const article = document.body.querySelector("article");

    article.innerHTML = articleText.replaceAll(input.value, `<span>${input.value}</span>`)
}