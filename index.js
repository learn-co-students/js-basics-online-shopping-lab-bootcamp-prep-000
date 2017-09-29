var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
      function randomlyGenerated(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      var randomNumber = randomlyGenerated(1,100);
      cart.push({[item] : randomNumber});

      console.log(`${item} has been added to your cart.`);
      return cart;
}

function viewCart() {
    var cl = cart.length;
    var itemAndPrice;
    var item;
    var price;
    var itemsAndPrices = [];
    var iAP = itemsAndPrices;
    var output = "";
    var outString = "";

    if (cl === 0) {
      console.log("Your shopping cart is empty.");
    }

    for (var i = 0; i < cl; i++) {
      itemAndPrice = cart[i]; // returns Object from cart array
      item = Object.keys(itemAndPrice)[0]; // returns string value of Object key
      price = itemAndPrice[item]; // returns value of object key property

      itemsAndPrices.push(`${item} at $${price}`); // adding items and price to array
    }

    if(iAP.length === 1){
      output = iAP[0];
    }
    else if (iAP.length === 2) {
      output = iAP.join(" and ");
    }
    else if (iAP.length > 2) {
      outString = iAP.join(", ");
      output = outString.replace(iAP[iAP.length - 1],`and ${iAP[iAP.length - 1]}`);
    }

      console.log(`In your cart, you have ${output}.`);
}

function total() {
    var cl = cart.length;
    var itemAndPrice;
    var item;
    var price;
    var allPrices = [];
    var total = 0;

    for (var i = 0; i < cl; i++) {
        itemAndPrice = cart[i]; // returns object from cart array
        item = Object.keys(itemAndPrice)[0]; // returns object key in string format
        price = itemAndPrice[item]; // returns value of object key property
        allPrices.push(price);
    }

    for (var x = 0; x < allPrices.length; x++) {
        total += parseInt(allPrices[x]);
    }

    return total;
}

function removeFromCart(item) {
    var itemInCart = false;

    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        itemInCart = true;
        cart.splice(i,1);
        break;
      }
    }

    if (!itemInCart) {
      console.log("That item is not in your cart.");
    }

    return cart;
}

function placeOrder(cardNumber) {
    if (!cardNumber) {
      console.log("Sorry, we don't have a credit card on file for you.");
    }

    else{
      var payOut = total();
      cart.splice(0);
      console.log(`Your total cost is $${payOut}, which will be charged to the card ${cardNumber}.`);
    }
}
