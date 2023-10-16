document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('name');
  const reviewInput = document.getElementById('review');
  const submitButton = document.getElementById('submit-review');
  const reviewList = document.getElementById('review-list');

  submitButton.addEventListener('click', function () {
      const name = nameInput.value;
      const review = reviewInput.value;
      

      if (name && review) {
          const reviewItem = document.createElement('div');
          reviewItem.classList.add('review-item');
          reviewItem.innerHTML = `
              <h3>${name}</h3>
              <p>${review}</p>
          `;
          reviewList.appendChild(reviewItem);

          nameInput.value = '';
          reviewInput.value = '';
      }
  });
});