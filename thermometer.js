function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const currentTemperature = () => getRandomInt(-8, 55);
