import {BrowserContext, expect, Page} from "@playwright/test";
import {WebActions} from "../../lib/WebActions";
import BasePage from "./BasePage";
import {GetStartedPageObjects} from "../objectRepository/GetStartedPageObjects";

let webActions: WebActions;

export default class GetStartedPage extends BasePage {

    constructor(page: Page, context: BrowserContext) {
        super(page, context)
        webActions = new WebActions(this.page);
    }

    async checkGetStartedPageIsOpen(): Promise<void> {
        const pageTitleTxt = await this.page.title();
        console.log("Get started page title: " + pageTitleTxt);
        await expect(pageTitleTxt).toBe(GetStartedPageObjects.GET_STARTED_PAGE_TITLE_TXT);
    }

    async clickInterestedBothButton(): Promise<void> {
        await webActions.clickElement(GetStartedPageObjects.CUSTOMER_REQUIRES_CHECKBOX);
    }

    async clickCardMachineButton(choice: string): Promise<void> {
        await webActions.clickElement("label[for='CardPayments" + choice + "']");
    }

    async fillFirstName(firstName: string): Promise<void> {
        await webActions.enterElementText(GetStartedPageObjects.FIRST_NAME_FIELD, firstName);
    }

    async fillLastName(lastName: string): Promise<void> {
        await webActions.enterElementText(GetStartedPageObjects.LAST_NAME_FIELD, lastName);
    }

    async fillEmailAddress(emailAddress: string): Promise<void> {
        await webActions.enterElementText(GetStartedPageObjects.EMAIL_FIELD, emailAddress);
    }

    async fillTelephoneNumber(telephoneNumber: string): Promise<void> {
        await webActions.enterElementText(GetStartedPageObjects.TELEPHONE_NUMBER_FIELD, telephoneNumber);
    }

    async fillBusinessName(businessName: string): Promise<void> {
        await webActions.enterElementText(GetStartedPageObjects.BUSINESS_NAME_FIELD, businessName);
    }

    async fillBusinessPostcode(businessPostcode: string): Promise<void> {
        await webActions.enterElementText(GetStartedPageObjects.BUSINESS_POST_CODE_FIELD, businessPostcode);
    }

    async clickSubmitButton(): Promise<void> {
        await webActions.clickElement(GetStartedPageObjects.SUBMIT_BUTTON);
    }

    async requestFreeQuoteForInterestedBoth(choice: string, firstName: string, lastName: string, emailAddress: string, telephoneNumber: string, businessName: string, businessPostcode: string): Promise<void> {
        await this.clickInterestedBothButton();
        await this.clickCardMachineButton(choice);
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillEmailAddress(emailAddress);
        await this.fillTelephoneNumber(telephoneNumber);
        await this.fillBusinessName(businessName);
        await this.fillBusinessPostcode(businessPostcode);
        await this.clickSubmitButton();
    }

    async checkErrorMessageForEmptyBusinessPostcode(): Promise<void>{
        const errorMsg = await this.page.locator(GetStartedPageObjects.ERROR_MSG_BUSINESS_POST_CODE).textContent();
        await expect(errorMsg).toContain(GetStartedPageObjects.ERROR_MSG_BUSINESS_POST_CODE_TXT);
    }
}