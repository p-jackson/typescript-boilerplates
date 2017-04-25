import { add, validate } from "./number-util";

describe("add", () => {
  it("adds two integers", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("adds two floating point numbers together", () => {
    expect(add(1.1, 0.0001)).toBe(1.1001);
  });
});

describe("validate", () => {
  it("accepts integers", () => {
    expect(validate("113")).toBe(true);
  });

  it("accepts floats", () => {
    expect(validate("3.14")).toBe(true);
  });

  it("doesn't accept words", () => {
    expect(validate("blah")).toBe(false);
  });

  it("doesn't accept numbers with non-digits at the end", () => {
    expect(validate("1.2.3")).toBe(false)
  });
});
