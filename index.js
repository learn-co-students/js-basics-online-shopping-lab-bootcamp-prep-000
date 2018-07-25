var cart = {cereal: 'Frosted Flakes', poultry: 'Raw Chicken', coldcuts: 'Turkey Breast', fruit:'Strawberries'};

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


  
function addToCart(itemName) {
   var itemPrice = Math.floor(Math.random()*100+1)
  var newObject={itemName: itemName, itemPrice: itemPrice}
  
  cart.push(newObject)

  return itemName + " has been added to your cart.";
}


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// Get the size of an object
var size = Object.size(cart);

function viewCart() {
  
  for (i=1, i<csize, i++){
    return "In your cart, you have " + 
    
  }
  return "In your cart, you have"
}}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
