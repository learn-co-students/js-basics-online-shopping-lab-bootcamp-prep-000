var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var object = {
   itemName: `${item}`,
   itemPrice: Math.floor(Math.random() * 99) + 2
 };
 cart.push(object);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var array = [];
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
    for (let i = 0; i < cart.length; i++) {
      if(cart.length === 1) {
    array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
    return `In your cart, you have ${array}.`;
     }
     else if(cart.length === 2) {
       array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and ${getCart()[i + 1].itemName} at $${getCart()[i + 1].itemPrice}`);
       return `In your cart, you have ${array}.`;
     }
     else {
      array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}, ${getCart()[i + 1].itemName} at $${getCart()[i + 1].itemPrice}, and ${getCart()[i + 2].itemName} at $${getCart()[i + 2].itemPrice}`);
       return `In your cart, you have ${array}.`; 
     }
    }
  }
}
  
function total() {
  var sum = 0;

  for(var i = 0; i < cart.length; i++) {
    sum += getCart()[i].itemPrice;
  }
  return sum;
}


/*function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (!!cart[i]) {
      cart.splice(i, 1);
    }
  }
  return cart;
}*/


 function removeFromCart(item) {
  var itemInCart = false;
  for(var i = 0; i < cart.length; i++){
    if (item === getCart()[i].itemName) {
      
      cart.splice(i, 1);
    }
  } 
  if (!itemInCart) {
    return "That item is not in your cart.";
  }
  return cart;
}

/*
describe("removeFromCart()", function() {
  it("removes the specified item from the cart", function() {
    addToCart("vanilla");
    addToCart("watermelon");
    addToCart("yams");

    removeFromCart("watermelon");

    const firstItemName = getCart()[0].itemName;
    const secondItemName = getCart()[1].itemName;

    expect(firstItemName).toEqual("vanilla");
    expect(secondItemName).toEqual("yams");

    removeFromCart("yams");

    expect(getCart().length).toEqual(1);
  });

  it("alerts you if you're trying to remove an item that isn't in your cart", function() {
    // Repeat item name from previous test to prevent hard-coding.
    expect(removeFromCart("yams")).toEqual("That item is not in your cart.");
  });
});
*/


function placeOrder(cardNumber) {
  // write your code here
}