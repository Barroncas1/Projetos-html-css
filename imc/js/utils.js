 export function notNumber(value) {
    return isNaN(value) || value == ""
}

export function IMC(weight, height) {
    return (weight/(height**2)).toFixed(2)
}