var cart = [];

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

function getCart(){
  return cart;
}

var min = 0;
var max = 100;

function addToCart(item){
  const price = Math.floor(Math.random() * 100) + 1;
  cart.push({ [item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
	const l = cart.length;

	if (!l) {
		return console.log("Your shopping cart is empty.");
	}

	let itemsAndPrices = [];

	for (let i = 0; i < l; i++) {
		let itemAndPrice = cart[i];
		let item = Object.keys(itemAndPrice)[0];
		let price = itemAndPrice[item];

		itemsAndPrices.push(`${item} at $${price}`);
	}

	switch(itemsAndPrices.length) {
		case 1:
			break;
		case 2:
			itemsAndPrices = itemsAndPrices.join(" and ");
			break;
		default:
			itemsAndPrices[l - 1] = "and ".concat(itemsAndPrices[l - 1]);
			itemsAndPrices = itemsAndPrices.join(", ");
	}
	console.log(`In your cart, you have ${itemsAndPrices}.`);
}


function removeFromCart( item ) {
  for(var i = 0; i < cart.length; i++) {
    if( cart[i].hasOwnProperty(item) ) {
     cart.splice(i, 1);
     return cart
    } else {
        console.log( "That item is not in your cart.");
    }
  }
}