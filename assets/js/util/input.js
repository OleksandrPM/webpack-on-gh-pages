// vrátí hodnotu z předaného inputu
export function getInputValue(input) {
    if (input.value.trim() === "") return input.value;
    return +input.value;
}

// vrátí vybranou operace z předaného select inputu
export function getOperation(input) {
    return input.value;
}