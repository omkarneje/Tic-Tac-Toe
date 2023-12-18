/**
 * @jest-environment jsdom
 */

const request = require("supertest");
const index = require("../index.js");

const myTest = async () => {
  const response = await request(index).get("/");
  document.body.innerHTML = response.text;
  require("../script.js");
  const res = await document.getElementById("res");
  expect(res).not.toBe(null);

  for (i = 1; i <= 9; i++) {
    const block = await document.getElementById(i);
    expect(block).not.toBe(null);
  }
};

test("#0 Testing all elements are present", async () => await myTest());

// module.exports = myTest;
