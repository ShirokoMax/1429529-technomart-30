// Modal Feedback

const feedbackLink = document.querySelector('.contacts-button');
const feedbackPopup = document.querySelector('.modal-feedback');
const feedbackClose = feedbackPopup.querySelector('.modal-close');
const feedbackForm = feedbackPopup.querySelector('.feedback-form');
const feedbackName = feedbackPopup.querySelector('#feedback-name');
const feedbackEmail = feedbackPopup.querySelector('#feedback-email');
const feedbackText = feedbackPopup.querySelector('#feedback-text');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('name');
} catch(error) {
  isStorageSupport = false;
}

feedbackLink.addEventListener('click', event => {
  event.preventDefault();
  feedbackPopup.classList.add('modal-show');

  if(storage) {
    feedbackName.value = localStorage.getItem('name');
    feedbackEmail.value = localStorage.getItem('email');
    feedbackText.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener('click', event => {
  event.preventDefault();
  feedbackPopup.classList.remove('modal-show');
  feedbackPopup.classList.remove('modal-error');
});

feedbackForm.addEventListener('submit', event => {
  if(!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    event.preventDefault();
    feedbackPopup.classList.remove('modal-error');
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('modal-error');
  } else {
    if(isStorageSupport) {
      localStorage.setItem('name', feedbackName.value);
      localStorage.setItem('email', feedbackEmail.value);
    }
  }
});

window.addEventListener('keydown', event => {
  if(event.keyCode === 27) {
    if(feedbackPopup.classList.contains('modal-show')) {
      event.preventDefault();
      feedbackPopup.classList.remove('modal-show');
      feedbackPopup.classList.remove('modal-error');
    }
  }
});

// Modal Map

const mapLink = document.querySelector('.contacts-map');
const mapPopup = document.querySelector('.modal-map');
const mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', event => {
  event.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', event => {
  event.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', event => {
  if(event.keyCode === 27) {
    if(mapPopup.classList.contains('modal-show')) {
      event.preventDefault();
      mapPopup.classList.remove('modal-show');
    }
  }
});
