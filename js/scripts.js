var linkToModalFeedback = document.querySelector('.link-to-modal-feedback');
var linkToModalMap = document.querySelector('.link-to-modal-map');
var modalFeedback = document.querySelector('.modal-feedback');
var closeFeedback = modalFeedback.querySelector('.modal__close-btn');
var modalMap = document.querySelector('.modal-map');
var closeMap = modalMap.querySelector('.modal__close-btn');

linkToModalFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal--show');
});

linkToModalMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal--show');
});

closeFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('modal--show');
})

closeMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal--show');
});