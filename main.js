function addRedBorder(id) {
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";

}

function highlightCard(cardId) {
    console.log("mouseover");
    var element = document.getElementById(cardId);
    element.classList.toggle("card-highlight");

}