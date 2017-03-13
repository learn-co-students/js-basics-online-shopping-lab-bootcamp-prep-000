var cart = [];
//var itemName = Object.keys(cart);


function setCart(newCart) {
  cart = newCart;
}

function getCart(){

  return cart;
}

function addToCart(item){
  var price = (Math.floor((Math.random() * 100)));
  var itemObj = {};
  itemObj[item] = price;
  cart.push(itemObj);
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart() {
   var itemArray = [];

   if (cart.length > 0) {
   for (var i = 0; i < cart.length; i++){
   var itemObj = cart[i];
   var secondItemObj = Object.keys(itemObj);
       itemArray.push(Object.keys(itemObj) + " at $" + itemObj[secondItemObj]);

           }
              console.log("In your cart, you have " + itemArray.join(', ') + ".");
   }


  console.log("Your shopping cart is empty.");

}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){

    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
  }
   }
   console.log("That item is not in your cart.");
  }

function placeOrder(creditCard){
  //returns the TOTAL function as a string, kinda screwy
  var cardList = [];
  if (creditCard > 0) {
    cardList.push(creditCard);
    console.log("Your total cost is $" + total() + ", which will be charged to the card " +  cardList + ".");
    cart = [];
  }

    console.log("We don't have a credit card on file for you to place your order.");

  //cart = [];
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t;
}
