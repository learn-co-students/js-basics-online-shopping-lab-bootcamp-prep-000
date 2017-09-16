var cart = [];

  function getCart() {
  return cart;
  }

   function setCart(newCart) {
     cart = newCart;
   }

  function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = {};
  item_object[item] = price
  cart.push(item_object)
  console.log(item + " has been added to your cart.");
  return cart
  }

  function viewCart() {
    if (!cart.length) {
      console.log("Your shopping cart is empty.")
    }

    var itemsAndPrices = [];

    for (var i = 0, l = cart.length; i < l; i++) {
      var itemAndPrice = cart[i];
      var item = Object.keys(itemAndPrice)[0];
      var price = itemAndPrice[item];

      if (i === 1) {
        itemsAndPrices.push(`${item} at $${price}.`);
      }
      else if (i === 2) {
        itemsAndPrices.push(`${item} at $${price} and`);
      }
      else {
        itemsAndPrices.push(`${item} at $${price},`);
      }
    }
  }
