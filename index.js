var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({[item] : Math.floor(Math.random() * 100)});

  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart() {
  var newArray = []

	if (cart.length === 0) {
		console.log("Your shopping cart is empty.");
	} else {
		for (var i = 0; i < cart.length; i ++) {
			var obj = cart[i];

			for (var key in obj) {
				var value = obj[key]

				newArray.push(" " + key + " at $" + value)
			}
		}
	}
	console.log("In your cart, you have" + newArray + ".");
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i ++) {
      var obj = cart[i]

      for (var key in obj) {
        if (key === item) {  // < how do it i solve this?!?!
          cart.splice(i, 1);
          return cart;
//           console.log("happy")
        }
// 		console.log(key)

      }
//       console.log(item)
  }

  console.log("That item is not in your cart.")
}

function placeOrder(creditCardNum) {
    if (creditCardNum === undefined) {
      console.log("We don't have a credit card on file for you to place your order.");
    } else {
      console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCardNum + ".");
    }

    cart = [];
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
