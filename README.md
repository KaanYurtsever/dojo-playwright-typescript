# Dojo Automation Project
## Description of the Test
Test website is: https://dojo.tech/ \
Test steps; 
- Go to Dojo's website
- Request free quote for failure for business postcode
- Assert the error message
## Video of the test



## How to run the scenario?
You can run your tests with "npm test" on terminal, and you can choose the test you want to run on playwright.config file. Also, there are other scripts to run tests on package.json file.
## How to run the scenario with GitHub Action?
There is also the GitHub action file. You can find it at workflows. With this CI/CD, you can run your test, which is defined on github.config file.
## How to see the report of the test?
- Write on terminal 'allure serve' to see the report.
- Note: If you are using Windows, you should download allure from: 'https://docs.qameta.io/allure/', and go to environment variables then add to path.

Also, you can see reports on; playwright-report, test-results.json. 
