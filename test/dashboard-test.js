import expect from "must";
import sinon from "sinon";
import * as thermometer from "../src/thermometer";
import * as dashboard from "../src/dashboard";

describe("Dashboard", function() {
  it("format temperature with Celsius scale", function() {
    sinon.stub(thermometer, "getTemperature");
    thermometer.getTemperature.returns(21);

    expect(dashboard.formatTemperature()).to.eql("21° C");

    // IMPORTANT: Undo stubbing or elses getTemperature() will be stubbed in other tests.
    thermometer.getTemperature.restore();
  });
});
