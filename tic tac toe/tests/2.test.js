/**
 * @jest-environment jsdom
 */

const request = require("supertest");
const index = require("../index.js");

const myTest = async () => {
  const response = await request(index).get("/");
  document.body.innerHTML = response.text;
  require("../script.js");
  let block = document.getElementById(2);
  block.click();
  expect(block.innerHTML).toBe("X");
  block = document.getElementById(1);
  block.click();
  expect(block.innerHTML).toBe("O");
  block = document.getElementById(3);
  block.click();
  expect(block.innerHTML).toBe("X");
  block = document.getElementById(5);
  block.click();
  expect(block.innerHTML).toBe("O");
  block = document.getElementById(6);
  block.click();
  expect(block.innerHTML).toBe("X");
  block = document.getElementById(9);
  block.click();
  expect(block.innerHTML).toBe("O");
  const res = document.getElementById("res");
  expect(res.innerHTML).toBe("Congratulations! Player2 wins.");
};

test("#2 Testing diagonal win", async () => await myTest());
