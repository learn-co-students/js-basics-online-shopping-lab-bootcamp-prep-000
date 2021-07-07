var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObject = {};
 var itemPrice = Math.floor(Math.random() * 101);
 itemObject[item] = itemPrice;
 cart.push(itemObject);
 console.log (item + " has been added to your cart.");
 return cart;
}

function viewCart() {
  if (cart.length === 0){
      console.log("Your shopping cart is empty.");
    }else {
    const itemsAndPrices = [];
    const l = cart.length;
      for (let i = 0; i< 0; i++){
        let itemAndPrice = cart[i];
        let item = Object.keys(itemAndPrice)[0];
        let price = itemAndPrice[item];
        itemsAndPrices.push(`${item} at \$${price}`);
      }
    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
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
