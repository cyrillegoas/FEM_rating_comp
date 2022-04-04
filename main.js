import './style.scss';

function RatingModal(params) {
  this.app = document.querySelector('#app');
  this.app.innerHTML = `<button class="btn">Open rating modal</button><dialog class="rating"></dialog>`;
  const rateMeBtn = this.app.querySelector('.btn');
  this.dialog = this.app.querySelector('.rating');
  this.askRating(this.dialog);

  // EVENT LISTENERS
  this.dialog.addEventListener('click', (event) => this.closeModal(event));
  rateMeBtn.addEventListener('click', () => {
    this.dialog.showModal();
  });
}

RatingModal.prototype.askRating = function (element) {
  const html = `
    <div class="rating__inner-wrapper">
      <div class="rating__wrapper">
        <div class="rating__star-wrapper">
          <img class="rating__star" src="./assets/icon-star.svg">
        </div>
        <h1 class="rating__title">How did we do?</h1>
        <p class="rating__desc">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <form class="rating__score-wrapper">
          <input type="radio" value="1" name="rating" id="score1">
          <label for="score1" class="rating__score">1</label>
          <input type="radio" value="2" name="rating" id="score2">
          <label for="score2" class="rating__score">2</label>
          <input type="radio" value="3" name="rating" id="score3">
          <label for="score3" class="rating__score">3</label>
          <input type="radio" value="4" name="rating" id="score4">
          <label for="score4" class="rating__score">4</label>
          <input type="radio" value="5" name="rating" id="score5">
          <label for="score5" class="rating__score">5</label>
          <button class="btn">SUBMIT</button>
        </form>
      </div>
    </div>
  `;
  element.innerHTML = html;
  this.dialog
    .querySelector('form')
    .addEventListener('submit', (event) => this.handleSubmit(event), {
      once: true,
    });
};

RatingModal.prototype.confirmMessage = function (element) {
  const html = `
    <div class="rating__inner-wrapper">
      <div class="rating__confirmation">
        <img class="rating__confirmation-img"src="./assets/illustration-thank-you.svg">
        <p class="rating__confirmation-message">You selected ${this.userAnswer} out of 5</p>
        <h1 class="rating__confirmation-title">How did we do?</h1>
        <p class="rating__confirmation-desc">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>
  `;
  element.innerHTML = html;
};

RatingModal.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const form = this.dialog.querySelector('form');
  const checkedRadio = form.querySelector('input[name="rating"]:checked');
  if (!checkedRadio) {
    // nothing selected
    return;
  }
  this.userAnswer = checkedRadio.value;
  this.confirmMessage(this.dialog);
};

RatingModal.prototype.closeModal = function (event) {
  if (event.target === event.currentTarget) {
    this.dialog.close();
    this.askRating(this.dialog);
  }
};

const ratingModal = new RatingModal();
