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
  if(cart.length === 0){
    return`Your shopping cart is empty.`;
  }
  
  else{
     var array = [];
     for(var i = 0; i < cart.length; i++){
 array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
     }
     var output = `In your cart, you have `;
     if(cart.length === 1){
       output += `${array[0]}.`;
     }
     else if(cart.length === 2){
       output += `${array[0]}, and ${array[1]}.`;
     }
      else if(cart.length>2){
          var last = array.pop();
        var middle = array.join(', ');
       output += `${middle}, and ${last}.`;
     }
     return`${output}`;
   }
}


function total() {
  var sum = 0;
  for(let i = 0; i < cart.length; i++) {
    sum += getCart()[i].itemPrice;
  }
  return sum;
}


 function removeFromCart(item) {
  var itemNotInCart = true;
  for(var i = 0; i < cart.length; i++) {
    if(item === getCart()[i].itemName) {
      cart.splice(i, 1);
    }
  }
  if(itemNotInCart) {
    return "That item is not in your cart.";
  }
  else{
    cart.length = 0;
  }
}


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
