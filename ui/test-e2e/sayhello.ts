import { Given, Then, When } from "cucumber";

// tslint:disable:no-submodule-imports
import { browser } from "aurelia-protractor-plugin/protractor";
import { by, element } from "protractor";

import { expect } from "chai";

Given(/^I've navigated to the home page$/, async () => {
    await browser.loadAndWaitForAureliaPage("/");
});

Then(/^I should see the say hello page$/, async () => {
    expect(await browser.getTitle()).to.equal("Say Hello World! | Hello World");
});

When(/^I click on last greetings$/, async () => {
    const navigationReady = waitForBrowserTitleChange();
    await element(by.css('a[href="#/greetings"]')).click();
    await navigationReady;
});

Then(/^I should see the last greetings page$/, async () => {
    expect(await browser.getTitle()).to.equal("Greetings | Hello World");
});

async function waitForBrowserTitleChange() {
    const currentTitle = await browser.getTitle();
    return browser.wait(async () => (await browser.getTitle()) !== currentTitle);
}
