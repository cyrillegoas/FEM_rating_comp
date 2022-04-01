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
      <img src="./assets/icon-star.svg">
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div class="rating__stars">
      <ul>
        <li class="rating__star>
          <img src="./assets/icon-star.svg">
        </li>
        <li class="rating__star>
          <img src="./assets/icon-star.svg">
        </li>
        <li class="rating__star>
          <img src="./assets/icon-star.svg">
        </li>
        <li class="rating__star>
          <img src="./assets/icon-star.svg">
        </li>
        <li class="rating__star>
          <img src="./assets/icon-star.svg">
        </li>
      </ul>
      </div>
      <button class="btn">SUBMIT</button>
    </dialog>
  `;
  element.insertAdjacentHTML('beforeend', html);
};

document.querySelector('#app').innerHTML = `
  <button class="btn">Open rating modal</button>
`;

const ratingModal = new RatingModal();
