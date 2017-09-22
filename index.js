var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var object = new Object();
 var price = Math.floor(Math.random() * 100) + 1
 object[item] = price
 cart.push(object)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var msg;
  if (cart.length == 0){
      msg = "Your shopping cart is empty."
  }
  else if (cart.length == 1){
      msg = "In your cart, you have"
      for (var key in cart[0])
      {
            msg += ` ${key} at $${cart[0][key]}.`
            break;
      }
  }
  else if (cart.length == 2){
      msg = "In your cart, you have"
      for (var key in cart[0])
      {
            msg += ` ${key} at $${cart[0][key]} and`
            break;
      }
      for (var key in cart[1])
      {
            msg += ` ${key} at $${cart[1][key]}.`
            break;
      }
  }
  else{
      msg = "In your cart, you have"

      for (var i=0; i<cart.length ; i++)
      {
          for (var key in cart[i])
          {
                msg += ` ${key} at $${cart[i][key]}`
          }
          if (i < cart.length-1 )
          {
              msg += ","
          }
          if (i == cart.length-2 ){
              msg += " and"
            }
      }
      msg += "."
  }
  console.log(msg)
  return msg;

}

function total() {
  // write your code here
  var sum = 0;
  for (var i=0; i<cart.length ; i++)
  {
      for (var key in cart[i])
      {
            sum += cart[i][key]
      }
  }

  return sum;

}

function removeFromCart(item) {
    var found = false;
    var i =0;
    while (!found && i++ < cart.length){
        if (cart[i].hasOwnProperty(item)){
            cart.splice(i, 1);
            found=true;
        }
    }

    if (!found)
        console.log("That item is not in your cart.")

    return cart;



}

function placeOrder(cardNumber) {
    if (cardNumber === undefined){
        console.log("Sorry, we don't have a credit card on file for you.");
    }
    else{
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        cart = [];
    }
    return cart;




}
