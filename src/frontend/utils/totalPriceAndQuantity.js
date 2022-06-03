const totalQty = (array) => {
  return array.reduce((accum, initial) => (accum = accum + initial.qty), 0);
};

const totalPrice = (array) => {
  return array.reduce(
    (accum, initial) => (accum = accum + initial.qty * initial.price),
    0
  );
};

export { totalPrice, totalQty };
