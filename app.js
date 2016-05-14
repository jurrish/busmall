var allProducts = [];
var productNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name, path) {//Object constructor
  // TODO: Build your constructor and necessary properties.
  this.name = name;
  this.path = path;
  this.tally = 0;
  allProducts.push(this);
}

(function addingPhotos () {
  for(var i = 0; i < productNames.length; i++) {
    new Product(productNames[i], '201images/' + productNames[i] + '.jpg');
  }
})();

var productRank = {
  elImgOne: document.getElementById('image-one'),
  elImgTwo: document.getElementById('image-two'),
  elImgThree: document.getElementById('image-three'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * productNames.length);
  },

  displayImages: function() {
    productRank.elImgOne.src = allProducts[this.getRandomIndex()].path;
    productRank.elImgTwo.src = allProducts[this.getRandomIndex()].path;
    productRank.elImgThree.src = allProducts[this.getRandomIndex()].path;
    if(productRank.elImgOne.src === productRank.elImgTwo.src || productRank.elImgOne.src === productRank.elImgThree.src || productRank.elImgTwo.src === productRank.elImgThree.src) {
      this.displayImages();
    }
  },
};
//   // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
//   // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.
//
//   getRandomIndex: function() {
//     // TODO: Hmm... what's going to happen here?
//     Math.floor(randomnumber() * productName.length)
//   },
//
//   displayImages: function() {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   tallyClicks: function(elementId) {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   displayResults: function() {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   showButton: function() {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   onClick: function() {
//     // TODO: Hmm... what's going to happen here?
// };
