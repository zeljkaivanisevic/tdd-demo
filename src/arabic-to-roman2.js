//pretvorba arapskih brojeva u rimske - najbolje rjesenje
const digits = [[], [0], [0, 0], [0, 0, 0], [0, 1], [1], [1, 0], [1, 0, 0], [1, 0, 0, 0], [0, 2]];
const letters = ['IVX', 'XLC', 'CDM', 'M'];

function arabicToRoman(n) {
    checkIfNumberIsValidRoman(n);
	let result = '';
	for (let i = 0; n > 0; i++) {
		result = digits[n % 10].map(x => letters[i][x]).join('') + result;
		n = Math.floor(n / 10);
	}
	return result;
}

function checkIfNumberIsValidRoman(n) {
    if (!Number.isInteger(n) || n <= 0 || n >= 4000) {
		throw new TypeError("The argument must be a natural number less than 4000!");
	}
}

module.exports = arabicToRoman;
