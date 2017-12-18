var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.floor(Math.random()*100)})
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  if (cart.length === 0){
    console.log(`Your shopping cart is empty.`);
  } else if (cart.length === 1){
    var oneItem = Object.keys(cart[0]);
    var onePrice = Object.values(cart[0]);
    console.log(`In your cart, you have ${oneItem} at $${onePrice}.`)
  } else if (cart.length === 2){
      var string = "";
      var lastItem = "";
        for(var i=0; i < cart.length; i++){
          if (i === cart.length-1) {
            var lastItemName = Object.keys(cart[i]);
            var lastPrice = Object.values(cart[i]);
            lastItem = `and ${lastItemName} at $${lastPrice}`;
          } else {
            var item = Object.keys(cart[i]);
            var price = Object.values(cart[i]);
            string += ` ${item} at $${price},`
          }
        }
        string = string.slice(0,-1);
        console.log(`In your cart, you have${string} ${lastItem}.`);
    } else {
      var string = "";
      var lastItem = "";
      for(var i=0; i < cart.length; i++){
        if (i === cart.length-1) {
          var lastItemName = Object.keys(cart[i]);
          var lastPrice = Object.values(cart[i]);
          lastItem = `and ${lastItemName} at $${lastPrice}`;
        } else {
          var item = Object.keys(cart[i]);
          var price = Object.values(cart[i]);
          string += ` ${item} at $${price},`
        }
    }
    console.log(`In your cart, you have${string} ${lastItem}.`);
  }
}



function total() {
  total = 0;
  for(var i=0;i<cart.length;i++){
    var price = parseInt(Object.values(cart[i]));
    total += price;
  }
  return total;
}

function removeFromCart(item) {
  for(var i=0;i<cart.length;i++){
    var itemName = Object.keys(cart[i]);
    if(itemName[0] === item){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
}



function placeOrder(cardNumber) {
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
}
