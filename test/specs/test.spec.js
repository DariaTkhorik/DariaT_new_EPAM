// https://the-internet.herokuapp.com/ - recomended app

// HOME TASK_WebdriverIO's Basic commands 
// 1.Add 4-5 new scenarios using basic WDIO Commands
// 2.*Replace default click method with custom one that will wait for elements before clicking. 
// ACCEPTANCE CRITERIA 
// 1.4-5 new scenarios are created
// 2.Basic WDIO commands are used
// 3. *Custom click method is created
import { expect, browser, $ } from '@wdio/globals'

describe("Home Task 2", () => {
  beforeEach(async () => {
    await browser.url("https://the-internet.herokuapp.com/")
  });

  it("Check page tittle", async () => {
   await browser.url("https://the-internet.herokuapp.com/"); 
    const h1 = await $('div#content h1.heading');

    await expect(h1).toHaveText("Welcome to the-internet")
  });

  // it("Broken Images", async () => {
  //   await browser.url("https://the-internet.herokuapp.com/");
  //   await $('a.broken_images').click();
  // });
})