var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  console.log(item + " has been added to your cart.");

// for (let i = 0; i < item.length; i++)
  var itemAsObject = new Object({ [item]: Math.floor(Math.random() * (100 - 1)) + 1});
  console.log("itemAsObject", itemAsObject);
  cart.push(itemAsObject);
  return cart;



}


function viewCart() {
  // console.log("test", Object.values(cart));
  if (cart.length > 0) {
       if (cart.length === 1) {
          console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] +".");
        }

        if (cart.length === 2) {
          console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] +" and " + Object.keys(cart[1]) + " at $" + cart[1][Object.keys(cart[1])] + ".");
        }

        if (cart.length >= 3) {
          var itemList = [];
          for (let i = 0; i < cart.length; i++) {
           itemList.push(Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])]);
          //  console.log(itemList);
          }
          var last = itemList.pop();
          console.log("In your cart, you have " + itemList.join(", ") + ", and " + last + ".");
        }


    } else {
        console.log("Your shopping cart is empty.");
      }

  }

function total() {
  let cartTotal = [];
  for (var i = 0; i < cart.length; i++) {

    cartTotal.push(cart[i][Object.keys(cart[i])]);

          }
  console.log("cartTotal", cartTotal);
var totalValue = cartTotal.reduce(function(sum, value) { return sum + value;}, 0);

console.log("totalValue", totalValue);
return totalValue;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
      console.log("property check", cart[i].hasOwnProperty(item));

    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i, 1);
      console.log(cart);
      return cart;
    }


    }

        console.log("That item is not in your cart.");
        return cart;
  // write your code here
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log("Your total cost is $" + total(cart) +", which will be charged to the card " + cardNumber +".");
    cart.length = 0;
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  // write your code here
}
