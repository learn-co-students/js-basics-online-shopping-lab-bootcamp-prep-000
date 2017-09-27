var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
      function randomlyGenerated(min,max){
        return Math.floor(Math.random() * (max - min) + min);
      }

      var randomNumber = randomlyGenerated(1,100);
      cart.push({[item] : randomNumber});

      console.log(`${item} has been added to your cart.`);
      return cart;
}

function viewCart() {
  var output = "";

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
      var item = [];
      var price = [];

      for (var i = 0; i < cart.length; i++) {
          item.push(Object.keys(cart[i]).join(""));
          price.push(Object.values(cart[i]).join(""));
      }

      for (var x = 0; x < item.length; x++) {
            if (cart.length === 1) {
              output = `${item[0]} at $${price[0]}.`;
            }
            else if (cart.length === 2) {
              output = `${item[0]} at $${price[0]} and ${item[1]} at $${price[1]}.`;
            }
            else {
              for (var y = 0; y < cart.length; y++){
                if (y === (cart.length - 1)) {
                  output += `and ${item[y]} at $${price[y]}.`;
                }
                else {
                  output += ` ${item[y]} at $${price[y]},`;
                }
              }
            }
      }

      console.log(`In your cart, you have${output}`);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
