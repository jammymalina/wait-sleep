import "mocha";
import { expect } from "chai";
import { sleep, wait } from "../../src/index";

describe("wait-sleep", () => {
  it("should resolve - wait", async () => {
    expect(wait).to.be.a("function");
    await wait(10);
  });

  it("should resolve - sleep", async () => {
    expect(sleep).to.be.a("function");
    await sleep(10);
  });
});
