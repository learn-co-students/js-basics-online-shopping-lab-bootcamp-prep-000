function checkCard(cardNumber) {
  if (cardNumber === undefined) {
    return `Your card ain't on file, son.`;
  } else {
    return `Is you card number ${cardNumber}?`;
  }
}

console.log(checkCard(1));
