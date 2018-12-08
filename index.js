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
     var output = "In your cart, you have ";
     var array = [];
     if(cart.length === 1) {
       return output += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
     }
     else if(cart.length === 2) {
       return output += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
     }
     else if(cart.length === 3) {
       for(let i = 0; i < cart.length; i++) {
         var end = array.pop();
         var middle = array.join(', ');
         array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
         output += `${middle} and ${end}`;
       }
       return `${output}.`;
     }
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
