import { Locator, Page } from "@playwright/test";

export class KYCPage{
    readonly page: Page;
    readonly chooseTakePhoto: Locator;
    readonly takePhotoButton: Locator;
    readonly nextButton: Locator;
    readonly custInfoNextButton: Locator;
    readonly newChannelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.chooseTakePhoto = page.getByRole('button', { name: ' ถ่ายรูปบัตร' });
        this.takePhotoButton = page.getByTestId('captureIdCard');
        this.nextButton = page.getByTestId('buttonNext');
        this.custInfoNextButton = page.getByTestId('buttonNext');
        this.newChannelButton = page.getByTestId('buttonCreateNewOrder');

    }

    async TakePhoto() {
        await this.chooseTakePhoto.click();
        await this.takePhotoButton.click();
        await this.nextButton.click();
    } 

    async CheckCustInfo() {
        try {
            await this.newChannelButton.waitFor({ state: 'visible', timeout: 10000 });
            await this.newChannelButton.click();
            await this.custInfoNextButton.click();
            } 
        catch (error) {
            await this.custInfoNextButton.click();
            }
    }
}
