function learnMore() {
    console.log("Should scroll!");
    window.scroll(0, document.getElementById("about").getBoundingClientRect().top - 200);
}