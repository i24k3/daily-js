
let itemsPrice = [
  250,
  645,
  300,
  900,
  50,
];

const todaysDiscount = 10;

function getTotal(itemsPrice) {
  let total = 0;
  itemsPrice.forEach((item_price) => {
    total += item_price;
  });
  return total;
}

function getPriceAfterDiscount(origPrice,
  dicPercent) {

  let finalPrice = origPrice - (origPrice * (dicPercent / 100));
  return finalPrice;
}

function autoDiscount(items, todaysDiscount) {
 for (const item in items) {
   items[item] = (items[item]) - (items[item] * todaysDiscount / 100);
 } 
}
console.log(itemsPrice);
autoDiscount(itemsPrice, todaysDiscount);
console.log(itemsPrice);

console.log(
  getPriceAfterDiscount(getTotal(itemsPrice),
    todaysDiscount
  ));
