import expect from "must";
import sinon from "sinon";
import * as thermometer from "../src/thermometer";
import * as dashboard from "../src/dashboard";

describe("Dashboard", function() {
  // Wrap the test in sinon.test() so that any methods stubbed are restored after test run.
  it("format temperature with Celsius scale", sinon.test(function() {
    this.stub(thermometer, "getTemperature");
    thermometer.getTemperature.returns(21);

    expect(dashboard.formatTemperature()).to.eql("21° C");
  }));
});
