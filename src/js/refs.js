const refs = {
  body: document.querySelector('body'),
  myLibrary: document.querySelector('#myLibrary'),
  moviesGallery: document.querySelector('.movies-gallery'),
  libraryGallery: document.querySelector('.gallery__library'),
  galleryContainer: document.querySelector('.gallery__container'),
  pagination: document.querySelector('#pagination'),
  loader: document.querySelector('.loader'),
  footer: document.querySelector('.footer'),
  modalWindow: document.querySelector('.modal'),
  modalWindowInfo: document.querySelector('.modal__info'),
  modalWindowClose: document.querySelector('.modal__btn-close'),
  backdrop: document.querySelector('.backdrop'),
  modalBtns: document.querySelectorAll('.modal__btn'),
  openTeamModal: document.querySelector('[team-modal-open]'),
  closeTeamModal: document.querySelector('[team-modal-close]'),
  teamModal: document.querySelector('[team-modal]'),
  addToWatchedBtn: document.querySelector('#addToWatched'),
  addToQueueBtn: document.querySelector('#addToQueue'),
  watchTrailer: document.querySelector('#watchTrailer'),
  myHomeLink: document.querySelector('.my-home'),
  btnQueue: document.querySelector('#btn-queue'),
  btnWatched: document.querySelector('#btn-watched'),
  errorMessage: document.querySelector('.form__search-error'),
  searchBtn: document.querySelector('.form__btn'),
  input: document.querySelector('.form__input'),
};

export default refs;