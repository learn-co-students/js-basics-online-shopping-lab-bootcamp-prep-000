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
 
 if(cart.length === 0) {
  return 'Your shopping cart is empty.';
} 
else {
 var array = [];
 for(var i = 0; i < cart.length; i++) {
   array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
 }
 var output = 'In your cart, you have ';
 if(cart.length === 1) {
   output += `${array[0]}.`;
 }
 if(cart.length === 2) {
   output += `${array[0]}, and ${array[1]}.`;
 }
 if(cart.length === 3) {
   var end = array.pop();
   var middle = array.join(', ');
   output += `${middle}, and ${end}.`;
 }

return output; 
}
}

function total() {
let sum = 0;
for(let i = 0; i < cart.length; i++) {
  sum += getCart()[i].itemPrice;
}
return sum;
}


function removeFromCart(item) {
for(let i = 0; i < cart.length; i++) {
  if(item === getCart()[i].itemName) {
    cart.splice(i, 1);
  }

}
let itemNotInCart = true;
if(itemNotInCart) {
  return 'That item is not in your cart.';
}
}

function placeOrder(cardNumber) {
  
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