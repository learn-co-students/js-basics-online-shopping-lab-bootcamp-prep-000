var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push( { itemName: item, itemPrice: Math.floor( Math.random() * 101 ) } );
 return `${item} has been added to your cart.`;
}

function viewCart() {

  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else {
    let temp = [];
    for (let i = 0; i < cart.length; i += 1) {
      temp.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }

    console.log(temp);

    if (temp.length === 1) {
      temp[0] = `In your cart, you have${temp[0]}.`;
    } else { temp[0] = `In your cart, you have${temp[0]}`;}

    if (temp.length > 1) {
      temp[(cart.length - 1)] = ` and${temp[(cart.length - 1)]}.`;
    }

    console.log(temp.toString());
    return (temp.toString());

  }

}

function total() {

  let sum = 0;

  for (let i = 0; i < cart.length; i += 1) {
    sum = sum + cart[i].itemPrice;
  }
  console.log(sum);
  return sum;
}


 function removeFromCart(item) {

    let deleted = false;

    for (let i = 0; i < cart.length; i += 1) {

      if (cart[i].itemName === item) {
        cart.splice(i, 1);
        deleted = true;
      }

    }

    if (!deleted) {
        console.log(`That item is not in your cart.`);
        return `That item is not in your cart.`
    }

    console.log(cart);
    return cart;
  
}



  function placeOrder(cardNumber) {


    if (cardNumber === undefined) {
        console.log("Sorry, we don't have a credit card on file for you.");
        return "Sorry, we don't have a credit card on file for you.";
    } else {

        const sum = total();
        cart = [];

        console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`);

        return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
    }
  }