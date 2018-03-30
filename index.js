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

function containsObject(item) {
  var listOfItemNames = [];
  for (var i = 0; i < cart.length; i++) {
    listOfItemNames.push(cart[i].itemName)
    }
    console.log(listOfItemNames);
    console.log(listOfItemNames.indexOf(item));
    console.log(listOfItemNames.includes(item));
    if (listOfItemNames.includes(item)) {
      listOfItemNames.splice(listOfItemNames.indexOf(item), 1);
      console.log(listOfItemNames);
      console.log(cart);
      cart.splice(cart.indexOf(item) - 1, 1);
      console.log(cart);
      return "it's in the list."
    } else {
      return "it's NOT in the list."
    }
    //console.log((listOfItemNames.indexOf(item)));
    //listOfItemNames.splice(listOfItemNames.indexOf(item),1);
    //console.log(listOfItemNames);
  }

function removeFromCart(item) {
  //var removeIndex = cart.map(function(item) { return item.id; }).indexOf(item);
  //console.log(removeIndex);
  index = cart.indexOf(item);
  console.log(index)
  //cart.splice(index, 1);
  //return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
