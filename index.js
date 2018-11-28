var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 });
  return `${item} has been added to your cart.`; 
}


function viewCart() {
  var array = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
    for(var i = 0; i < cart.length; i++) {
     if(cart.length === 1) {
       return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
     }
     else if(cart.length === 2) {
       return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and ${getCart()[i + 1].itemName} at $${getCart()[i + 1].itemPrice}.`;
     }
     else if(cart.length >= 3) {
       return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}, ${getCart()[i + 1].itemName} at $${getCart()[i + 1].itemPrice}, and ${getCart()[i + 2].itemName} at $${getCart()[i + 2].itemPrice}.`;
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

/*
if (item !== getCart()[i].itemName)
*/

 function removeFromCart(item) {
  var string = "";
  var unmatchedItem = true;
  for(var i = 0; i < cart.length; i++) {
  if(item === getCart()[i].itemName) {
    cart.splice(i, 1);
  }
  }
  if(unmatchedItem) {
    return"That item is not in your cart.";
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
  const cartTotal = total();
  
  if(arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    cart.length = 0;
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}

/*
describe("placeOrder()", function() {
  it("doesn't place the order if a credit card number is not provided", function() {
    
    expect(placeOrder()).toEqual("Sorry, we don't have a credit card on file for you.");
  });

  it("places an order when a credit card number is provided", function() {
    addToCart("zucchini");

    const cartTotal = total();
    const cardNumber = Math.floor(Math.random() * 100000000);

    

    expect(placeOrder(cardNumber)).toEqual(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
  });

  it("empties the cart", function() {
    addToCart("apples");

    placeOrder(12345678);

    expect(getCart()).toEqual([]);
  });
});
*/

