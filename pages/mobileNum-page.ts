import { Locator, Page } from "@playwright/test";

export class MobilePage{
    readonly page: Page;
    readonly mobileInput: Locator;
    readonly mobileChoose: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mobileInput = page.getByTestId('mobileKeyIn');
        this.mobileChoose = page.getByRole('radio', { name: 'Active' });
        this.nextButton = page.getByTestId('buttonNext');

    }

    async KeyinMobileNumber(mobileNum: string) {
        await this.mobileInput.fill('0899999999');
        await this.nextButton.click();
    } 

    async ChooseNumber() {
        await this.mobileChoose.check();
        await this.nextButton.click();
    }


}
