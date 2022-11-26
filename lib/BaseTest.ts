import { test as baseTest } from '@playwright/test';
import BasePage from "../pageFactory/pageRepository/BasePage";
import GetStartedPage from "../pageFactory/pageRepository/GetStartedPage";

//NOTE: With this class we can use fixtures everywhere in our project

const test = baseTest.extend<{

    basePage: BasePage;
    getStartedPage: GetStartedPage;

}>({
    basePage: async ({ page , context}, use) => {
        await use(new BasePage(page, context));
    },
    getStartedPage: async ({ page, context }, use) => {
        await use(new GetStartedPage(page, context));
    }
});

export default test;