import expect from "must";
import sinon from "sinon";
import * as clock from "./clock";
import * as dashboard from "./dashboard";

describe("Dashboard", function() {
  it("displays the time", function() {
    sinon.stub(clock, "now");
    clock.now.returns(new Date("2011-10-10T14:48:00+0100"));

    expect(dashboard.time()).to.eql("14:48");

    clock.now.restore();
  });
});
