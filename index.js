var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function price() {
  return Math.floor(Math.random() * Math.floor(100));
}

function addToCart(item) {
    let obj = { itemName: `${item}`, itemPrice: price() };
	cart.push(obj);
	return (`${obj.itemName} has been added to your cart.`);
}

function viewCart() {
    if(cart.length > 1) {
		var cartSen = [];
		var x = (cart.length - 1);
        for(let i = 0; i < (cart.length - 1); i++) {
            cartSen.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
        } cartSen.push(` and ${cart[x].itemName} at $${cart[x].itemPrice}`);
		return (`In your cart, you have${cartSen.join()}.`);
    } else if(cart.length === 0) {
        return("Your shopping cart is empty.");
    } else if(cart.length === 1) {
        return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
    }
}

function total() {
    function add(a, b) {
        return a + b;
    }
	let wallet = [];
    for (let i = 0; i < cart.length; i++) {
        wallet.push(cart[i].itemPrice);
    } return wallet.reduce(add);
}

function removeFromCart(item) {
    for (var i = 0; i <= cart.length; i++) {
        if (cart[i].itemName === item) {
            cart.splice(i, 1);
            return cart;
        } else if (i === cart.length) {
            return ("That item is not in your cart.");
        }
    }
}

function placeOrder(cardNumber) {
  // write your code here
}
