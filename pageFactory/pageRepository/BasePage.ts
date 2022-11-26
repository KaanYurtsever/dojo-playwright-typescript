import {BrowserContext, expect, Page} from "@playwright/test";
import {WebActions} from "../../lib/WebActions";
import {BasePageObjects} from "../objectRepository/BasePageObjects";
import {testConfig} from "../../testConfig";

let webActions: WebActions;

export default class BasePage {

    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {

        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page);
    }

    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL(testConfig.prod);
    }

    async checkUrlCorrect(): Promise<void> {
        const pageTitleTxt = await this.page.title();
        console.log("Base page title: " + pageTitleTxt);
        await expect(pageTitleTxt).toBe(BasePageObjects.HOME_PAGE_TITLE_TXT);
    }

    async acceptAllCookies(): Promise<void> {
        await webActions.clickElement(BasePageObjects.ACCEPT_COOKIES_BUTTON);
    }

    async goToGetStartedPage(): Promise<void> {
       await webActions.clickElement(BasePageObjects.GET_STARTED_BUTTON);
    }
}