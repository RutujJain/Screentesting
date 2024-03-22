var headerElement = document.getElementById("header")
var footerElement = document.getElementById("footer")

fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
        headerElement.innerHTML = html;
    });


fetch("footer.html")
    .then((response) => response.text())
    .then((html) => {
        footerElement.innerHTML = html;
    });

