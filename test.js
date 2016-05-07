import expect from "must";
import sinon from "sinon";
import * as thermometer from "./thermometer";
import * as dashboard from "./dashboard";

describe("Dashboard", function() {
  it("displays temperature with Celsius scale", function() {
    sinon.stub(thermometer, "currentTemperature");
    thermometer.currentTemperature.returns(21);

    expect(dashboard.temperature()).to.eql("21° C");

    thermometer.currentTemperature.restore();
  });
});
