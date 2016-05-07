import { currentTemperature } from "./thermometer";

export const temperature = () => `${ currentTemperature() }° C`;
