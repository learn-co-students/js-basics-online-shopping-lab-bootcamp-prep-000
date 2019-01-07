var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  var itemName = {};
  itemName.item = itemPrice;
  
  cart.push({[item] : itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart() {
  if (cart.length === 0){
    console.log ("Your shopping cart is empty.");
  } 
  else if (cart.length === 1){
      var oneItem = Object.keys(cart[0]);
      var onePrice =cart[0][oneItem];
      console.log(`In your cart, you have ${oneItem} at $${onePrice}.`);
  }
  else if (cart.length === 2){
      var firstItem = Object.keys(cart[0]);
      var firstPrice =cart[0][firstItem];
      var secondItem = Object.keys(cart[1]);
      var secondPrice =cart[1][secondItem];
      console.log(`In your cart, you have ${firstItem} at $${firstPrice} and ${secondItem} at $${secondPrice}.`);
  }
  else {
    var items = [];
    for (var i = 0; i < (cart.length-1); i++){
      var item = Object.keys(cart[i]);
      var price =cart[i][item];
        items.push(`${item} at $${price}`);
      }
        var last_item = Object.keys(cart[cart.length -1]);
        items.push(`and ${last_item} at $${cart[cart.length -1][last_item]}`);
        
        
          console.log(`In your cart, you have ${items.join(", ")}.`);
    }
}

  function total() {
   var allThePrices=[];
   for (var i = 0; i < (cart.length); i++){
     var item = Object.keys(cart[i]);
     var price =cart[i][item];
     allThePrices.push(price);
    }
    var sum = allThePrices.reduce((a, b) => a+b, 0);
    return sum;
  }


function removeFromCart(item) {
   for (var i = 0; i < cart.length; i++) {
     if (cart[i].hasOwnProperty(item)) {
       cart.splice(i, 1);
       return cart;
     }
    }
  return console.log("That item is not in your cart.");
  
}

function placeOrder(cardNumber){
  var cca = [];
  cca.push(cardNumber);
  if (cca >= 1){
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart.length = 0;
      return cart;
    
  }else{ 
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
