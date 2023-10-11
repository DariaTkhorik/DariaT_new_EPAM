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
    await browser.url('');
  });

  it("Check page tittle", async () => {
    const h1 = await $('div#content h1.heading');

    await expect(h1).toHaveText("Welcome to the-internet")
  });

  it("click Broken Images", async () => {
    await $$('li')[3].$('a').click();
   
    await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/broken_images')
    const bodyTitle = await $('div.example h3')
    
    await expect(bodyTitle).toHaveText('Broken Images')
  });

  it("check login form", async() => {
    await $$('li')[20].$('a').click();
    await $('#username').setValue('tom');
    await browser.pause(3000)
    await (await $('#username')).addValue('smith');
    await browser.pause(3000);
    await (await $('#password')).addValue('SuperSecretPassword!'); 
    await $('button.radius').click();
  })

  it('Wait until text has changed', async () => {
    const elem = await $('div#content h1.heading')
    await browser.waitUntil(async function () {
      return (await elem.getText()) === 'Welcome to the-internet'
    }, {
      timeout: 5000,
      timeoutMsg: 'error'
    })
  })

});