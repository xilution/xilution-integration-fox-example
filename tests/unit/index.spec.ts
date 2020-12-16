import { handler } from "../../src";

let event;

describe("Tests index", function () {
  it("verifies successful hello response", async () => {
    const result = await handler(event);

    expect(result.statusCode).toEqual(200);

    let response = JSON.parse(result.body);

    expect(response.message).toEqual("hello-world");
  });
});
