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

/*
it("returns a message indicating that the item has been added", function() {
    expect(addToCart("ice cream")).toEqual("ice cream has been added to your cart.");

    expect(addToCart("juice")).toEqual("juice has been added to your cart.");
  });
});
  
*/

function viewCart() {
  
 
}
  
function total() {
  
}



 function removeFromCart(item) {
  
}



function placeOrder(cardNumber) {

  
}

