var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var item = {};
  item[itemName]=Math.floor(Math.random()*100);
  cart.push(item);
   var msg = ' has been added to your cart.'
   console.log(Object.keys(item) + msg);
  return cart
}

function viewCart() {
  var itemandprice = [];
  var msg = 'In your cart, you have';
    if(cart.length === 0){
      console.log("Your shopping cart is empty.")
    } else if (cart.length === 1) {
      var item0 = [Object.keys(cart[0])];
      var price0 = Number([Object.values(cart[0])]);
      itemandprice.push(' ' + item0 +' at $'+ price0 + '.');
      console.log(msg + itemandprice);
    } else if (cart.length === 2) {
        var item0 = [Object.keys(cart[0])];
        var price0 = Number([Object.values(cart[0])]);
        var item1 = [Object.keys(cart[1])];
        var price1 = Number([Object.values(cart[1])]);
        itemandprice.push(' ' + item0 +' at $'+ price0 + ' and ' + item1 + ' at $' + price1 + '.');
        console.log(msg + itemandprice);
    } else {
        let i = 0;
        while (i < cart.length) {
          var item = [Object.keys(cart[i])];
          var price = Number([Object.values(cart[i])]);
          itemandprice.push(' ' + item +' at $'+ price);
          i++;
      }
        var lastitem = itemandprice.pop();
        console.log(msg + itemandprice + ', and' + lastitem + '.');
    }
}

function total() {
    var pricesum = 0;
  for(let i = 0; i < cart.length; i++){
    var price = Number([Object.values(cart[i])]);
    var pricesum = pricesum + price;
    }
    return(pricesum)
}

function removeFromCart(item) {
  for (let i=0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart = [...cart.slice(0,i), ...cart.slice(i+1)];
      return cart;
    }
  }
    console.log("That item is not in your cart.");
    return cart;
}

function placeOrder(cardNumber){
  if (cardNumber === undefined || cardNumber === null || cardNumber.length <= 0) {
    console.log("Sorry, we don't have a credit card on file for you.")
    } else {
      console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
      cart.length=0;
      return cart;
      }
}
