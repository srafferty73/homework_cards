const BeerView = function(url){
  this.url = url;
}

BeerView.prototype.render = function () {
  const image = document.createElement("img");
  image.src = this.url;
  return image;
}

module.exports = BeerView;
