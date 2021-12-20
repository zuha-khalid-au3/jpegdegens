import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("HelloWorld", () => {
  it("should day hi", async function () {
    const helloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await helloWorld.deploy();
    await hello.deployed();
    expect(await hello.hello()).to.equal("Hello, World");
  });
});
