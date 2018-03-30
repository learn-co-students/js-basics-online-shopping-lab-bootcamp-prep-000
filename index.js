var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//function itemConstructor(name) {
//  return {
//    itemName: name,
//    itemPrice: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1)) + Math.ceil(1)),
//  }
//}

function addToCart(nameOfItem) {
  // var newItem = itemConstructor(nameOfItem); Alternate solution, using variable
  // console.log(newItem);                      Alternate solution, using variable
  //cart.push(itemConstructor(nameOfItem));
  cart.push(
    {
      itemName: nameOfItem,
      itemPrice: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1)) + Math.ceil(1))
    }
            );
  //  return `${newItem.itemName} has been added to your cart.` Alternate solution, using variable
  return `${nameOfItem} has been added to your cart.`
}

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  }

  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    var listOfItems = "";
      for (var i = 0; i < cart.length -1; i++) {
        listOfItems += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
        listOfItems += `and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}`

    return `In your cart, you have ${listOfItems}.`
  }
}

function total() {
  return cart.reduce( function(accumulator, item) {
        return accumulator + item.itemPrice;
    }, 0);
}

function removeFromCart(item) {
  var listOfItemNames = [];
  for (var i = 0; i < cart.length; i++) {
    listOfItemNames.push(cart[i].itemName)
    }
      if (listOfItemNames.includes(item)) {
      cart.splice(listOfItemNames.indexOf(item), 1);
      listOfItemNames.splice(listOfItemNames.indexOf(item), 1);
      console.log(listOfItemNames);
      return cart
    } else {
      return "That item is not in your cart."
    }
}

function placeOrder(cardNumber) {
  console.log(cardNumber);
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var finalTotal = total();
    cart = [];
    return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
