const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function (data) {
  this.data = data;
};

Beers.prototype.bindEvents = function () {
  // PubSub.publish('Beers:data-ready', this.data);

  PubSub.subscribe('SelectView:change', (event) => {
      beer = event.detail;
      const selectedBeer = this.data[beer];
      this.getData(beer);
  });
};

Beers.prototype.getData = function (beer) {
  // const url = `https://api.punkapi.com/v2/beers?abv_gt=${beer}`;
  const url = "https://api.punkapi.com/v2/beers";
  const request = new RequestHelper(url);
  request.get()
    .then((data) => {
      this.data = data;
      PubSub.publish('Beers:data-ready', this.data);
    })
    .catch((message) => {
      console.error(message);
    });
};

module.exports = Beers;
