var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item,
    itemPrice: Math.floor(Math.random() * 100) + 1});
    getCart;
    return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  
  else{
    let output = 'In your cart, you have ';
    let array = [];
    for(let i = 0; i < cart.length; i++) {
      array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
    }
    
    if(cart.length === 1) {
      output += `${array[0]}.`;
    }
    if(cart.length === 2) {
      output += `${array[0]}, and ${array[1]}.`;
    }
    if(cart.length > 2) {
      let end = array.pop();
      let middle = array.join(', ');
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
  let itemNotInCart = true;
  
  for(let i = 0; i < cart.length; i++) {
    if(item === getCart()[i].itemName)
    cart.splice(i, 1);
  }
  
  if(itemNotInCart) {
    return 'That item is not in your cart.';
  }
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