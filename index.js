function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1 );
    cart.push(Object.assign({}, { itemName : `${item}`, itemPrice : price } ));
    return `${item}` + " has been added to your cart."
  }


function viewCart(itemName, itemPrice) {
  for (var i = 0; i < cart.length; i++) {
    if (i < 1) {
      return("Your shopping cart is empty.")
  } else {
    while (i > 0) {
      return(`In your cart, you have ` + `${itemName[i]}` + ` at ` + `${itemPrice[i]}` + `.`)
    i++;
  }
  }
}
}
