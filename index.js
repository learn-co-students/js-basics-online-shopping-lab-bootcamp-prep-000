var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var addedItem = {itemName:item, itemPrice:(Math.floor(Math.random() * 101))}
 cart.push(addedItem);
 //itemCap = item.charAt(0).toUpperCase() + item.slice(1);
 return(item + " has been added to your cart.");
}

function viewCart() {
  if (cart.length > 1) {
    var cartString = [];
      for (var i = 0; i < (cart.length - 1); i++) {
        cartString.push(" " + (cart[i].itemName) + " at $" + cart[i].itemPrice);
      }
     cartString.push(" and " + (cart[cart.length - 1].itemName) + " at $" + cart[cart.length - 1].itemPrice); 
    return("In your cart, you have" + cartString.toString() + ".");
  } else if (cart.length === 1) {
    return("In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".");
  } else {
    return("Your shopping cart is empty.");
  }
}

function total() {
  let t = 0;
  for (var i = 0; i < cart.length; i++) {
    t = t + cart[i].itemPrice;
  }
  return(t);
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if(!!cardNumber) {
    let price = total();
    cart = [];
    return("Your total cost is $" + price + ", which will be charged to the card " + cardNumber + ".");
  } else {
    return("Sorry, we don't have a credit card on file for you.");
  }
}

console.log(addToCart('noodles'));
console.log(addToCart('soy sauce'));
console.log(addToCart('bacon'));
console.log(viewCart());
console.log(total());
removeFromCart('noodles');
console.log(viewCart());
console.log(total());
console.log(placeOrder(67892847));