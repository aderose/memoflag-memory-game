const Utils = (() => {
  const generateRandomNumbers = (arr, max, amount) => {
    if (arr.length >= amount) return arr;
    const number = Math.floor(Math.random() * max);
    if (arr.indexOf(number) < 0) {
      arr.push(number);
    }
    return generateRandomNumbers(arr, max, amount);
  };

  const shuffle = (array) => {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      const temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  return { generateRandomNumbers, shuffle };
})();

export default Utils;
