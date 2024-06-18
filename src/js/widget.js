import isValidInn  from './validators';
import belongToBank from './belongingCard';
export default class InnOgrnFormWidget {
	constructor(parentEl) {
		this.parentEl = parentEl;
	}

	static get markup() {
		return `
    <form data-widget="innogrn-form-widget">
      <div class="form-control">
          <div class="contact-main">
            <img class="visa">
            <img class="mir">
            <img class="mastercard">
            <img class="union">
          </div>
          <input class="input" id="innorgn-input" data-id="innogrn-input" type="text">
      </div>
      <button class="btn" data-id="innogrn-submit">Далее</button>
    </form>
    `;
	}

	static get inputSelector() {
		return '[data-id=innogrn-input]';
	}

	static get submitSelector() {
		return '[data-id=innogrn-submit]';
	}
	//определяем выбранный банк
	choosenBank(bank) {
		this.parentEl.querySelectorAll('img').forEach((item) => {
			item.style.opacity = 0.25;});
		this.parentEl.querySelector(bank).style.opacity = 1;

	}
	//стираем все выбранные банки при удалении номера карты полностью
	unchooseAllBanks() {
		this.parentEl.querySelectorAll('img').forEach((item) => {
			item.style.opacity = 0.25;});
	}
	//определяем банк в зависимости от введенного значения
	chooseBank() {
		if(belongToBank(this.parentEl.querySelector(this.constructor.inputSelector).value) === 'Visa') {
			this.choosenBank('.visa');

		} else if (belongToBank(this.parentEl.querySelector(this.constructor.inputSelector).value) === 'Mir') {
			this.choosenBank('.mir');

		} else if (belongToBank(this.parentEl.querySelector(this.constructor.inputSelector).value) === 'MasterCard') {
			this.choosenBank('.mastercard');

		} else if (belongToBank(this.parentEl.querySelector(this.constructor.inputSelector).value) === 'UnionPay') {
			this.choosenBank('.union');

		} else {
			this.unchooseAllBanks();
		}
	}
	//отрисовка формы
	bindToDOM() {
		this.parentEl.innerHTML = this.constructor.markup;
		const submit = this.parentEl.querySelector(this.constructor.submitSelector);
		const input = this.parentEl.querySelector(this.constructor.inputSelector);
		submit.addEventListener('click', event => this.onSubmit(event));
		input.addEventListener('input', event => this.onInput(event));
	}
	//проверка валидности введенного значения
	onSubmit(event) {
		// add event listeners here
		event.preventDefault();
		const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
   
		if (isValidInn(inputEl.value)) {
			inputEl.id='valid';
		} else {
			inputEl.id='invalid';
		}
	}
	//колбэк для события input
	onInput(event) {
		event.preventDefault();
		this.chooseBank();
		this.clear();
	}
	//убираем стилизацию инпута при удалении значения
	clear() {
		const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
		inputEl.id=' ';
	}
}