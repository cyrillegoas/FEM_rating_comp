import './style.scss';

function RatingModal(params) {
  const app = document.querySelector('#app');
  const rateMeBtn = app.querySelector('.btn');
  this.askRating(app);
  const dialog = app.querySelector('.rating');

  // EVENT LISTENERS
  rateMeBtn.addEventListener('click', () => {
    dialog.showModal();
  });
}

RatingModal.prototype.askRating = function (element) {
  const html = `
    <dialog class="rating">
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
    </dialog>
  `;
  element.insertAdjacentHTML('beforeend', html);
};

document.querySelector('#app').innerHTML = `
  <button class="btn">Open rating modal</button>
`;

const ratingModal = new RatingModal();
