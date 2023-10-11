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
  beforeEach(async() => {
    await browser.url('');
  });

  it("Check page tittle", async () => {
    const h1 = await $('div#content h1.heading');

    await expect(h1).toHaveText("Welcome to the-internet")
  });

  it("click Broken Images", async () => {
    await $('a[href="/broken_images"]').click();
   
    await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/broken_images')
    const bodyTitle = await $('div.example h3')
    
    await expect(bodyTitle).toHaveText('Broken Images')
  });

  it("check login form", async () => {
    await $('a[href="/login"]').click();
    await $('#username').setValue('tom');
    // await browser.pause(3000)
    await (await $('#username')).addValue('smith');
    // await browser.pause(3000);
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

  // HOME TASK
  // _WebdriverIO's Advanced commands
  // 1.    Add scenario that utilizes execute() command
  // 2.    Add scenario that utilizes waitUntil() command
  // 3.    Add scenario that utilizes browser actions
  
  
  // BONUS
  // 4.    Add scenario that works with cookies and/or local storage
  
  // ACCEPTANCE CRITERIA
  // 1.    execute() scenario is implemented
  // 2.    waitUntil() scenario is implemented
  // 3.    Browser actions scenario is implemented
  

  it ("execute the size of the tittle", async () => {
    const tittle = await $('div#content h1.heading');
    await browser.execute(function (tittle) {
      tittle.style.color = "#FF0000";
    }, tittle);
    // await browser.pause (3000);
    });

  it ("drag and drop", async () => {
    await $('a[href="/drag_and_drop"]').click();
    const elem1 = await $('div#column-a');
    const elem2 = await $('div#column-b');
    await elem1.dragAndDrop(elem2);
    await elem1.dragAndDrop({ x: 100, y: 200 })
    // await browser.pause (3000);
  })

  it ('set cookies', async () => {
    await browser.setCookies([
      {
        name: "customCookie", 
        value: "42"
      }
    ]);
    const cookie = await browser.getCookies(["customCookie"]); 
    console.log("Cookie value");
    console.dir(cookie);
  })
});