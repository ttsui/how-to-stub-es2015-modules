import * as clock from "./clock";

export const time = () => {
  const theTime = clock.now();

  return `${theTime.getHours()}:${theTime.getMinutes()}`;
};
