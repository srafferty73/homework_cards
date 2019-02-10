const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:data-ready', (evt) => {
    this.populate(evt.detail);
  });

  this.element.addEventListener('change', (evt) => {
    // evt.preventDefault();
    const beer = event.target.value;
    PubSub.publish('SelectView:change', beer);
    // this.element.reset();
  });
};


// This can't work until Beers gets its data but not sure how to do that first
SelectView.prototype.populate = function (beerData) {
  beerData.forEach((beer, index) => {
    const beerOption = this.createOption(beer.name, index);
    this.element.appendChild(beerOption);
    option.textContent = beer.name;
    option.value = index;
  });
};

SelectView.prototype.createOption = function (name, index) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  return option;
};

module.exports = SelectView;
