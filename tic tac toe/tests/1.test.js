/**
 * @jest-environment jsdom
 */

const request = require("supertest");
const index = require("../index.js");

const myTest = async () => {
  const response = await request(index).get("/");
  document.body.innerHTML = response.text;
  require("../script.js");
  let block = document.getElementById(1);
  block.click();
  expect(block.innerHTML).toBe("X");
  block = document.getElementById(4);
  block.click();
  expect(block.innerHTML).toBe("O");
  block = document.getElementById(2);
  block.click();
  expect(block.innerHTML).toBe("X");
  block = document.getElementById(5);
  block.click();
  expect(block.innerHTML).toBe("O");
  block = document.getElementById(3);
  block.click();
  expect(block.innerHTML).toBe("X");
  const res = document.getElementById("res");
  expect(res.innerHTML).toBe("Congratulations! Player1 wins.");
};

test("#1 Testing liner win", async () => await myTest());

// module.exports = myTest;
