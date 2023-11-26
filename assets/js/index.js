// tento JavaScript soubor používá tyto JavaScript moduly:
import { add, divide, multiply, substract } from "./math.js";
import { getInputValue, getOperation } from "./util/input.js";
import { validate } from "./util/validation.js";


// input elementy
const input1 = document.getElementById("Number1");
const input2 = document.getElementById("Number2");
const operationInput = document.getElementById("Operation");
// tlačítko
const button = document.getElementById("SubmitButton");
// text s chybovou zprávou
const errorMessage = document.getElementById("ErrorMessage");
// text s výsledkem
const resultText = document.getElementById("ResultText");
// výsledek
const resultValue = document.getElementById("ResultValue");


// skrytí textu s chybovou zprávou a textu s výsledkem
errorMessage.style.display = "none";
resultText.style.display = "none";


// při každém kliknutí na tlačítko se provede předaná funkce
button.addEventListener("click", () => {
    // získání hodnot z inputů
    let num1 = getInputValue(input1);
    let num2 = getInputValue(input2);
    // získání vybrané operace ze select input
    let operation = getOperation(operationInput);

    try {
        // validace inputů (pokud validace selže, je vyhozena chyba)
        validate(num1, num2, operation);

        // do této proměnné se uloží výsledek
        let result;

        // provedení výpočtu podle vybrané operace
        switch (operation) {
            case "SCITANI":
                result = add(num1, num2);
                break;
            case "ODECITANI":
                result = substract(num1, num2);
                break;
            case "DELENI":
                result = divide(num1, num2);
                break;
            case "NASOBENI":
                result = multiply(num1, num2);
                break;
        }

        // zobrazí se text s výsledkem
        resultValue.innerText = result;
        resultText.style.display = "block";

        // text s chybovou zprávou se skryje (pokud není skrytý)
        errorMessage.style.display = "none";
    } catch(err) {
        // pokud došlo k chybě, zobrazí se chybová zpráva
        errorMessage.innerText = err.message;
        errorMessage.style.display = "block";

        // text s výsledkem se skryje (pokud není skrytý)
        resultText.style.display = "none";
    }
});