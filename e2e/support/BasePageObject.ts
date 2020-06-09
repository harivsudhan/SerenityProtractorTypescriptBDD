import {browser, ElementFinder, ExpectedConditions, protractor} from 'protractor';
import {fail} from 'assert';

export class BasePageObject {
    protected until = protractor.ExpectedConditions;

    async waitForElementToBeClickable(element: ElementFinder) {
        await browser.wait(this.until.elementToBeClickable(element), 6000).catch(() => {
            fail('Element is not clickcable ' + element.locator());
        });
    }

    async waitForElementToBePresnt(element: ElementFinder) {
        await browser.wait(this.until.presenceOf(element), 6000).catch(() => {
            fail('Element is not present ' + element.locator());
        });
    }

    async waitForElementToBeVisible(element: ElementFinder) {
        await browser.wait(ExpectedConditions.visibilityOf(element), 6000).catch(() => {
            fail('This has failed due to element not visible ' + element.locator());
        });
    }

    async waitForTextToBePresentInElement(element: ElementFinder, text: string) {
        await browser.driver.wait(ExpectedConditions.textToBePresentInElement(element, text), 6000).catch(() => {
            fail('Text is not present in the Element ' + element.locator());
        });
    }
}

