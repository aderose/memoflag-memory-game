const Utils = (() => {
  const generateRandomNumbers = (arr, max, amount) => {
    if (arr.length >= amount) return arr;
    const number = Math.floor(Math.random() * max);
    if (arr.indexOf(number) < 0) {
      arr.push(number);
    }
    return generateRandomNumbers(arr, max, amount);
  };

  function shuffle() {
    return null;
  }

  return { generateRandomNumbers, shuffle };
})();

export default Utils;
