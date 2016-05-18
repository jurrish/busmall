var allProducts = [];
var productNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'unicorn', 'sweep', 'usb', 'water_can', 'wine_glass'];

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
  totalClicks: 0,
  elObjOne: document.getElementById('image-one'),
  elObjTwo: document.getElementById('image-two'),
  elObjThree: document.getElementById('image-three'),
  imageEls: document.getElementById('images'),
  resultsEls: document.getElementById('results'),
  showResultsEls: document.getElementById('showResults'),
  resetEls: document.getElementById('reset'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * productNames.length);
  },

  displayImages: function() {
    productRank.elObjOne.src = allProducts[this.getRandomIndex()].path;
    productRank.elObjTwo.src = allProducts[this.getRandomIndex()].path;
    productRank.elObjThree.src = allProducts[this.getRandomIndex()].path;
    if(productRank.elObjOne.src === productRank.elObjTwo.src || productRank.elObjOne.src === productRank.elObjThree.src || productRank.elObjTwo.src === productRank.elObjThree.src) {
      this.displayImages();
    } else {
      this.elObjOne.id = this.elObjOne.name;
      this.elObjTwo.id = this.elObjTwo.name;
      this.elObjThree.id = this.elObjThree.name;
    }
  },
  //build event listener, and everytime it's clicked, increment the counter??
  tallyClicks: function(elId) {
    for (var i in allProducts) {
      if (allProducts[i].name === elId) {
        allProducts[i].tally += 1;
        this.totalClicks += 1;
        console.log(allProducts[i].name + ' has ' + allProducts[i].tally + ' votes');
        console.log(this.totalClicks + ' : this.totalClicks');
      }
    }
  },

  displayResults: function() {
    var ulEl = document.createElement('ul');
    for(var i in allProducts) {
      var liElOne = document.createElement('li');
      var str = allProducts[i].name + ' has ' + allProducts[i].tally + ' votes';
      liElOne.textContent = str.charAt(0).toUpperCase() + str.slice(1);
      ulEl.appendChild(liElOne);
    }
    var liElTwo = document.createElement('li');
    liElTwo.textContent = 'Total Clicks = ' + productRank.totalClicks;
    ulEl.appendChild(liElTwo);
    this.resultsEls.appendChild(ulEl);
  }
  // showButton: function() {
  //
  // }
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
