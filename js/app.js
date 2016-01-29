(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Some gems have hidden quality beyond their luster, beyond their shine. Dodeca is one of them',
      canPurchase: true,
      soldOut: true,
      images: [
        {
          full: 'images/gem1.jpg',
          thumb: 'images/gem1.jpg'
        }
      ],
      reviews: [
        {
          stars: 3,
          body: 'Its ok i guess',
          author: 'gerry@mcquire@.nl',
          createdOn: 'Nov 21, 2015'
        },
        {
          stars: 5,
          body: 'I love this product!',
          author: 'John@Doe.nl',
          createdOn: 'Nov 22, 2015'
        }
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 2.00,
      description: 'For the mathematics lovers',
      canPurchase: false,
      images: [
        {
          full: 'images/gem2.png',
          thumb: 'images/gem2.png'
        }
      ]
    }
  ];
})();
