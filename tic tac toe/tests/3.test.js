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
  block = document.getElementById(2);
  block.click();
  block = document.getElementById(3);
  block.click();
  block = document.getElementById(4);
  block.click();
  block = document.getElementById(5);
  block.click();
  block = document.getElementById(7);
  block.click();
  block = document.getElementById(8);
  block.click();
  block = document.getElementById(9);
  block.click();
  block = document.getElementById(6);
  block.click();
  const res = document.getElementById("res");
  expect(res.innerHTML).toBe("Draw!");
};

test("#3 Testing draw", async () => await myTest());
