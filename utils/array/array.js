export const generateArray = n => new Array(n);
export const generateNumberFilledArray = (n, modifier = 0) =>
  generateArray(n).fill('').map((_, i) => i + modifier);

export const cloneArray = array => array.slice();

export const reshapeArray = (source, dimensions) => {
  const array = cloneArray(source);

  const reshaped = [];
  const secondDimensionLength = Math.ceil(array.length / dimensions);
  while (array.length) reshaped.push(array.splice(0, secondDimensionLength));
  return reshaped;
};