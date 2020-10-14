'use strict';

const app = require('../../src/app.js');
const chai = require('chai');
const expect = chai.expect;
let event, context;

describe('Tests index', function () {
  it('verifies successful hello response', async () => {
    const result = await app.hello(event, context)

    expect(result).to.be.an('object');
    expect(result.statusCode).to.equal(200);
    expect(result.body).to.be.an('string');

    let response = JSON.parse(result.body);

    expect(response).to.be.an('object');
    expect(response.message).to.be.equal("hello");
  });

  it('verifies successful world response', async () => {
    const result = await app.world(event, context)

    expect(result).to.be.an('object');
    expect(result.statusCode).to.equal(200);
    expect(result.body).to.be.an('string');

    let response = JSON.parse(result.body);

    expect(response).to.be.an('object');
    expect(response.message).to.be.equal("world");
  });
});
