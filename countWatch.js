function display(value) {
    document.querySelector("#result").value += value;
    return value;
}
display(0);
function count(num) {
    const press = document.querySelector("#count");
    press.addEventListener("click", function () {
        for (let value = 0; value <= 5; value++) {
            display(value);
        }
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





