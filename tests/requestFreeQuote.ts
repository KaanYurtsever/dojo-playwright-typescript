import test from "../lib/BaseTest";
import {testConfig} from "../testConfig";

test.describe("Dojo Automation", () => {

    test("Request free quote failure for business postcode @reg",  async ({basePage, getStartedPage}) => {

        await test.step("User goes to URL", async () => {
            await basePage.navigateToURL();
            await basePage.checkUrlCorrect();
            await basePage.acceptAllCookies();
            await basePage.goToGetStartedPage();
        })

        await test.step("User requests free quote failure ", async () =>{
            await getStartedPage.checkGetStartedPageIsOpen();
            await getStartedPage.requestFreeQuoteForInterestedBoth(
                testConfig.cardMachineNo,
                testConfig.firstName,
                testConfig.lastName,
                testConfig.emailAddress,
                testConfig.telephoneNumber,
                testConfig.businessName,
                testConfig.businessPostcode
            );
            await getStartedPage.checkErrorMessageForEmptyBusinessPostcode();
        })
    });
})
