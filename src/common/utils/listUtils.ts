export const shuffleArray = <T extends object>(array1: T[], array2: T[]) => {
  const newArray: T[] = [];
  newArray.push(...array1, ...array2);
  let currentIndex = newArray.length;
  let temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }
  return newArray;
};
