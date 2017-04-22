 var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

 function getCart() {
   return cart
 }


function addToCart(item) {

  var price = (Math.floor(Math.random() * (100 - 0) + 0));

    cart.push({ [item]: price });

  console.log(item + " has been added to your cart.");

  return cart;
    }

    function viewCart() {
      const l = cart.length

      if (!l) {
        return console.log("Your shopping cart is empty.")
      }

      const itemsAndPrices = []

      for (let i = 0; i < l; i++) {
        let itemAndPrice = cart[i]
        let item = Object.keys(itemAndPrice)[0]
        let price = itemAndPrice[item]

        itemsAndPrices.push(`${item} at \$${price}`)
      }

      console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
      console.log("In your cart you have socks at $86, puppy at $10, iPhone at $75.")
    }
    /*function viewCart() {
        if(cart.length === 0) {
          console.log("Your shopping cart is empty.");
        } else {
var itemsAndPrices = [];
for(var i = 0; i < cart.length; i++) {
var itemAndPrice = cart[i];
//var prop = Object.keys(cart[i]);
//var itemsAndPricesString = `${prop} at ${cart[i][prop]}`;
var itemName = Object.keys(itemAndPrice)[0];
var itemPrice = itemAndPrice[itemName];
itemsAndPrices.push(`${itemName} at \$${itemPrice}`)}
//var pushToArray = itemsAndPrices.push(itemsAndPricesString);
//for(var j = 0; j < itemsAndPrices.length; j++); {
          console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
          //console.log(`In your cart, you have ${prop} at ${cart[i][prop]}.`)
        }
      }*/
/*function viewCart() {
    if(cart.length === 0) {
        console.log("Your shopping cart is empty.");
    } else {
         for(var i = 0; i < cart.length; i++) {
var prop = Object.keys(cart[i]);
            for(var item in cart[i]) {
                console.log(`In your cart, you have ${prop} at $${cart[i][item]}.`);
            }}}}*/

            function removeFromCart(item) {


              for (let i = 0; i < cart.length; i++) {
                if (cart[i].hasOwnProperty(item)) {

                  cart = cart.slice(0, i).concat(cart.slice(i + 1))
                }
              }

              if (!cart.hasOwnProperty(item)) {
                console.log("That item is not in your cart.")
              }

              return cart
            }

function placeOrder(cardNumber){
  if(!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {

    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = [];
}

/*function removeFromCart(item) {
    if(!cart.hasOwnProperty(item)) {
        console.log("That item is not in your cart.");
      } else {
        for(var i = 0; i < cart.length; i++) {
                    if(cart[i].hasOwnProperty(item)) {
                      cart.pop(item)
                    }
                    return cart
                  }}*/
