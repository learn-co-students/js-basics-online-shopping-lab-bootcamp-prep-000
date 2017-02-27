var cart=[];

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

  return t;
}

function getCart(){
  return cart;
}




//ADD TO CART
function addToCart(item){
  var price = Math.random()*100;
  price = Math.floor(price);
  // obj = Object.assign(cart, {[item]:price});
  var obj = Object.assign({}, {[item]:price})
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}




//VIEW CART
function viewCart(){
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
    return;
  }
  var answer="In your cart, you have ";
  for(let i=0; i<cart.length; i++){
    for (var item in cart[i]){
      answer += (item + " at $" + cart[i][item] + ", ");
    }
  }
  answer = answer.substring(0, answer.length-2);
  answer += "."
  console.log(answer);
}



//REMOVE FROM CART
function removeFromCart(item){
  for(let i=0; i<cart.length;i++){
    for (var key in cart[i]){
      if(key==item){
        cart.splice(i,1);
        return cart;
      }
    }
    // if(item==cart[i].){
    //   cart.splice(1, i);
    //   return cart;
    // }
  }
  console.log("That item is not in your cart.")
}


// PLACE ORDER
function placeOrder(num){
  var total=0;
  if (num===undefined){
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }
  for (let i = 0; i<cart.length; i++){
    for (var key in cart[i]){
      total += cart[i][key];
    }
  }
  cart=[];
  console.log(`Your total cost is $${total}, which will be charged to the card ${num}.`)
}
