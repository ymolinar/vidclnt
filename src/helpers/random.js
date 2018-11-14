/**
 * Get a random floating point number between `min` and `max`.
 * Contribution from https://gist.github.com/kerimdzhanov/7529623
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random floating point number
 */
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get a random boolean value.
 *
 * @return {boolean} a random true/false
 */
function getRandomBool() {
    return Math.random() >= 0.5;
}

/**
 * Contribution from http://www.jacklmoore.com/notes/rounding-in-javascript/
 * @param value
 * @param decimals
 * @returns {number}
 */
function round(value, decimals = 2) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

export {getRandomBool, getRandomFloat, getRandomInt, round}