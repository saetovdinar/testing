export default function belongToBank(value) {
	if (value[0] === '4') {
		return 'Visa';
	} if (value[0] === '5') {
		return 'MasterCard';
	} else if (value[0] === '6') {
		return 'UnionPay';
	} else if (value[0] === '2' && value[1] === '2') {
		return 'Mir';
	} else {
		return false;
	}
}
  
  