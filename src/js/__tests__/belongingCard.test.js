/* eslint-disable no-undef */
import belongToBank from '../belongingCard';


test(' it should return true for valid card number', () => {
	const input = '4024007168929999';
	expect(belongToBank(input)).toBe('Visa');
});