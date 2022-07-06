function showFunction() {
    let templateElement = document.querySelector("template");
    let clonedTemplate = templateElement.content.cloneNode(true);
    document.querySelector(".templateWrapper").appendChild(clonedTemplate);
}