function viewCart() {
  // write your code here
  for (var key in cart[0]) {
    string = `In your cart, you have ${key} at $${itemPriceArr[0]}`
  }
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }

  else if (cart.length === 2){
    // for (i = 0; i < cart.length; i++)
    for (var key in cart[0]) {
      string = `In your cart, you have ${key} at $${itemPriceArr[0]}`
    }
    for (var key in cart[1]) {
    string += ` and ${key} $ ${itemPriceArr[1]}.`;
}
    console.log(string);
    return string;

}
  else if (cart.length >= 3)  {
    for (var key in cart[0])
    string = `In your cart, you have ${key} at $${itemPriceArr[0]}`;
    var holder = 1;
    for (let i = 1; i < cart.length - 1; i++) {
      for (var key in cart[i]) {
      string += ", ";
      string += key + " at $" + itemPriceArr[i];
      holder++;
    }
    for (var key in cart[holder]) {
    string += ", and " + key + " at $" + itemPriceArr[holder] + ".";
    console.log(string);
    return string;
  }

}
}
  console.log(string)
  return string
}



function viewCart() {
  // write your code here
  var string;
  for (var key in cart[0]) {
    string = `In your cart, you have ${key} at $${itemPriceArr[0]}`
  }
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length === 2){
    for (var key in cart[1]) {
    return console.log(string += ` and ${key} $${itemPriceArr[1]}.`);
}
}
  else if (cart.length >= 3)  {
    var holder = 1;
    for (let i = 1; i < cart.length - 1; i++) {
      for (var key in cart[i]) {
        string += ", ";
        string += key + " at $" + itemPriceArr[i];
        holder++;
      }
    for (var key in cart[holder]) {
      return string += `, and ${key} at ${$itemPriceArr[holder]}.`;
    }

}
}
  console.log(string);
  return string;
}



function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (cart[i].hasOwnProperty(item)) {
        delete cart[i];
        return cart;
      }
  }

}
  console.log("That item is not in your cart.")
  return cart;

}



if (getCart().length >= 3)  {
  for (let key in getCart()[0])
  string = `In your cart, you have ${key} at $${getCart()[0][key]}`;
  var holder = 1;
  for (let i = 0; i <= getCart().length - 1; i++) {
    for (key in getCart()[i]) {
    string += ", ";
    string += `${key} at $${getCart()[i][key]}`;
    holder++;
  }
    for (key in getCart()[holder]) {
      string += ` and ${key} at $${getCart()[holder][key]}.`;

    }
  }
  console.log(string);
  return string;
}



function viewCart() {
  // write your code here
  let string;
  let key;

  if (getCart().length === 0) {
    string = "Your shopping cart is empty.";
    console.log(string);
    return string;
  }

  if (getCart().length === 1) {
    for (let key in getCart()[0]) {
      string = `In your cart, you have ${key} at $${getCart()[0][key]}.`;
      console.log(string);
      return string;
    }
  }

  if (getCart().length === 2){
    for (key in getCart()[0]) {
      string = `In your cart, you have ${key} at $${getCart()[0][key]}`
    }
    for (key in getCart()[1]) {
    string += ` and ${key} $${getCart()[1][key]}.`;

}
  console.log(string);
  return string;
}

if (cart.length >= 3)  {
  var holder = 1;
  for (let i = 1; i < cart.length - 1; i++) {
    for (var key in cart[i]) {
      string += ", ";
      string += key + " at $" + getCart()[i][key];
      holder++;
    }
  for (var key in cart[holder]) {
    string += `, and ${key} at $${getCart()[holder][key]}.`;
    console.log(string);
    return string;
  }

  }
}
}

}
