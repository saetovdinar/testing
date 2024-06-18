export default function isValidInn(value) {
	const controlDigit = +value % 10;
	const reversedValue = value.split('').reverse().slice(1);
	const sumOfDigits = reversedValue.reduce((accum, item, index) => {

		if(!(index % 2)) {
			const result = (+item) * 2;
			return (accum + (result % 10) + (Math.floor(result / 10)));
		} else {
			return (accum + (+item));
		}
   
	}, 0);

	const result = (10 - (sumOfDigits % 10));
	return controlDigit === result ? true : false;
}

