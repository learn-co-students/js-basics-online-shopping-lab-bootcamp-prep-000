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

    ;

    expect(viewCart()).toEqual(
      `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
    );
  });
});

*/
  
function total() {
  
  for(var i = 0; i < cart.length; i++) {
    sum = getCart()[i].itemPrice;
    sum = sum + 1;
  }
  return sum;
}

/*
describe("total()", function() {
  it("adds up the price of all items in the cart", function() {
    addToCart("sorghum");
    addToCart("tarragon");

    const sorghumCost = getCart()[0].itemPrice;
    const tarragonCost = getCart()[1].itemPrice;

    let totalCost = sorghumCost + tarragonCost;

    expect(total()).toBe(totalCost);

    addToCart("urchin");

    const urchinCost = getCart()[2].itemPrice;

    totalCost += urchinCost;

    expect(total()).toBe(totalCost);
  });
});

*/



 function removeFromCart(item) {
  
}



function placeOrder(cardNumber) {

  
}

