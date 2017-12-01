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
    for (var i = 0; i < cart.length; i++){
      if (cart.length===0) {
        console.log("[Your shopping cart is empty.]");
        return;
      }

      if (cart.length===1) {
        cart.push("lemons at $" + Math.floor(Math.random()*100) + ".");
        console.log(line + cart[0] + " .");
      }


    }

  }


function total() {
  // write your code here
}

function removeFromCart(item) {
   for (var i =0 ; i<cart.length; i++){
       if (cart[i].hasOwnProperty(item)){
       var removedItem= cart.splice(i, 1);
  return removedItem;
}

}if (false) {
  console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
