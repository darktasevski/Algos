const { pyramid, pyramid1 } = require("./index");

describe("Pyramide", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test("prints a pyramid for n = 2", () => {
    pyramid(2);
    expect(console.log.mock.calls[0][0]).toEqual(" # ");
    expect(console.log.mock.calls[1][0]).toEqual("###");
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test("prints a pyramid for n = 2", () => {
    pyramid1(2);
    expect(console.log.mock.calls[0][0]).toEqual(" # ");
    expect(console.log.mock.calls[1][0]).toEqual("###");
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test("prints a pyramid for n = 3", () => {
    pyramid(3);
    expect(console.log.mock.calls[0][0]).toEqual("  #  ");
    expect(console.log.mock.calls[1][0]).toEqual(" ### ");
    expect(console.log.mock.calls[2][0]).toEqual("#####");
    expect(console.log.mock.calls.length).toEqual(3);
  });

  test("prints a pyramid for n = 4", () => {
    pyramid(4);
    expect(console.log.mock.calls[0][0]).toEqual("   #   ");
    expect(console.log.mock.calls[1][0]).toEqual("  ###  ");
    expect(console.log.mock.calls[2][0]).toEqual(" ##### ");
    expect(console.log.mock.calls[3][0]).toEqual("#######");
    expect(console.log.mock.calls.length).toEqual(4);
  });

  test("prints a pyramid for n = 4", () => {
    pyramid1(4);
    expect(console.log.mock.calls[0][0]).toEqual("   #   ");
    expect(console.log.mock.calls[1][0]).toEqual("  ###  ");
    expect(console.log.mock.calls[2][0]).toEqual(" ##### ");
    expect(console.log.mock.calls[3][0]).toEqual("#######");
    expect(console.log.mock.calls.length).toEqual(4);
  });
});
