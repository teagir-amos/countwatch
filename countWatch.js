function display(value) {
    document.querySelector("#result").value += value;
    return value;
}
display();
function count() {
    let value = 0;
    const press = document.querySelector("#count");
    press.addEventListener("click", function () {
        value++;
            display(value);
    });
}
count();
function ClearScreen() {
    const reset = document.querySelector("#reset");
    reset.addEventListener("click", () => {
        document.querySelector("#result").value = "";
    })
};
ClearScreen();





