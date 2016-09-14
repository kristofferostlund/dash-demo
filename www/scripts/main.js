(function (root) {
  const views = [
    document.querySelector('#intro'),
    document.querySelector('#dashboard'),
    document.querySelector('#forecast'),
    document.querySelector('#sales'),
    document.querySelector('#events'),
    document.querySelector('#good-news'),
    document.querySelector('#classification'),
  ];

  // Set the initial item to be visible
  views[0].style.display = 'block';

  // Get all the elements and listen for clicks on them.
  document
    .querySelectorAll('.menu-item')
    .forEach(item => item.addEventListener('click', setPage, false));

  function setPage() {
    const { item } = this.dataset;
    const view = views[item - 1];

    const _active = document.querySelector('.active');

    if (_active) {
      _active.classList.remove('active');
    }

    this.classList.add('active');

    views
      .filter(v => v !== view)
      .forEach(v => v.style.display = 'none');

    view.style.display = 'block';
  }
})(typeof this === 'undefined' ? window : this);