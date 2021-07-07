var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 //set a random integer from 1 t0 100 as the price of the item
 var price = Math.random();
 price = Math.floor(price * 100);

 //define the var item as an object containin an itemName and itemPrice
 item = {
   itemName: item,
   itemPrice: price
 };

 //push the new object item onto the array cart
 cart.push(item);

 //return the message tht the new item has been added
 return item.itemName + " has been added to your cart."
}


function viewCart() {
  var itemList = [];
  // write your code here

  if (cart === undefined || cart.length == 0)
    return "Your shopping cart is empty."

  for (var c = 0; c < cart.length; c++) {
    if (c == 0) {
      itemList = "In your cart, you have ";
      if (cart.length == 1) {
        itemList += cart[c].itemName + " at $" + cart[c].itemPrice + ".";
        return itemList
      }
      itemList += cart[c].itemName + " at $" + cart[c].itemPrice;
    }

    if (c > 0) {
      if (c + 1 == cart.length) {
        itemList += ", and " + cart[c].itemName + " at $" + cart[c].itemPrice + ".";
        return itemList
      }

      itemList += ", " + cart[c].itemName + " at $" + cart[c].itemPrice;
    }


  }
}

function total() {
  // write your code here
  var tot = 0;
  for (var t = 0; t < cart.length; t++) {
    tot += cart[t].itemPrice;
  }
  return tot
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (item == cart[i].itemName) {
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined || cardNumber.length == 0)
    return "Sorry, we don't have a credit card on file for you."
  var tot = total();
  cart = [];
  return "Your total cost is $" + tot + ", which will be charged to the card " + cardNumber + "."
}
