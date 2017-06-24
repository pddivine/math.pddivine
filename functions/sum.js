// A sum function which handles floats in base 10.
module.exports = sum;
function sum (arr) {
  const args = Array.isArray(arr) ? arr : Array.from(arguments);
  // console.log(args)
  // TODO validate each element is a number
  const numbersObjs = args.map(num => {
    const numString = num.toString().split('.');

    return {
      integer: numString[0] || '0',
      decimal: numString[1] || '0'
    }

  });

  const sum = numbersObjs.reduce((acc, cur) => {
    // console.log(acc, cur)
    const numString = acc.toString().split('.');
    acc = {
      integer: numString[0] || '0',
      decimal: numString[1] || '0'
    }
    const integerA = acc.integer;
    const integerB = cur.integer;

    let decimalA = acc.decimal;
    let decimalB = cur.decimal;
    const lengthDifference = decimalA.length - decimalB.length;
    if (lengthDifference > 0) {
      // Mutate B to be length of A
      decimalB = decimalB * lengthDifference * 10;
      
    } else if ( lengthDifference < 0) {
      // Mutate A to be length of B
      decimalA = decimalA * lengthDifference * 10;
    }

    const decimalSum = (parseInt(decimalA, 10) + parseInt(decimalB, 10)).toString();
    // console.log('decimalSum', decimalSum, typeof decimalSum);

    // Handle decimal has increased integer count.
    const additionalInt = decimalSum.length > acc.decimal.length ? 1 : 0;

    const integerSum = (parseInt(integerA, 10) + parseInt(integerB, 10) + parseInt(additionalInt, 10)).toString();
    
    return `${integerSum}.${decimalSum.length > acc.decimal.length ? decimalSum.slice(1) : decimalSum }`;

  }, 0);

  return parseFloat(sum);

}