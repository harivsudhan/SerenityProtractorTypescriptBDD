import {After, Given, Then, When} from 'cucumber';
import {homePage} from '../pages';
import {actorCalled} from '@serenity-js/core';
import {TakeScreenshot} from '@serenity-js/protractor';
import {expect} from 'chai';


Given(/^user navigates to the home page$/, async () => {
    await homePage.launchLoginUrl();
    await actorCalled('Inspector').attemptsTo(TakeScreenshot.of('login step'));
});

Then(/^user should see the BB8 page header "([^"]*)"$/, async (text: string) => {
    await homePage.checkPageHeader(text);
});
Given(/^user expands the IBAN Rekeningnummer$/, async () => {
    await homePage.expandRekeningnummer();
});
When(/^the user enters the Rekeningnummer "([^"]*)"$/, async (accountNumber: string) => {
    await homePage.enterRekeningnummer(accountNumber);
});
When(/^user enter Startdatum "([^"]*)" and Einddatum "([^"]*)"$/, async (startDate: string, endDate: string) => {
    await homePage.enterDates(startDate, endDate);
});
When(/^user click the Zoeken button$/, async () => {
    await homePage.clickZoeken();
});
Then(/^user should verify the result table is displayed$/, async (table) => {
    // tslint:disable-next-line:ban-types
    const input: String = String(table.raw());
    let index: number = 0;

    for (const expected of input.split(',')) {
        // tslint:disable-next-line:no-console
        console.log(expected);
        const actual = await homePage.validateResultTable(index);
        // tslint:disable-next-line:no-console
        console.log(actual);
        expect(actual.trim()).equals(expected, 'The table header is wrongly displayed');
        index++;
    }
});
