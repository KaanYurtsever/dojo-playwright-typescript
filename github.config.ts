import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        headless: false,
        browserName: "chromium",
    },
    timeout: 30 * 1000,
    testMatch: ["requestFreeQuote.ts"],
    retries: 1
}
export default config;
