const PubSub = require("../helpers/pub_sub.js");
const BeerView = require("./beer_view.js");

const BeersListView = function(element){
  this.element = element;
  this.data = null;
};

BeersListView.prototype.bindEvents = function(){
  PubSub.subscribe("Beers:beer-data-loaded",(event) => {
    this.data = event.detail;
    this.render(this.data);
  });
};

BeersListView.prototype.render = function(beer){
  this.clearData();
  const beerImage = document.createElement("img");
  beerImage.src = this.data;
  this.element.appendChild(beerImage);

  // const name = document.createTextElement("h2", "name");
  // this.element.appendChild(name);

  // this.data.forEach((link) => {
  //   // const dogImage = document.createElement("img");
  //   // dogImage.src = link;
  //   // this.element.appendChild(dogImage);
  //   const beerImage = new BeerView(link).render();
  //   this.element.appendChild(beerImage);
  // });
};

BeersListView.prototype.clearData = function(){
  this.element.innerHTML = "";
};

BeersListView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = BeersListView;
