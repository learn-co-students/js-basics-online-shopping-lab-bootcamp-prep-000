var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1; 
 var obj = Object.assign({[item]: price});
 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart ;
}

function viewCart() {
  if (cart.length === 0){
    return console.log("Your shopping cart is empty.");
  } else {
    var li = "In your cart, you have";
    for(var i = 0; i < cart.length; i++){
      var currItem = cart[i];
      var itemName = Object.getOwnPropertyNames(currItem);
      var itemPrice = currItem[itemName];
      if (cart.length >= 3){
        //3 plus items
          if(i == cart.length - 1){ 
            li = `${li} and ${itemName} at $${itemPrice}.`;
          } else {
            li = `${li} ${itemName} at $${itemPrice},`
          }
      } else if (cart.length == 2){
        var nextItem = cart[1];
        var nitemName = Object.getOwnPropertyNames(nextItem);
        var nitemPrice = nextItem[nitemName];
        li = `${li} ${itemName} at $${itemPrice} and ${nitemName} at $${nitemPrice}.`;
        break;
        //2 items in cart
      } else if(cart.length == 1){ 
        li = `${li} ${itemName} at $${itemPrice}.`;
        //1 item in cart
      }
    }
    return console.log(li);
  }
}

function total() {
  var sum = 0;
  for(var i = 0; i < cart.length; i++){
    var currItem = cart[i];
    var itemName = Object.getOwnPropertyNames(currItem);
    var itemPrice = currItem[itemName];
    sum += itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for(var i = 0; i <= cart.length; i++){
    var currItem = cart[i];
    const checkItemsCart = JSON.stringify(cart); 
    if(checkItemsCart.includes(item) == false){
      return console.log("That item is not in your cart.");
    } else if (currItem.hasOwnProperty(item)){
      cart.splice(i,1);
      break;
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var cartTotal = total();
    cart = [];
    return console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
  }
}
