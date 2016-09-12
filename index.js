var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}



/*
beforeEach(function() {
  setCart([])
  expect.spyOn(console, 'log')
})
afterEach(function() {
  expect.restoreSpies()
})
*/
/*
describe('#addToCart', function() {
  it("should add an item to the cart", function() {
    addToCart('pizza')
    expect(getCart().length).toEqual(1);
  });
  it("logs that the item has been added", function() {
    addToCart('pizza')
    expect(console.log).toHaveBeenCalledWith("pizza has been added to your cart.")
  })
  it("returns the cart", function() {
    expect(addToCart("pizza")).toEqual(getCart())
  })
});
*/

function addToCart(item) {
  var price = Math.floor((Math.random() * 100));
    cart.push({[item]: price});
      console.log(`${item} has been added to your cart.`);
        return cart;
}

/*
describe('#viewCart', function() {
  it("should print each item in the cart and their cost", function() {
    addToCart("socks");
    addToCart("puppy");
    addToCart("iPhone");
    const socksCost = getCart()[0]["socks"];
    const puppyCost = getCart()[1]["puppy"];
    const iPhoneCost = getCart()[2]["iPhone"];
    viewCart();
    expect(console.log).toHaveBeenCalledWith(
      `In your cart, you have socks at $${socksCost}, puppy at $${puppyCost}, iPhone at $${iPhoneCost}.`
    )
  });
  it("should print 'Your shopping cart is empty.' if the cart is empty", function() {
    viewCart();
    expect(console.log).toHaveBeenCalledWith("Your shopping cart is empty.")
  });
});
*/

/*
test - 1. check if cart exisit
       2. set the price of the item at cart[i] to viewPrice.
       3. add the price of each item obj in the cart array index for the length of the array.
              for each price in cart[i], push(`${Object.keys(cart[i])} at $${cart[i][viewPrice]}`) to the viewAnnouncement array.
       4. print "In your cart, you have " + viewAnnouncement + "."
*/

/*
function viewCart() {
  if (cart) {
    var viewAnnouncement = [];
      for (var i = 0; i < cart.length; i++) {
        var viewPrice = Object.keys(cart[i]);
          for (var viewPrice in cart[i]) {
            viewAnnouncement.push(` ${Object.keys(cart[i])} at $${cart[i][viewPrice]}`);
      }
    }         console.log("In your cart, you have " + viewAnnouncement + ".");
  } else {
       console.log("Your shopping cart is empty.");
    }
}
*/

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  } else {
    var viewAnnouncement = [];
      for (var i = 0; i < cart.length; i++) {
        var viewPrice = Object.keys(cart[i]);
          for (var viewPrice in cart[i]) {
            viewAnnouncement.push(` ${Object.keys(cart[i])} at $${cart[i][viewPrice]}`);
      }
    }  return console.log("In your cart, you have" + viewAnnouncement + ".");
  }
}

/*
describe('#total', function() {
  it('adds up the prices of the items in the cart', function() {
    addToCart("socks");
    addToCart("puppy");
    addToCart("iPhone");
    const socksCost = getCart()[0]["socks"];
    const puppyCost = getCart()[1]["puppy"];
    const iPhoneCost = getCart()[2]["iPhone"];
    const totalCost = socksCost + puppyCost + iPhoneCost;
    expect(total()).toEqual(totalCost)
  })
})
*/

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

/*
describe('#removeFromCart', function() {
  it("removes the item from the cart", function() {
    addToCart('pizza')
    expect(hasItem(getCart(), 'pizza')).toBe(true)
    removeFromCart("pizza");
    expect(getCart()).toEqual([]);
  });
  it("alerts you if you're trying to remove an item that isn't in your cart", function() {
    removeFromCart("sock")
    expect(console.log).toHaveBeenCalledWith("That item is not in your cart.")
  });
});
*/

/*
test -  1.  does the cart have the item?
              check each obj in cart index [i] if it hasOwnProperty(item)
        2.  if not, console.log("That item is not in your cart.")
        3.  if so, delete the item from the cart array
        4.  return the cart array
              cart should = []
*/


function removeFromCart(item) {
for (var i = 0; i < cart.length; i++) {
  var cartObj = cart[i];
    var checkProp = cartObj.hasOwnProperty(item);
    if (checkProp === null) {
        return console.log("That item is not in your cart.");
    } else {
        cart.splice(i, 1);
    }
  }
}

/*
function removeFromCart(item) {
for (var i in cart) {
  for (var item in cart[i]) {
    //if (cart.i[item] !== item) {
        cart.splice(i, 1);
    } if (cart.i.hasO)//else {
        return console.log("That item is not in your cart.");
      }
    }
  }
}
*/

/*
~chrome console check~
var obj = [{'pizza': 2}, {'soda': 4}];

function checkProp(item) {
for (var i = 0; i < obj.length; i++) {
  var check = obj[i]
    var newcheck = check.hasOwnProperty(item);
    //console.log(check.hasOwnProperty(item));
    console.log(newcheck);
    if (newcheck === false) {
    console.log("thats not there!");
return console.log(obj);
  } else if (newcheck === true) {
  obj.splice(i, 1);
return console.log(obj);
  }
 }
}


checkProp('pizza');

console.log(obj[1].hasOwnProperty('pizza'));
console.log(obj[0].hasOwnProperty('pizza'));
checkProp(5);
checkProp('4');
checkProp(4);
*/

/*
describe('#placeOrder', function() {
  it("doesn't let you place an order if you don't provide a credit card number", function() {
    placeOrder();
    expect(console.log).toHaveBeenCalledWith(
      "We don't have a credit card on file for you to place your order."
    )
  });
  it("lets you place an order with a credit card", function() {
    addToCart('pizza')
    const t = total()
    placeOrder(123);
    expect(console.log).toHaveBeenCalledWith(
      `Your total cost is $${t}, which will be charged to the card 123.`
    )
  });
  it('empties the cart', function() {
    addToCart('pizza')
    expect(hasItem(getCart(), 'pizza')).toBe(true)
    placeOrder(123);
    expect(getCart()).toEqual([])
  })
})
function hasItem(c, item) {
  for (let i = 0, l = c.length; i < l; i++) {
    if (c[i].hasOwnProperty(item)) {
      return true
    }
  }
  return false
}
*/

function placeOrder(cc) {
  if (!cc) {
    console.log("We don't have a credit card on file for you to place your order.");
} else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
  } cart = [];
}
