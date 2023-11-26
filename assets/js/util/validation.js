// provede validaci s předanými hodnotami (v případě selhání vyhodí chybu)
export function validate(num1, num2, operation) {
    if (typeof num1 !== "number") throw new Error("Nezadal jsi první číslo.");
    if (typeof num2 !== "number") throw new Error("Nezadal jsi druhé číslo.");

    if (operation === "DELENI" && num2 === 0) throw new Error("Nulou dělit nelze.");
}