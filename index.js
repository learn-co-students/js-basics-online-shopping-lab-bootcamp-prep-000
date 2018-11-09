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
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
}

/*
  describe("viewCart()", function() {
  it("prints 'Your shopping cart is empty.' if the cart is empty", function() {
    expect(viewCart()).toEqual("Your shopping cart is empty.")
  });

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



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
