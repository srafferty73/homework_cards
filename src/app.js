const  = require('./models/.js');
const  = require('./views/.js');
const  = require('./views/error_view.js');
const  = require('./views/.js');



document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const cards. = new Card();
  cards.getData();
  cards.bindEvents();

  const pick_a_card = document.querySelector('#card');
  const regionDropdown = new RegionSelectView(selectElement);
  regionDropdown.bindEvents();

  // const munroListContainer = document.querySelector('#region');
  // const munroListView = new RegionOutputView(munroListContainer);
  // munroListView.bindEvents();
  //
  // const region = new Region();
  // region.getData();
  // region.bindEvents();
  //
  // const selectElement = document.querySelector('#munros');
  // const regionDropdown = new RegionSelectView(selectElement);
  // regionDropdown.bindEvents();
})
