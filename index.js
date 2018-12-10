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
    return "Your shopping cart is empty."; 
   }
   else {
     var array = [];
     for(var i = 0; i < cart.length; i++) {
       array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
     }
     var output = "In your cart, you have ";
     if(cart.length === 1){
       output += `${array[0]}.`;
     }
     else if(cart.length === 2){
       output += `${array[0]}, and ${array[1]}.`; 
     }
     else if(cart.length > 2) {
       var last = array.pop();
       var middle = array.join(', ');
       output += `${middle}, and ${last}.`;
     }
     return `${output}`;
   }
}
/*
 it("correctly prints a one-item cart", function() {
    addToCart("lemons");
    expect(viewCart()).toEqual(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`);
  });

  it("correctly prints a two-item cart", function() {
    addToCart("mango");
    addToCart("nuts");

    expect(viewCart()).toEqual(
      `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
    );
  });

  it("correctly prints a three-or-more-item cart", function() {
    addToCart("orange");
    addToCart("pear");
    addToCart("quince");

    

    expect(viewCart()).toEqual(
      `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
    );
  });
}); 
*/


function total() {
  
}


 function removeFromCart(item) {
  var itemNotInCart = true;
  
}


function placeOrder(cardNumber) {
  
}
