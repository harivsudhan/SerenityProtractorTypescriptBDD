import {actorCalled, Cast, engage} from '@serenity-js/core';
import {BrowseTheWeb, TakeScreenshot} from '@serenity-js/protractor';
import {protractor} from 'protractor';
import {After, Before} from 'cucumber';

Before(() => engage(Cast.whereEveryoneCan(BrowseTheWeb.using(protractor.browser))));

After(step => actorCalled('Inspector').attemptsTo(TakeScreenshot.of(step.pickle.name)));
