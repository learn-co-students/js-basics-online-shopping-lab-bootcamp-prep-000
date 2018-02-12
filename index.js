var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  let item = {};
  item[name] = Math.floor(Math.random() * 100);
  cart.push(item);
  console.log(`${name} has been added to your cart.`);
  return cart;
}

addToCart('pizza');
addToCart('bananas');
addToCart('almonds');

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    const itemDescriptions = cart.map((item) => {
      const name = Object.keys(item)[0];
      const price = item[name];

      return `${name} at ${price}`;
    });
    
    let initialConjunctions;
    let finalConjuction;
    
    if (itemDescriptions.length > 2) {
      initialConjunctions = ', ';
      finalConjuction = ', and ';
    } else {
      initialConjunctions = null;
      finalConjuction = ' and ';
    }
    
    return itemDescriptions.reduce((text, itemDescription, index) => {
      if (index !== 0) {
        if (index + 1 === itemDescriptions.length) {
          text = text + finalConjuction;
        } else {
          text = text + initialConjunctions;
        }
      }
      
      text = text + itemDescription;
      
      if (index + 1 === itemDescriptions.length) {
        text = text + '.';
      }
      
      return text;
    }, 'In your cart, you have ');
  }
}

console.log(viewCart())


function total() {

  const cartItemPriceArray = cart.map((itemObject) => {
    const name = Object.keys(itemObject)[0];
    return itemObject[name];
  });

  return cartItemPriceArray.reduce( (prev, curr) => prev + curr );
  
}

console.log(total());

function removeFromCart(item){
  for (let i = 0; i < cart.length; i++) {
    let itemObj = cart[i];
    let index = cart.indexOf(cart[i]);
    for (let key in itemObj){
      if (itemObj.hasOwnProperty(item)) {
        cart.splice(index, 1);
      } 
      if (itemObj.hasOwnProperty(item) === false){
        console.log(`That item is not in your cart`);
      }
    }
  }
  return cart;
}       


function placeOrder(cardNum){
  const finalTotal = total();
  if (cardNum === undefined){
    console.log (`Sorry we don't have a credit card on file for you.`);
    return cart;
  } else {
      console.log(`Your total cost is $${finalTotal}, which will be charged to the card ${cardNum}.`);
      while (cart.length > 0){
      cart.pop();
      return cart;
      }
  }
}

