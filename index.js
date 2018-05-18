var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  function getRandomPrice() {
   return Math.floor(Math.random() * (Math.floor(1) - Math.ceil(100) + 1)) + Math.ceil(100);
    }
    cart.push({'itemName': item, 'itemPrice': getRandomPrice()});

    return `${item} has been added to your cart.`;
}

function viewCart() {
let cartList = `In your cart, you have `;
    if (cart.length === 0){
            cartList = `Your shopping cart is empty.`;
        }
        
    for (let index = 0; index < cart.length; index++){
        let str = `${cart[index].itemName} at $${cart[index].itemPrice}`;
        
        if (cart.length === 1){
            cartList += `${str}.`;
        } else if (cart.length > 1 && index === cart.length-1){
            cartList += `and ${str}.`;
            } else {
                cartList += `${str}, `;
            }
            
    } return cartList;   
}

function total() {
  let sum = 0;
    cart.forEach(function(index){
        sum += index.itemPrice;
    }); return sum;
}

function removeFromCart(item) {
 var find = cart.map((search) => search.itemName).indexOf(item);

    if (find === -1){
        return `That item is not in your cart.`;
    } else {
        cart.splice(find, 1);
        return cart;
    }
}

function placeOrder(cardNumber) {
  let receipt = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;

    if(cardNumber === undefined){
        return `Sorry, we don't have a credit card on file for you.`;        
    } else {
        cart.length = 0;
        return receipt;
    }
}
