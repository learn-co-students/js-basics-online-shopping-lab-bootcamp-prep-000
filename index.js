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
 var price = Math.floor((Math.random() * 100) + 1);

 cart.push({[item]: price});
 // Add new items with price to cart

 console.log(`${item} has been added to your cart.`);

 return cart;
}

function viewCart() {
  // write your code here


    var cartSpread = ``
    var output = 'In your cart, you have'
    if (cart.length > 0){
      for (var i = 0; i < cart.length; i++){
        if (cart.length === 1){
          for (var key in cart[i]){
            var val = cart[i][key]
          }
          cartSpread = `${key} at $${val}`
        } else if (cart.length === 2) {
            for (var key in cart[i]){
              var val = cart[i][key]
                if (i === 0) {
                  cartSpread = `${key} at $${val} and `
                } else {
                  cartSpread =  cartSpread + `${key} at $${val}`
                }
              }
            } else if (cart.length > 2) {
                for (var key in cart[i]){
                  var val = cart[i][key]
                  if (i < cart.length -1){
                    cartSpread = cartSpread + `${key} at $${val}, `
                  } else {
                    cartSpread = cartSpread + `and ${key} at $${val}`
                  }
                }
              }
            }
              console.log(`${output} ${cartSpread}.`)
          } else {
            console.log("Your shopping cart is empty.")
        }

  }

function total() {
  // write your code here

  var cartTotal = 0;
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]){
      var val = cart[i][key];
      cartTotal += val;
      // Add up the total amount.
    }
  }

  console.log(cartTotal);
  return cartTotal;
}

function removeFromCart(item) {

  var itemsRemoved = [];
  // Array for items removed in this function. If it's empty, we'll let user know it's not in the cart

  for (var i = 0; i < cart.length; i++){
    // Loop through the items in the cart

    for (var key in cart[i]){
      // Find the key in each index of array
      if(cart[i].hasOwnProperty(key)){
        // Confirms the key is a direct property of the object
        if(key === item){
            console.log("It exists! Now I can remove the item.")
            itemsRemoved.push(i);
            console.log("Items removed: " + itemsRemoved);
            cart.splice(i, 1);
            return cart;
            // If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.
        }
      }else{
        console.log("Some error occurred.");
      }
    }
  }

  if(itemsRemoved.length === 0){
    // If cart does NOT contain a matching item, print out That item is not in your cart. and return the unchanged cart.
    console.log("That item is not in your cart.")
    return cart;
  }



}

function placeOrder(cardNumber) {
  // write your code here
  var totalCost = total();

  if (cardNumber !== undefined) {
      // Place the order for everything in cart
      console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`);

      // Empty the cart
      cart = [];
    } else {
      console.log("Sorry, we don\'t have a credit card on file for you.");
    }
}
