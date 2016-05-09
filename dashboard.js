import { getTemperature } from "./thermometer";

export const formatTemperature = () => `${ getTemperature() }° C`;
