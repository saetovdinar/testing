/* eslint-disable no-undef */
import  isValidInn  from '../validators';

test(' it should return true for valid card number', () => {
	const input = '4024007168929999';
	expect(isValidInn(input)).toBe(true);
});

test(' it should return false for invalid card number', () => {
	const input = '40240071689299';
	expect(isValidInn(input)).toBe(false);
});