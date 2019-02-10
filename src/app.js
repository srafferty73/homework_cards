const Beers = require('./models/beers.js');
const SelectView = require('./views/selectBeer.js');
const BeersListView = require('./views/displayBeer.js');
// const  = require('./views/error_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const beerSelect = document.querySelector('select#beer-select');
  const beerSelectView = new SelectView(beerSelect);
  beerSelectView.bindEvents();

  const beersContainer = document.querySelector('#beer-container');
  const beersListView = new BeersListView(beersContainer);
  beersListView.bindEvents();

  const beers = new Beers();
  beers.bindEvents();
});
