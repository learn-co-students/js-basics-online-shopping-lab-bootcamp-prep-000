var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) { var price = Math.floor((Math.random()* 100) + 1); var item = {itemName: name, itemPrice: price}; cart.unshift(item); item.name = price; { return `${name} has been added to your cart.`} return cart }

function viewCart() { var string = 'In your cart, you have '; var price = Math.floor((Math.random()* 100) + 1);
 if (cart.length === 0) { return "Your shopping cart is empty." } for (var [itemName, itemPrice] of Object.entries(cart)) { console.log(`itemName: ${name}, itemPrice: ${price}`)} if (cart.length === 1) {return  string + cart[0].itemName + ' at $' + cart[0].itemPrice + '.' } if (cart.length === 2) { return string + cart[0].itemName + ' at $' + cart[0].itemPrice + ', and ' + cart[1].itemName + ' at $' + cart[1].itemPrice + '.'} else for (var l = cart.length; l >= 3; i++) { return string + cart[0].itemName + ' at $' + cart[0].itemPrice + ', ' + cart[1].itemName + ' at $' + cart[1].itemPrice +', and ' + cart[2].itemName + ' at $' + cart[2].itemPrice + '.'} } 

function total() {var price = Math.floor((Math.random()* 100) + 1); for (var [itemName, itemPrice] of Object.entries(cart)) { console.log(`itemName: ${name}, itemPrice: ${price}`)} function getSum(total, itemPrice) { return total + itemPrice;} while (cart.length > 0) for(var i=0; i < cart.lenght; i++); return total }

function removeFromCart(item) { if (cart[i]===undefined) { return 'That item is not in your cart.'} else for(var i = 0; i < cart.length; i++) if (cart[i]===defined) { return cart.prototype.splice(i, 0) } }

function placeOrder(cardNumber) { if (cardNumber===undefined) { return 'Sorry, we don\'t have a credit card on file for you.' } else cart.length = 0; { return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;} } 

