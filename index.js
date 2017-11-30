var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj={[item]: Math.floor(Math.random()*100)}
 cart.push(obj);
 console.log([item] + " has been added to your cart.");
 return [obj];
}






function viewCart() {
  // write your code here
  let line = "In your cart, you have ";
    for (var i = 0; i < 4; i++){

      if (cart.length===1) {
        cart.push("lemons at $23");
        console.log(line + cart + " .");
      }
      if (cart.length===0) {
        console.log("Your shopping cart is empty.");
        return;
      }

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
