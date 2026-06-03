const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const spellArea = document.getElementById("spellArea");
const ingredients = document.querySelectorAll("#ingredientsList li");

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

generateButton.addEventListener("click", function () {

    let count = 3;
    spellArea.textContent = count;

    const countdown = setInterval(function () {
        count--;

        if (count > 0) {
            spellArea.textContent = count;
        } else {
            clearInterval(countdown);

            const randomIndex = Math.floor(Math.random() * ingredients.length);
            const ingredient = ingredients[randomIndex].textContent;

            spellArea.textContent = `✨ Spell Ingredient: ${ingredient} ✨`;
            spellArea.style.backgroundColor = randomColor();
        }
    }, 1000);
});

resetButton.addEventListener("click", function () {
    spellArea.textContent = "Your spell will appear here...";
    spellArea.style.backgroundColor = "lightgray";
});