import { isValidInn } from './validators';

export default class InnOgrnFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.cardImg = ['..img/icons/Mir.svg', './img/icons/Visa.svg', '../img/icons/MasterCard.svg', '../img/icons/UnionPay.svg'];
  }

  static get markup() {
    return `
    <form data-widget="innogrn-form-widget">
      <div class="form-control">
          <div class="contact-main">

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

  putImagesOfCard() {
    this.cardImg.forEach(item => {
      const img = document.createElement('img');
      img.src = item;
      img.style.width = '50px';
      img.style.height = '50px';
      this.parentEl.querySelector('.contact-main').append(img);
    })

    
    
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    this.putImagesOfCard();
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', evt => this.onSubmit(evt));
  }

  onSubmit(evt) {
    // add event listeners here
    evt.preventDefault();
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    if (isValidInn(inputEl.value)) {
      inputEl.classList.add('valid');
    } else {
      inputEl.classList.add('invalid');
    }
  }
}