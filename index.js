var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)});
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart() {
    if (cart.length === 0) {
      console.log("Your shopping cart is empty.")
    } else {
      var introString = "In your cart, you have";
      var listArray =[];
      var lastItem = "";
      for (var i = 0; i < cart.length; i++) {
        var newObj = Object.assign({}, cart[i]);
        var vCItem = Object.keys(cart[i]);
        var vCCost = newObj[vCItem];
        if (i < cart.length -1) {
          listArray.push(" " + vCItem + " at $" + vCCost);
          } else{
            lastItem = " " + vCItem + " at $" + vCCost + ".";
          }
        }
      }
      if (cart.length === 1) {
        console.log(introString + lastItem)
      } else if (cart.length === 2){
        console.log(introString + listArray + " and" + lastItem)
      } else if (cart.length > 2) {
        console.log(introString + listArray + ", and" + lastItem)
      }
  }


function total() {
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    var newObj = Object.assign({}, cart[i]);
    var tItem = Object.keys(cart[i]);
    var tCost = newObj[tItem];
    totalCost += tCost;
  }
  return totalCost
}

function removeFromCart(item) {
  var count = 0;
  for (var i = 0; i < cart.length; i++) {
      var rFCObject = cart[i];
      if (rFCObject.hasOwnProperty(item) === true) {
        count += 1;
        return cart = cart.slice(0, i).concat(cart.slice(i + 1))
      }
    }
  if (count === 0) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (arguments.length === 0) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    var pOTotal = total();
    console.log("Your total cost is $" + pOTotal + ", which will be charged to the card " + cardNumber + ".")
    for (var i = cart.length - 1; i >=0; i--){
      cart.pop();
    }
  }
}
